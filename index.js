(async function () {
  console.log("Youtube Shorts Removal extension loaded.");

  const RICH_SECTION_RENDERER = "ytd-rich-section-renderer";
  const SEARCH_SHORTS_RENDERER = "ytd-reel-shelf-renderer";
  const SHORTS_SIDEBAR_BUTTON = "#items ytd-guide-entry-renderer:nth-child(2)";
  const WHOLE_SIDEBAR = "tp-yt-app-drawer";
  const PAGE_MANAGER = "ytd-page-manager#page-manager";
  const MINI_SIDEBAR = "ytd-mini-guide-renderer";
  const SIDEBAR_BURGER_TOGGLE = "yt-icon-button#guide-button";

  const HOMEPAGE_CHECKBOX = "homepage";
  const SEARCHPAGE_CHECKBOX = "searchpage";
  const SIDEBAR_CHECKBOX = "sidebar";
  const SIDEBAR_ALL_CHECKBOX = "sidebar-all";

  let results = await browser.storage.local.get(),
    homepage = results[HOMEPAGE_CHECKBOX],
    searchpage = results[SEARCHPAGE_CHECKBOX],
    sidebar = results[SIDEBAR_CHECKBOX],
    sidebarAll = results[SIDEBAR_ALL_CHECKBOX];

  if (homepage === undefined) homepage = true;
  if (searchpage === undefined) searchpage = true;
  if (sidebar === undefined) sidebar = true;
  if (sidebarAll === undefined) sidebarAll = true;

  const removeList = [
    homepage && RICH_SECTION_RENDERER,
    searchpage && SEARCH_SHORTS_RENDERER,
    sidebar && SHORTS_SIDEBAR_BUTTON,
    sidebarAll && WHOLE_SIDEBAR,
    sidebarAll && MINI_SIDEBAR,
    sidebarAll && SIDEBAR_BURGER_TOGGLE,
  ].filter((x) => x);

  var mutationObserver = new MutationObserver(() => {
    var sectionsToBeRemoved = document.querySelectorAll(removeList.join(","));
    sectionsToBeRemoved.forEach((element) => element.remove());
  });

  mutationObserver.observe(document.body, { subtree: true, childList: true });

  if (sidebarAll) {
    var YTD_APP = "ytd-app";
    var PERSISTENT_GUIDE_PADDING_STYLE = "--ytd-persistent-guide-width";
    var width = "0";

    var ytdAppContainer = document.querySelector(YTD_APP);

    ytdAppContainer?.style.setProperty(PERSISTENT_GUIDE_PADDING_STYLE, width);
  }
})();
