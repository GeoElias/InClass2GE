
const aBtn = document.getElementById("a-btn");
const bBtn = document.getElementById("b-btn");
const cBtn = document.getElementById("c-btn");
const aHideBtn = document.getElementById("a-hide-btn");
const bHideBtn = document.getElementById("b-hide-btn");
const cHideBtn = document.getElementById("c-hide-btn");


const aCard = document.getElementById("a-card");
const bCard = document.getElementById("b-card");
const cCard = document.getElementById("c-card");


aBtn.addEventListener("click", function () {
  aCard.style.visibility = "inherit";
});
bBtn.addEventListener("click", function () {
  bCard.style.visibility = "inherit";
});
cBtn.addEventListener("click", function () {
  cCard.style.visibility = "inherit";
});
aHideBtn.addEventListener("click", function () {
  aCard.style.visibility = "hidden";
});
bHideBtn.addEventListener("click", function () {
  bCard.style.visibility = "hidden";
});
cHideBtn.addEventListener("click", function () {
  cCard.style.visibility = "hidden";
});
