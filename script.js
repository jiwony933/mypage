const homeButton = document.querySelector("#menu-home");
const favButton = document.querySelector("#menu-fav");
const portfolioButton = document.querySelector("#menu-portfolio");
const contactButton = document.querySelector("#menu-contact");

function handleHomeClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function handleFavClick() {
  window.scrollTo({ top: 600, behavior: "smooth" });
}
function handlePortfolioClick() {
  window.scrollTo({ top: 1200, behavior: "smooth" });
}
function handleContactClick() {
  window.scrollTo({ top: 1800, behavior: "smooth" });
}

homeButton.addEventListener("click", handleHomeClick);
favButton.addEventListener("click", handleFavClick);
portfolioButton.addEventListener("click", handlePortfolioClick);
contactButton.addEventListener("click", handleContactClick);

function handleScroll() {
  let scrollY = this.scrollY;
  console.log(scrollY);
  if (scrollY >= 0 && scrollY < 400) {
    document.body.style.backgroundColor = "#76ba99";
    document.body.style.transition = "0.5s";
  } else if (scrollY >= 400 && scrollY < 1000) {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.transition = "0.5s";
  } else if (scrollY >= 1000 && scrollY < 1600) {
    document.body.style.backgroundColor = "beige";
    document.body.style.transition = "0.5s";
  } else if (scrollY >= 1600) {
    document.body.style.backgroundColor = "lightgrey";
    document.body.style.transition = "0.5s";
  }
}

window.addEventListener("scroll", handleScroll);
