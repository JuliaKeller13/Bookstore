let books = [
  {
    "title": "Die Geheimnisse des Ozeans",
    "cover": "./assets/images/die-geheimnisse-des-ozeans.png",
    "author": "Clara Meer",
    "likes": 1250,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2018,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
      },
      {
        "name": "Bookworm84",
        "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
      },
      {
        "name": "FantasyFanatic",
        "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
      },
      {
        "name": "SciFiGuru",
        "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
      },
      {
        "name": "NovelLover",
        "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
      }
    ]
  },
  {
    "title": "Der vergessene Pfad",
    "cover": "./assets/images/der-vergessene-pfad.png",
    "author": "Maximilian Schwarz",
    "likes": 980,
    "liked": false,
    "price": 14.50,
    "publishedYear": 2021,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "title": "Die Farben des Himmels",
    "cover": "./assets/images/die-farben-des-himmels.png",
    "author": "Laura Blau",
    "likes": 1520,
    "liked": true,
    "price": 22.95,
    "publishedYear": 2019,
    "genre": "Romantik",
    "comments": [
      {
        "name": "LeserPeter",
        "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
      },
      {
        "name": "BookLover21",
        "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
      },
      {
        "name": "FantasyNerd",
        "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
      },
      {
        "name": "SciFiEnthusiast",
        "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
      },
      {
        "name": "ReadingAddict",
        "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
      }
    ]
  },
  {
    "title": "Das Rätsel der Zeit",
    "cover": "./assets/images/das-raetsel-der-zeit.png",
    "author": "Alexander Weiss",
    "likes": 750,
    "liked": false,
    "price": 18.00,
    "publishedYear": 2020,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BuchKenner",
        "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
      },
      {
        "name": "LeseWurm",
        "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
      }
    ]
  },
  {
    "title": "Der letzte Wächter",
    "cover": "./assets/images/der-letzte-waechter.png",
    "author": "Sabine Grün",
    "likes": 1300,
    "liked": true,
    "price": 16.75,
    "publishedYear": 2017,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "title": "Im Schatten des Mondes",
    "cover": "./assets/images/im-schatten-des-mondes.png",
    "author": "Philipp Silber",
    "likes": 890,
    "liked": false,
    "price": 12.30,
    "publishedYear": 2022,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BücherLiebhaber",
        "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
      },
      {
        "name": "Leseratte",
        "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
      }
    ]
  },
  {
    "title": "Jenseits der Sterne",
    "cover": "./assets/images/jenseits-der-sterne.png",
    "author": "Oliver Schwarz",
    "likes": 1450,
    "liked": true,
    "price": 21.00,
    "publishedYear": 2015,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
      }
    ]
  },
  {
    "title": "Das verborgene Königreich",
    "cover": "./assets/images/das-verborgene-koenigreich.png",
    "author": "Elena Gold",
    "likes": 920,
    "liked": false,
    "price": 17.50,
    "publishedYear": 2020,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Bookworm92",
        "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
      }
    ]
  },
  {
    "title": "Liebe in Zeiten des Krieges",
    "cover": "./assets/images/liebe-in-zeiten-des-krieges.png",
    "author": "Emilia Rot",
    "likes": 1800,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2016,
    "genre": "Romantik",
    "comments": [
      {
        "name": "Bibliophile23",
        "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
      },
      {
        "name": "StorySeeker",
        "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
      },
      {
        "name": "SciFiExplorer",
        "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
      }
    ]
  }
];

function init() {
  getFromLocalStorage();
  renderBookCards();
}

function renderBookCards() {
  let bookCardSectionRef = document.getElementById("bookCardSection");
  bookCardSectionRef.innerHTML = "";

  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    bookCardSectionRef.innerHTML += getBookCardsHtml(indexBook);
  }
}

function like(indexBook) {
  let book = books[indexBook];

  if (book.liked) {
    book.likes--;
    book.liked = false;
  } else {
    book.likes++;
    book.liked = true;
  }

  saveToLocalStorage();
  renderBookCards();
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

function addComment (event, indexBook){
  event.preventDefault();

  let nameInput = document.getElementById(`userName-${indexBook}`);
  let commentInput = document.getElementById(`userComment-${indexBook}`);
  let newComment = {"name": nameInput.value, "comment": commentInput.value};

  books[indexBook].comments.push(newComment);
  nameInput.value = ""; 
  commentInput.value = "";

  let commentsContainer = document.querySelector(
    `.comments-container[data-book="${indexBook}"]`
  );

  commentsContainer.innerHTML = getBooksComments(indexBook);

  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  let modifiedBooks = JSON.parse(localStorage.getItem("books"));
  books = modifiedBooks;
}