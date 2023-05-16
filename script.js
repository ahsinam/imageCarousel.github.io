const WIDTH = 400;
const SLIDSHOWTIME = 4000;
let slidePosition = 0;
let TIMER = null;

const leftIcon = document.querySelector("#left");
const rightIcon = document.querySelector("#right");
const images = document.querySelectorAll("img");
const dots = document.querySelectorAll(".circles button");
const numberOfImages = images.length;

const changeImageHandler = (slideposition) => {
  images.forEach((image) => {
    image.style.display = "none";
  });
  images[slidePosition].style.display = "flex";
  images[slidePosition].classList.add("active");
  dots[slidePosition].style.backgroundColor = "#1eaeac";
};

const showPreviousImageHandler = () => {
  images[slidePosition].classList.remove("active");
  dots[slidePosition].style.backgroundColor = "";
  slidePosition < 1
    ? (slidePosition = numberOfImages - 1)
    : (slidePosition -= 1);
  changeImageHandler(slidePosition);
};

const showNextImageHandler = () => {
  images[slidePosition].classList.remove("active");
  dots[slidePosition].style.backgroundColor = "";
  slidePosition >= numberOfImages - 1
    ? (slidePosition = 0)
    : (slidePosition += 1);
  changeImageHandler(slidePosition);
};
TIMER = setInterval(showNextImageHandler, SLIDSHOWTIME);

const resetTimer = () => {
  if (TIMER) {
    console.log(TIMER);
    clearInterval(TIMER);
  }
  TIMER = setInterval(showNextImageHandler, SLIDSHOWTIME);
};

leftIcon.addEventListener("click", () => {
  showPreviousImageHandler();
  resetTimer();
});

rightIcon.addEventListener("click", () => {
  showNextImageHandler();
  resetTimer();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots[slidePosition].style.backgroundColor = "";
    slidePosition = index - 1;
    if (slidePosition < 0) {
      slidePosition = numberOfImages - 1;
    }
    showNextImageHandler();
    resetTimer();
  });
});
