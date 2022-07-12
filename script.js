const homeButton = document.querySelector("#menu-home");
const whoButton = document.querySelector("#menu-who");
const portfolioButton = document.querySelector("#menu-portfolio");
const contactButton = document.querySelector("#menu-contact");

function handleHomeClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.style.backgroundColor = "#76ba99";
  document.body.style.transition = "0.5s";
}
function handleWhoClick() {
  window.scrollTo({ top: 600, behavior: "smooth" });
  document.body.style.backgroundColor = "lightblue";
  document.body.style.transition = "0.5s";
}
function handlePortfolioClick() {
  window.scrollTo({ top: 1200, behavior: "smooth" });
  document.body.style.backgroundColor = "beige";
  document.body.style.transition = "0.5s";
}
function handleContactClick() {
  window.scrollTo({ top: 1800, behavior: "smooth" });
  document.body.style.backgroundColor = "lightgrey";
  document.body.style.transition = "0.5s";
}

homeButton.addEventListener("click", handleHomeClick);
whoButton.addEventListener("click", handleWhoClick);
portfolioButton.addEventListener("click", handlePortfolioClick);
contactButton.addEventListener("click", handleContactClick);
