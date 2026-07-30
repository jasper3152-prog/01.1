// =============================================
// 星河夢境新手教學指南 — 搜尋邏輯
// search.js
// 不需要修改這支檔案
// =============================================

const searchInput = document.getElementById("globalSearchInput");
const searchResults = document.getElementById("searchResults");

function renderResults(list, hasKeyword) {
  searchResults.innerHTML = "";
  if (!hasKeyword) {
    searchResults.innerHTML = '<div class="search-empty">請輸入關鍵字開始搜尋。</div>';
    searchResults.classList.remove("active");
    return;
  }
  searchResults.classList.add("active");
  if (!list.length) {
    searchResults.innerHTML = '<div class="search-empty">沒有找到符合的條目。</div>';
    return;
  }
  list.forEach(item => {
    const a = document.createElement("a");
    a.className = "search-result-item";
    a.href = item.url;
    a.innerHTML = `
      <strong>${item.name}</strong>
      <div class="search-result-meta">${item.category}</div>
      <div class="search-result-desc">${item.desc}</div>
    `;
    searchResults.appendChild(a);
  });
}

function doSearch(keyword) {
  const value = keyword.trim().toLowerCase();
  if (!value) { renderResults([], false); return; }
  const filtered = searchData.filter(item => {
    return (
      item.name.toLowerCase().includes(value) ||
      item.category.toLowerCase().includes(value) ||
      item.desc.toLowerCase().includes(value)
    );
  });
  renderResults(filtered, true);
}

searchInput.addEventListener("input", (e) => {
  doSearch(e.target.value);
});

document.addEventListener("click", (e) => {
  const searchArea = document.querySelector(".search-area");
  if (searchArea && !searchArea.contains(e.target)) {
    searchResults.classList.remove("active");
  }
});

searchInput.addEventListener("focus", () => {
  if (searchInput.value.trim()) {
    searchResults.classList.add("active");
  }
});