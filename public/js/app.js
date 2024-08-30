function initSwiper() {
  return new Swiper(".swiper", {
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
}

document.addEventListener("DOMContentLoaded", () => {
  let swiper = initSwiper(); // Inisialisasi Swiper pada halaman pertama kali dimuat
  const nav = document.querySelector(".nex-prev");
  nav.style.display = "none";
  console.log(nav);

  barba.init({
    transitions: [
      {
        name: "opacity-transition",
        async leave(data) {
          let namespace = data.current.namespace;

          if (namespace === "page-a") {
            gsap.fromTo(
              ".wipe-container",
              1,
              { opacity: "0" },
              { opacity: "1" }
            );
            gsap.fromTo(
              ".wipe",
              0.5,
              { y: "100%", duration: 1, stagger: 0.1 },
              {
                y: "0%",
                duration: 1,
                stagger: 0.1,
                onComplete: () => {
                  console.log(nav);
                  nav.style.display = "inline-block";
                },
              }
            );
          } else if (namespace === "page-b") {
            gsap.fromTo(
              ".wipe-container",
              1,
              { opacity: "0" },
              { opacity: "1" }
            );
            gsap.fromTo(
              ".wipe",
              0.5,
              { y: "-100%", duration: 1, stagger: 0.1 },
              {
                y: "0%",
                duration: 1,
                stagger: 0.1,
                onComplete: () => {
                  nav.style.display = "none";
                },
              }
            );
          }
          return gsap.to(data.current.container, 1, {
            opacity: 1,
          });
        },
        async enter(data) {
          let namespace = data.next.namespace;

          if (namespace === "page-a") {
            gsap.fromTo(
              ".wipe",
              1,
              { y: "0%", duration: 1, stagger: 0.1 },
              {
                y: "100%",
                duration: 1,
                stagger: 0.1,
              }
            );
          } else if (namespace === "page-b") {
            gsap.fromTo(
              ".wipe",
              1,
              { y: "0%", duration: 1, stagger: 0.1 },
              {
                y: "-100%",
                duration: 1,
                stagger: 0.1,
                onComplete: () => {
                  swiper = initSwiper(); // Inisialisasi ulang Swiper setelah masuk halaman baru
                },
              }
            );
          }

          gsap.from(data.next.container, 1.5, {
            opacity: 1,
          });

          // Hapus inisialisasi Swiper sebelumnya dan inisialisasi ulang pada halaman baru
          if (swiper) {
            swiper.destroy(); // Hapus inisialisasi Swiper sebelumnya
          }
          swiper = initSwiper(); // Inisialisasi Swiper pada halaman baru
        },
        // async once(data) {
        //   gsap.set(data.current.namespace, { y: "-100%" });
        //   swiper = initSwiper(); // Inisialisasi Swiper pada halaman pertama kali dimuat
        // },
      },
    ],
  });
});
