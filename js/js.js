window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let slideIndex = 1, // текущий слайдер
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".slider-prev"),
    next = document.querySelector(".slider-next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot"),
    video = document.querySelector(".video-wrp"),
    playVideoBtn = document.querySelectorAll(".plan_btn"),
    darkBlock = document.querySelector(".dark"),
    closeBtn = document.querySelector(".close");

  showSlides(slideIndex);
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none"));
    dots.forEach((item) => item.classList.remove("dot-active"));
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].classList.add("dot-active");
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  prev.addEventListener("click", function () {
    plusSlides(-1);
  });

  next.addEventListener("click", function () {
    plusSlides(1);
  });

  dotsWrap.addEventListener("click", function (event) {
    event = event.target;
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.classList.contains("dot") && event == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });

  playVideoBtn.forEach((item) =>
    item.addEventListener("click", function () {
      video.style.display = "block";
      darkBlock.style.display = "block";
      document.body.style.overflow = "hidden";

      closeBtn.addEventListener("click", function () {
        video.style.display = "none";
        darkBlock.style.display = "none";
        document.body.style.overflow = "";
      });
    })
  );
});
