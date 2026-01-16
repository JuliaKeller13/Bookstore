function getBooksHtml(indexBook) {
  return `
    <div class="book-card" tabindex="0">
      <h3>${books[indexBook].title}</h3>
      <img src="${books[indexBook].cover}" alt="${books[indexBook].title}" class="cover-img">
    </div>
  `;
}