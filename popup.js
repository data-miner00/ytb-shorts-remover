/// <reference path="./index.d.ts" />

const HOMEPAGE_CHECKBOX = "homepage";
const SEARCHPAGE_CHECKBOX = "searchpage";
const SIDEBAR_CHECKBOX = "sidebar";

const homepageCheckbox = document.querySelector('[name="homepage"]');
const searchpageCheckbox = document.querySelector('[name="searchpage"]');
const sidebarCheckbox = document.querySelector('[name="sidebar"]');

homepageCheckbox.addEventListener("change", (event) => {
  setValue(HOMEPAGE_CHECKBOX, event.target.checked);
});

searchpageCheckbox.addEventListener("change", (event) => {
  setValue(SEARCHPAGE_CHECKBOX, event.target.checked);
});

sidebarCheckbox.addEventListener("change", (event) => {
  setValue(SIDEBAR_CHECKBOX, event.target.checked);
});

const button = document.querySelector("button");

button.addEventListener("click", () => openInNewTab());

async function setValue(key, value) {
  await browser.storage.local.set({ [key]: value });
}

async function init() {
  let results = await browser.storage.local.get(),
    homepage = results[HOMEPAGE_CHECKBOX],
    searchpage = results[SEARCHPAGE_CHECKBOX],
    sidebar = results[SIDEBAR_CHECKBOX];

  if (homepage === undefined) homepage = true;
  if (searchpage === undefined) searchpage = true;
  if (sidebar === undefined) sidebar = true;

  homepageCheckbox.checked = homepage;
  searchpageCheckbox.checked = searchpage;
  sidebarCheckbox.checked = sidebar;

  setValue(HOMEPAGE_CHECKBOX, homepage);
  setValue(SEARCHPAGE_CHECKBOX, searchpage);
  setValue(SIDEBAR_CHECKBOX, sidebar);
}

function openInNewTab() {
  return browser.tabs.create({ url: "/popup.html" });
}

init().catch(console.error);
