function getBookCardsHtml(indexBook) {
  return `
    <div class="book-card" tabindex="0">
        <h2>${books[indexBook].title}</h2>

        <img src="${books[indexBook].cover}" alt="${books[indexBook].title}" class="cover-img">

        <div class="book-info-section info-text">
          <p class="book-info"><strong>Autor:</strong> ${books[indexBook].author}</p>
          <p><strong>Erschien:</strong> ${books[indexBook].publishedYear}</p>
          <p><strong>Genre:</strong> ${books[indexBook].genre}</p>
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

        <div class="separator"></div>

        <div class="comments-container">
            ${getBookCommentsHtml(books.comments)}
        </div>

        <div class="input-comment">
          <h3>Kommentare</h3>
          <form id="commentForm-${indexBook}">
            <div class="input-group">
              <label for="userName-${indexBook}">Name:</label>
              <input type="text" id="userName-${indexBook}" name="name" placeholder="Dein Name..." required>
            </div>
            <div class="input-group">
              <label for="userComment-${indexBook}">Kommentar:</label>
              <textarea id="userComment-${indexBook}" name="comment" rows="3"
                placeholder="Was sagst du zu diesem Buch?" required></textarea>
            </div>
            <div class="send-comment-button-container">
              <button type="submit" class="send-comment-button">
                <img src="./assets/icons/send.png" alt="senden" class="send-icon"/>
              </button>
            </div>
          </form>
        </div>

    </div>
  `;
}

     function getBookCommentsHtml(indexBook){
      return `
          
          
          
        `;
     }