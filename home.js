const emoticons = ["jw1.png", "jw2.png", "jw3.png", "jw4.png"];

const todayEmoticon = emoticons[Math.floor(Math.random() * emoticons.length)];

const etImg = document.createElement("img");

etImg.src = `src/${todayEmoticon}`;
etImg.width = 300;

const homePage = document.querySelector(".home");

homePage.appendChild(etImg);
