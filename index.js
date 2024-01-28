(async function () {
  console.log("Youtube Shorts Removal extension loaded.");

  const RICH_SECTION_RENDERER = "ytd-rich-section-renderer";
  const SEARCH_SHORTS_RENDERER = "ytd-reel-shelf-renderer";
  const SHORTS_SIDEBAR_BUTTON = "#items ytd-guide-entry-renderer:nth-child(2)";
  const HOMEPAGE_CHECKBOX = "homepage";
  const SEARCHPAGE_CHECKBOX = "searchpage";
  const SIDEBAR_CHECKBOX = "sidebar";

  let results = await browser.storage.local.get(),
    homepage = results[HOMEPAGE_CHECKBOX],
    searchpage = results[SEARCHPAGE_CHECKBOX],
    sidebar = results[SIDEBAR_CHECKBOX];

  if (homepage === undefined) homepage = true;
  if (searchpage === undefined) searchpage = true;
  if (sidebar === undefined) sidebar = true;

  const removeList = [
    homepage && RICH_SECTION_RENDERER,
    searchpage && SEARCH_SHORTS_RENDERER,
    sidebar && SHORTS_SIDEBAR_BUTTON,
  ].filter((x) => x);

  var mutationObserver = new MutationObserver(() => {
    var richRendererSections = document.querySelectorAll(removeList.join(","));
    richRendererSections.forEach((element) => element.remove());
  });

  mutationObserver.observe(document.body, { subtree: true, childList: true });
})();
