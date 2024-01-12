(function () {
  console.log("Youtube Shorts Removal extension loaded.");
  var mutationObserver = new MutationObserver(() => {
    var richRendererSections = document.querySelectorAll(
      "ytd-rich-section-renderer"
    );
    richRendererSections.forEach((element) => element.remove());
  });

  mutationObserver.observe(document.body, { subtree: true, childList: true });
})();
