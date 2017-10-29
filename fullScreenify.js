"use strict";

// try to turn iframe fullScreen
// return true if successful, otherwise false
function fullScreenify(_, obs) {
  const iframe = document.querySelector("iframe.d2l-fileviewer-rendered-pdf");

  if (iframe) {
    const src = iframe.src;
    iframe.src = "";

    const newIframe = document.createElement("iframe");
    document.body.style.overflow = "hidden";
    document.body.appendChild(newIframe);
    newIframe.src = src;
    newIframe.style.position = "absolute";
    newIframe.style.top = "0";
    newIframe.style.left = "0";
    newIframe.style.width = "100%";
    console.log(window.innerHeight)
    newIframe.style.height = "100%"//`${window.innerHeight}px`;
    newIframe.style.zIndex = "1000";
    newIframe.focus();

    if (obs) {
      obs.disconnect();
    }

    return true;
  }

  return false;
}


/* try to make fullScreen right away; if iframe non-existent, wait for MutationObserver
 -> Chrome has iframe at first — so it doesn't need a MutationObserver
 -> Firefox doesn't have the iframe right away — so it needs a MutationObserver
*/
if (!fullScreenify()) {
  const observed = document.getElementById("ContentView");
  const obs = new MutationObserver(fullScreenify);
  obs.observe(observed, {
    childList: true,
    subtree: true,
  });
}