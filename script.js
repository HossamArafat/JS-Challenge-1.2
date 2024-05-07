// Menu
const menuToggle = document.querySelector(".bar");
const navigation = document.querySelector(".menu");


menuToggle.addEventListener("click", function () {
  navigation.classList.toggle("toggle-menu");
});

// Services
const serviceCards = document.querySelectorAll(".box");
const serviceTitles = document.querySelectorAll(".box h3");
const serviceExpandDots = document.querySelectorAll(".dots span");


serviceExpandDots.forEach((span, i) => {
  span.addEventListener("click", () => {
    resetServices();

    serviceCards[i].classList.add("actives");
    serviceTitles[i].classList.add("active");
    span.classList.add("dot");
    serviceCards[i].scrollIntoView({ behavior: "smooth" });
  });
});

function resetServices() {
  serviceCards.forEach((box) => {
    box.classList.remove("actives");
  });
  serviceTitles.forEach((h2) => {
    h2.classList.remove("active");
  });
  serviceExpandDots.forEach((span) => {
    span.classList.remove("dot");
  });
}


//Slider One

const sliderContainers = document.querySelectorAll(".slider .content");
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".prev-btn");

sliderContainers.forEach((item, i) => {
  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += 150;
  });

  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 150;
  });
});

// Slider Two
const productContainers = document.querySelectorAll(".customers");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

productContainers.forEach((ele, j) => {
  nxtBtn[j].addEventListener("click", () => {
    ele.scrollLeft += 150;
  });

  preBtn[j].addEventListener("click", () => {
    ele.scrollLeft -= 150;
  });
});


