const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  on: {
    slideChange: function () {
      const prevButton = document.querySelector(".custom-swiper-button-prev");
      const nextButton = document.querySelector(".custom-swiper-button-next");

      if (this.activeIndex > 0) {
        prevButton.classList.remove("opacity-0");
        prevButton.classList.add("opacity-100");
      } else {
        prevButton.classList.remove("opacity-100");
        prevButton.classList.add("opacity-0");
      }
      
      if (this.isEnd) {
        nextButton.classList.remove("opacity-100");
        nextButton.classList.add("opacity-0");
      } else {
        nextButton.classList.remove("opacity-0");
        nextButton.classList.add("opacity-100");
      }
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

console.log(swiper);