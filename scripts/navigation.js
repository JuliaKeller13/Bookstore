// //ham menu
// const hamMenu = document.querySelector(".ham-menu");
// const offScreenMenu = document.querySelector(".off-screen-menu");
      
// hamMenu.addEventListener("click", function () {
//   hamMenu.classList.toggle("active");
//   offScreenMenu.classList.toggle("active");
// });

// //activ page
// const currentPage = window.location.pathname;

// document.querySelectorAll("hauptmenu a").forEach(link => {
//     if (link.href.includes(currentPage)) {
//         link.classList.add("active");
//     }
// });

//Keyboard fuction global
function handleKey(event, action) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    action();
  }
}