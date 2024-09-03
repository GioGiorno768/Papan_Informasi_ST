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

  gsap.from(".swipe-right", {
    x: -100,
    duration: 1.5,
    opacity: 0,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0,0.408 0.235,0.783 0.444,0.822 0.655,0.861 0.723,0.737 1,0.737 "
    ),
  });
  gsap.from(".swipe-up", {
    y: 100,
    duration: 1.5,
    opacity: 0,
    ease: "circ.out",
  });

  gsap.from(".swipe-left", {
    x: 300,
    duration: 1.5,
    opacity: 0,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0,0.408 0.235,0.783 0.444,0.822 0.655,0.861 0.723,0.737 1,0.737 "
    ),
  });

  gsap.from(".b-kediri", {
    x: -200,
    duration: 1,
    opacity: 0,
    delay: 1,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0,0.408 0.235,0.783 0.444,0.822 0.655,0.861 0.723,0.737 1,0.737 "
    ),
  });
  gsap.from(".b-sekartaji", {
    x: 600,
    duration: 1,
    opacity: 0,
    delay: 1,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0,0.408 0.235,0.783 0.444,0.822 0.655,0.861 0.723,0.737 1,0.737 "
    ),
  });

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
                onComplete: () => {
                  console.log("on");
                },
              }
            );
            gsap.fromTo(
              ".swipe-right",
              {
                x: -100,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                delay: .5,
                duration: 1.5,
                ease: CustomEase.create(
                  "custom",
                  "M0,0 C0,0.408 0.235,0.783 0.444,0.822 0.655,0.861 0.723,0.737 1,0.737 "
                ),
              }
            );
            gsap.fromTo(
              ".swipe-up",
              {
                y: 150,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                delay: .5,
                duration: 1.5,
                ease: "circ.out",
              }
            );
            gsap.fromTo(
              ".swipe-left",
              {
                x: 300,
                opacity: 0,
              },
              {
                x: 0,
                duration: 1.5,
                delay: .5,
                opacity: 1,
                ease: CustomEase.create(
                  "custom",
                  "M0,0 C0,0.408 0.235,0.783 0.444,0.822 0.655,0.861 0.723,0.737 1,0.737 "
                ),
              }
            );
            gsap.fromTo(".b-kediri", {
              x: -200,
              opacity: 0
            }, {
              x: 0,
              opacity: .1,
              delay: 1.5,
              duration: 1,
              ease: CustomEase.create(
                "custom",
                "M0,0 C0,0.408 0.235,0.783 0.444,0.822 0.655,0.861 0.723,0.737 1,0.737 "
              ),
            });
            gsap.fromTo(".b-sekartaji", {
              x: 600,
              opacity: 0
            }, {
              x: 0,
              opacity: .1,
              delay: 1.5,
              duration: 1,
              ease: CustomEase.create(
                "custom",
                "M0,0 C0,0.408 0.235,0.783 0.444,0.822 0.655,0.861 0.723,0.737 1,0.737 "
              ),
            });
            
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
