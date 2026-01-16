function getBooksHtml(indexBook) {
  return `
    <div class="book-card" tabindex="0">
      <h3>${books[indexBook].title}</h3>
      <img src="${books[indexBook].cover}" alt="${books[indexBook].title}" class="cover-img">
      <div class="book-info-section">
        <p class="book-info">Autor: ${books[indexBook].author}</p>
        <p>Erschien: ${books[indexBook].publishedYear}</p>
        <p>Genre: ${books[indexBook].genre}</p>
      </div>
      <div class="like-and-price">
        <p class="price">${books[indexBook].price.toFixed(2)}€</p>
        <div class="like-amount">
          <button id="likeButton" class="like-button" onClick="like()">
            <img src="./assets/icons/heart.png" alt="like" style="width:22px"/>
          </button>
          <p>${books[indexBook].likes}</p>
        </div>
      </div>
    </div>
  `;
}