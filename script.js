const home = document.querySelector("#home");
const who = document.querySelector("#who");
const portfolio = document.querySelector("#portfolio");
const contact = document.querySelector("#contact");

function handleHomeClick() {
  window.scrollTo(0, 0);
}

home.addEventListener("click", handleHomeClick);
