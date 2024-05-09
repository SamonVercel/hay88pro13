const btnImage = document.querySelectorAll(".btn");
var hideButton = document.querySelector(".hide-button");
var navId = document.querySelector("#nav-id");
var showButton = document.querySelector(".show-button");

hideButton.addEventListener("click", () => {
  hideButton.style = "right: 50%";
  setTimeout(() => {
    navId.style = "left: -100%";
    showButton.style = "display: block";
  }, 100);
});

showButton.addEventListener("click", () => {
  navId.style = "left: 0";
  showButton.style = "display: none";
  hideButton.style = "right: 20px";
});

let topButton = document.querySelector(".top-button");
topButton.addEventListener("click", topFunction);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
