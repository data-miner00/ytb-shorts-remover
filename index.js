(async function () {
  console.log("Youtube Shorts Removal extension loaded.");

  const RICH_SECTION_RENDERER = "ytd-rich-section-renderer";
  const SEARCH_SHORTS_RENDERER = "ytd-reel-shelf-renderer";
  const SHORTS_SIDEBAR_BUTTON = "#items ytd-guide-entry-renderer:nth-child(2)";
  const WHOLE_SIDEBAR = "tp-yt-app-drawer";
  const PAGE_MANAGER = "ytd-page-manager#page-manager";
  const MINI_SIDEBAR = "ytd-mini-guide-renderer";
  const SIDEBAR_BURGER_TOGGLE = "yt-icon-button#guide-button";
  const PLAYLIST_HEADER = "ytd-playlist-header-renderer";

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
    sidebarAll && PLAYLIST_HEADER,
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

  createToTopButton();
})();

function createToTopButton() {
  var toTopButton = document.createElement("a");
  var s = toTopButton.style;

  toTopButton.href = "#";
  toTopButton.innerHTML = `<svg style="display: block;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg>`;
  toTopButton.title = "Scroll to top";
  s.position = "fixed";
  s.bottom = "10px";
  s.right = "10px";
  s.height = "30px";
  s.width = "30px";
  s.background = "red";
  s.color = "white";
  s.padding = "4px";
  s.fontSize = "16px";
  s.borderRadius = "999px";
  s.display = "flex";
  s.justifyContent = "center";
  s.alignItems = "center";
  s.zIndex = "10";

  document.body.appendChild(toTopButton);
}
