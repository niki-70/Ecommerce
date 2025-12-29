const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");

const searchBox = document.querySelector(".searchShow");
const bgScreen = document.querySelector(".background");

ham.addEventListener("click", () => {
  nav.classList.toggle("show");
});

function callFunc() {
  document.querySelector(".PhoneCallNoMob").classList.toggle("showMobNo");
}

function searchfunc() {
  searchBox.classList.add("searchPopup");
  bgScreen.classList.add("searchPopup");
}

function closeBtn() {
  searchBox.classList.remove("searchPopup");
  bgScreen.classList.remove("searchPopup");
}

const Allitems = document.querySelectorAll(".item");
const category = document.querySelector(".categoryItem");
let index = 0;

console.log(Allitems);
document.querySelector(".rightArr").addEventListener("click", () => {
  index++;
  if (index >= 9) {
    index = 0;
  }

  console.log(index);

  showslide();
});

document.querySelector(".leftArr").addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = 8;
  }
  console.log(index);
  showslide();
});

function showslide() {
  category.style.transform = `translateX(-${index * 200}px)`;
}

const Alltestimonial = document.querySelectorAll(".testimonialCard");
const cards = document.querySelector(".testimonialGrid");
let i = 0;

console.log(cards);
document.querySelector(".navBtn2").addEventListener("click", () => {
  i++;
  if (i >= Alltestimonial.length - 2) {
    i = Alltestimonial.length - 3;
  }
  showslide();
  console.log(i);
});

document.querySelector(".navBtn1").addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = 0;
  }
  console.log(i);
  showslide();
});

function showslide() {
  cards.style.transform = `translateX(-${i * 300}px)`;
}
