const homeButton = document.querySelector("#home");
const whoButton = document.querySelector("#who");
const portfolioButton = document.querySelector("#portfolio");
const contactButton = document.querySelector("#contact");

function handleHomeClick() {
  window.scrollTo(0, 0);
}

function handleWhoClick() {}
function handlePortfolioClick() {}
function handleContactClick() {}

homeButton.addEventListener("click", handleHomeClick);
whoButton.addEventListener("click", handleWhoClick);
portfolioButton.addEventListener("click", handlePortfolioClick);
contactButton.addEventListener("click", handleContactClick);

//commit again
