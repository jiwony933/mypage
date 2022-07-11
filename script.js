const homeButton = document.querySelector("#home");
const whoButton = document.querySelector("#who");
const portfolioButton = document.querySelector("#portfolio");
const contactButton = document.querySelector("#contact");

function handleHomeClick() {
  window.scrollTo(0, 0);
}
function handleWhoClick() {
  window.scrollTo(0, 0);
}
function handlePortfolioClick() {
  window.scrollTo(0, 0);
}
function handleContactClick() {
  window.scrollTo(0, 0);
}

homeButton.addEventListener("click", handleHomeClick);
whoButton.addEventListener("click", handleWhoClick);
portfolioButton.addEventListener("click", handlePortfolioClick);
contactButton.addEventListener("click", handleContactClick);

//commit test
