const tabs = Array.from(document.getElementsByClassName("tab"));
const tabsContents = Array.from(document.getElementsByClassName("tab__content"));

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];
  
  tab.addEventListener("click", clickOnTabs);

  function clickOnTabs() {
    const activeTab = document.querySelector(".tab_active");
    const activeTabContent = document.querySelector(".tab__content_active");

    activeTab.classList.remove("tab_active");
    activeTabContent.classList.remove("tab__content_active");

    tab.classList.add("tab_active");
    tabsContents[tabs.indexOf(tab)].classList.add("tab__content_active");
  }
}