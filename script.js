const WIDTH = 400;
const SLIDSHOWTIME = 4000;
let slidePosition = 0;

const leftIcon = document.querySelector("#left");
const rightIcon = document.querySelector("#right");
const images = document.querySelectorAll("img");
const numberOfImages = images.length;

const changeImageHandler = (slideposition) => {
  images.forEach((image) => {
    image.style.display = "none";
  });
  // for (i = 0; i < numberOfImages; i++) {
  //   images[i].style.display = "none";
  // }
  images[slidePosition].style.display = "flex";
};

const showPreviousImageHandler = () => {
  images[slidePosition].classList.remove("active");
  slidePosition < 1
    ? (slidePosition = numberOfImages - 1)
    : (slidePosition -= 1);
  changeImageHandler(slidePosition);
  images[slidePosition].classList.add("active");
};

const showNextImageHandler = () => {
  images[slidePosition].classList.remove("active");
  slidePosition >= numberOfImages - 1
    ? (slidePosition = 0)
    : (slidePosition += 1);
  changeImageHandler(slidePosition);
  images[slidePosition].classList.add("active");

  setTimeout(showNextImageHandler, SLIDSHOWTIME);
};
setTimeout(showNextImageHandler, SLIDSHOWTIME);

leftIcon.addEventListener("click", showPreviousImageHandler);

rightIcon.addEventListener("click", showNextImageHandler);
