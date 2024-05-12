var homepageCheckbox = document.querySelector('[name="homepage"]');
var searchpageCheckbox = document.querySelector('[name="searchpage"]');
var sidebarCheckbox = document.querySelector('[name="sidebar"]');
var sidebarAllCheckbox = document.querySelector('[name="sidebar-all"]');
var searchForm = document.querySelector('[name="youtube-search-form"]');

var checkboxes = [
  [homepageCheckbox, HOMEPAGE_CHECKBOX],
  [searchpageCheckbox, SEARCHPAGE_CHECKBOX],
  [sidebarCheckbox, SIDEBAR_CHECKBOX],
  [sidebarAllCheckbox, SIDEBAR_ALL_CHECKBOX],
];

checkboxes.forEach((entries) => {
  entries[0].addEventListener("change", (event) => {
    setValue(entries[1], event.target.checked);
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  var rawQuery = event.target["youtube-search-input"].value;
  var encodedQuery = encodeURIComponent(rawQuery);

  var searchUrl = SEARCH_QUERY_URL + encodedQuery;
  window.open(searchUrl, "_blank").focus();
  searchForm.reset();
});

var button = document.querySelector("button#extension-link");

button.addEventListener("click", () => openInNewTab());

focusSearchInput();

var results = await browser.storage.local.get(),
  homepage = results[HOMEPAGE_CHECKBOX],
  searchpage = results[SEARCHPAGE_CHECKBOX],
  sidebar = results[SIDEBAR_CHECKBOX],
  sidebarAll = results[SIDEBAR_ALL_CHECKBOX];

if (homepage === undefined) homepage = true;
if (searchpage === undefined) searchpage = true;
if (sidebar === undefined) sidebar = true;
if (sidebarAll === undefined) sidebarAll = true;

homepageCheckbox.checked = homepage;
searchpageCheckbox.checked = searchpage;
sidebarCheckbox.checked = sidebar;
sidebarAllCheckbox.checked = sidebarAll;

setValue(HOMEPAGE_CHECKBOX, homepage);
setValue(SEARCHPAGE_CHECKBOX, searchpage);
setValue(SIDEBAR_CHECKBOX, sidebar);
setValue(SIDEBAR_ALL_CHECKBOX, sidebarAll);

async function setValue(key, value) {
  await browser.storage.local.set({ [key]: value });
}

function openInNewTab() {
  return browser.tabs.create({ url: "/popup.html" });
}

function focusSearchInput() {
  document.querySelector('[name="youtube-search-input"]').focus();
}
