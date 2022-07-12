let imgIndex = 0;
let position = 0;

const IMAGE_WIDTH = 300;

const btPrev = document.querySelector(".prev");
const btNext = document.querySelector(".next");
const imgs = document.querySelector(".images");

function prevImg() {
  if (imgIndex > 0) {
    btNext.removeAttribute("disabled");
    position += IMAGE_WIDTH;
    imgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    btPrev.setAttribute("disabled", "true");
  }
}

function nextImg() {
  if (imgIndex < 8) {
    btPrev.removeAttribute("disabled");
    position -= IMAGE_WIDTH;
    imgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 8) {
    btNext.setAttribute("disabled", "true");
  }
}

function init() {
  btPrev.setAttribute("disabled", "true");
  btPrev.addEventListener("click", prevImg);
  btNext.addEventListener("click", nextImg);
}

init();
