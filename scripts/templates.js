function getBookCardsHtml(indexBook) {
  return `
    <div class="book-card" tabindex="0">
        <h3>${books[indexBook].title}</h3>
        <img src="${books[indexBook].cover}" alt="${books[indexBook].title}" class="cover-img">
        <div class="book-info-with-button">
          <div class="book-info-section info-text">
            <p class="book-info"><strong>Autor:</strong> ${books[indexBook].author}</p>
            <p><strong>Erschien:</strong> ${books[indexBook].publishedYear}</p>
            <p><strong>Genre:</strong> ${books[indexBook].genre}</p>
          </div>
          <button>Mehr erfahren</button>
        </div>
        <div class="like-and-price">
          <p class="price">${books[indexBook].price.toFixed(2)}€</p>
          <div class="like-amount">
            <button id="likeButton-${indexBook}" class="like-button" onclick="toggleLike(${indexBook})">
              <img
                src="./assets/icons/heart.png"
                alt="like"
                class="${books[indexBook].liked ? 'liked' : ''}"
              />
            </button>
            <p>${books[indexBook].likes}</p>
          </div>
        </div>
      </div>
  `;
}


{/*     <div class="comments-container">
          <h3>Kommentare</h3>
          <div class="comments">
            <p></p>
          </div>
          <form id="commentForm-${indexBook}">
            <div class="input-group">
              <label for="name">Name</label>
              <input type="text" class="user-name" id="userComment-${indexBook}" name="name" placeholder="Dein Name..." required>
            </div>
            <div class="input-group">
              <label for="comment">Kommentar</label>
              <textarea class="user-comment" id="userComment-${indexBook}" name="comment" rows="3"
                placeholder="Was sagst du zu diesem Buch?" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Absenden</button>
          </form>
        </div> */}