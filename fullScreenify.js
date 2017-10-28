const observed = document.getElementById("ContentView");
const obs = new MutationObserver(mutatationCB);
obs.observe(observed, {
  childList: true,
  subtree: true,
});

function mutatationCB() {
  const iframe = document.querySelector('iframe');

  if (iframe) {
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.zIndex = "1000";

    obs.disconnect();
  }
}