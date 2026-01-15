function getBooksHtml(indexBook) {
  return `
    <div class="book-card" tabindex="0">
      <h3>${books[indexBook].name}</h3>
      <img src="${books[indexBook].cover}" alt="${books[indexBook].name}" width="120">
    </div>
  `;
}