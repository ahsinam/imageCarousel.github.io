const WIDTH = 400;
const SLIDSHOWTIME = 4000;
let slidePosition = 0;

const leftIcon = document.querySelector("#left");
const rightIcon = document.querySelector("#right");
const images = document.querySelectorAll("img");
const numberOfImages = images.length;

const changeImage = (slideposition) => {
  for (i = 0; i < numberOfImages; i++) {
    images[i].style.display = "none";
  }
  images[slidePosition].style.display = "flex";
};

const showPreviousImage = () => {
  images[slidePosition].classList.remove("active");
  slidePosition < 1
    ? (slidePosition = numberOfImages - 1)
    : (slidePosition -= 1);
  changeImage(slidePosition);

  images[slidePosition].classList.add("active");
};

const showNextImage = () => {
  images[slidePosition].classList.remove("active");
  slidePosition >= numberOfImages - 1
    ? (slidePosition = 0)
    : (slidePosition += 1);

  changeImage(slidePosition);

  images[slidePosition].classList.add("active");

  setTimeout(showNextImage, SLIDSHOWTIME);
};
setTimeout(showNextImage, SLIDSHOWTIME);

leftIcon.addEventListener("click", showPreviousImage);

rightIcon.addEventListener("click", showNextImage);
