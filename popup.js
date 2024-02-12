/// <reference path="./index.d.ts" />

const HOMEPAGE_CHECKBOX = "homepage";
const SEARCHPAGE_CHECKBOX = "searchpage";
const SIDEBAR_CHECKBOX = "sidebar";
const SIDEBAR_ALL_CHECKBOX = "sidebar-all";

const homepageCheckbox = document.querySelector('[name="homepage"]');
const searchpageCheckbox = document.querySelector('[name="searchpage"]');
const sidebarCheckbox = document.querySelector('[name="sidebar"]');
const sidebarAllCheckbox = document.querySelector('[name="sidebar-all"]');

const checkboxes = [
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

const button = document.querySelector("button#extension-link");

button.addEventListener("click", () => openInNewTab());

async function setValue(key, value) {
  await browser.storage.local.set({ [key]: value });
}

async function init() {
  let results = await browser.storage.local.get(),
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
}

function openInNewTab() {
  return browser.tabs.create({ url: "/popup.html" });
}

init().catch(console.error);
