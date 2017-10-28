"use strict";

// try to turn iframe fullScreen
// return true if successful, otherwise false
function fullScreenify(_, obs) {
  const iframe = document.querySelector("iframe");

  if (iframe) {
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.zIndex = "1000";
    iframe.focus();

    if (obs) {
      obs.disconnect();
    }

    return true;
  }

  return false;
}

if (!fullScreenify()) {
  const observed = document.getElementById("ContentView");
  const obs = new MutationObserver(fullScreenify);
  obs.observe(observed, {
    childList: true,
    subtree: true,
  });
}