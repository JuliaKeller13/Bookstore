function getBooksHtml(indexBook) {
  return `
    <div class="book-card" tabindex="0">
      <h3>${books[indexBook].title}</h3>
      <img src="${books[indexBook].cover}" alt="${books[indexBook].title}" class="cover-img">
      <p class="book-info">Autor: ${books[indexBook].author}</p>
      <div class="like-and-price">
        <p class="price">${books[indexBook].price} €</p>
        <div>
          <p>${books[indexBook].likes}</p>
          <button id="likeButton" class="like-button" onClick="like()">
            <img src="./assets/icons/heart.png" alt="like" style="width:22px"/>
          </button>
        </div>
      </div>
    </div>
  `;
}