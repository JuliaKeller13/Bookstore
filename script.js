let currentGenre = "";

function init() {
  if (!localStorage.getItem("books")) {
    saveToLocalStorage();
  }
  getFromLocalStorage();
  renderBookCards();
}

function renderBookCards() {
  let bookCardSectionRef = document.getElementById("bookCardSection");
  bookCardSectionRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    if (currentGenre === "" || books[i].genre === currentGenre) {
      bookCardSectionRef.innerHTML += getBookCardsHtml(i);
    }
  }
}

function like(indexBook) {
  let book = books[indexBook];

  book.liked = !book.liked;
  book.likes += book.liked ? 1 : -1;

  saveToLocalStorage();

  const likeIcon = document.getElementById(`likeIcon-${indexBook}`);
  const likeCount = document.getElementById(`likeCount-${indexBook}`);

  if (likeIcon) {
    likeIcon.classList.toggle("liked", book.liked);
  }
  if (likeCount) {
    likeCount.textContent = book.likes;
  }
}

function getBooksComments(indexBook) {
  let comments = books[indexBook].comments;
  let commentsContainer = "";

  for (let i = 0; i < comments.length; i++) {
    commentsContainer += `
      <div class="comment-box info-text">
        <b>${comments[i].name}</b>: ${comments[i].comment}
      </div>
    `;
  }

  if (comments.length === 0) {
    return `<p class="no-comments">Noch keine Kommentare vorhanden.</p>`;
  }

  return commentsContainer;
}

function addComment(event, indexBook) {
  event.preventDefault();

  let nameInput = document.getElementById(`userName-${indexBook}`);
  let commentInput = document.getElementById(`userComment-${indexBook}`);
  let newComment = { "name": nameInput.value, "comment": commentInput.value };

  books[indexBook].comments.push(newComment);
  nameInput.value = "";
  commentInput.value = "";

  let commentsContainer = document.querySelector(
    `.comments-container[data-book="${indexBook}"]`
  );

  commentsContainer.innerHTML = getBooksComments(indexBook);

  saveToLocalStorage();

  setTimeout(() => {
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
  }, 0);
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  let modifiedBooks = localStorage.getItem("books");

  if (modifiedBooks) {
    books = JSON.parse(modifiedBooks);
  } else {
    saveToLocalStorage();
  }
}

document.getElementById("genreFilter").addEventListener("change", function () {
  currentGenre = document.getElementById("genreFilter").value;
  renderBookCards();
});

function filterBooks() {
  let selectedGenre = document.getElementById("genreFilter").value;
  let bookCardSectionRef = document.getElementById("bookCardSection");
  bookCardSectionRef.innerHTML = "";

  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    if (selectedGenre === "" || books[indexBook].genre === selectedGenre) {
      bookCardSectionRef.innerHTML += getBookCardsHtml(indexBook);
    }
  }
}
