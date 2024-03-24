/**
 * 隐藏搜索栏热搜列表
 */
chrome.storage.sync.get(["biliplus-enable", "hide-hot-search-list"], (storage) => {
  if (storage["biliplus-enable"] && storage["hide-hot-search-list"]) {
    const navSearch = document.querySelector('.search-panel')
    navSearch.classList.add('biliplus-hide-hot-search-list')
  }
});
