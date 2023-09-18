// const menuButton = document.querySelector(".header__burger");
// const menuButton1 = document.querySelector(".header__menu");
// const contentBody = document.querySelector("body");
// menuButton.onclick = function () {
//   menuButton.classList.toggle("active");
//   menuButton1.classList.toggle("active");
//   contentBody.classList.toggle("lock");
// }
// menuButton1.onclick = function () {
//   menuButton.classList.remove("active");
//   menuButton1.classList.remove("active");
//   contentBody.classList.remove("lock");
// }
// document.querySelector('#tab').addEventListener('click', setScrollIntoView);
// function setScrollIntoView(false) {
//   const blockSelected = document.querySelector('#tab');
//   blockSelected.scrollIntoView({
//     block: "end",
//     inline: "auto",
//     behavior: "smooth",
//   });
// }
"use strict";
if (isMobile.any()) {
  document.body.classList.add("__touch");
} else {
  document.body.classList.add("__pc");
}
