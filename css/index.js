function myFunction(x) {
    x.classList.toggle("change");
}

new Swiper('.logo-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 80
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 35
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 120
    }
  }
});

/**
 * Init swiper slider with 1 slide at once in desktop view
 */
new Swiper('.slides-1', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

/**
 * Init swiper slider with 3 slides at once in desktop view
 */
new Swiper('.slides-3', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },

    1200: {
      slidesPerView: 2,
    }
  }
});

const text = document.querySelector(".sec-text");

const textLoad = () => {
setTimeout(() => {
    text.textContent = "Web Developer";
}, 0);
setTimeout(() => {
    text.textContent = "UI/UX Developer";
}, 4000);
setTimeout(() => {
    text.textContent = "Freelancer";
}, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

var menu_btn = document.querySelector("#menu-btn")
var sidebar = document.querySelector("#sidebar")
var container = document.querySelector(".my-container")
menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav")
    container.classList.toggle("active-cont")
})