const body = document.querySelector("body");
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const projectMapBtn = document.querySelector(".project-page__button_map");
if (projectMapBtn) {
  projectMapBtn.addEventListener("click", function (e) {
    console.log("тест");
    const body = projectMapBtn.closest("body");
    body.classList.toggle("project-page__full-map");
  });
}

//------------------- start трансформация фильтра:----------------

const apartmentsPage = document.querySelector(".apartments-page");
if (apartmentsPage) {
  const choice = apartmentsPage.querySelector(".choice");

  const choiceTop = apartmentsPage.querySelector(".choice__inputs-list_top");
  const choiceBot = apartmentsPage.querySelector(".choice__inputs-list_bot");

  // const el = Array.from(choiceBot.children)[3];
  const el = apartmentsPage
    .querySelector(".choice__inputs-list_bot")
    .querySelector(".choice__input-block_slider_floor"); //
  console.log(el);

  window.addEventListener("scroll", () => {
    console.log("scroll");
    if (window.scrollY > 500) {
      console.log(window.scrollY);
      choiceTop.append(el);
      choice.classList.add("choice_fixed");
    } else {
      // choiceTop.prepend(el);
      choiceBot.append(el);
      choice.classList.remove("choice_fixed");
    }
  });

}
//------------------- end трансформация фильтра----------------
// --------------------------------------- start бокове меню: ---------------------------------------------
const asideMenu = document.querySelector(".aside-menu");
if (asideMenu) {
  const links = asideMenu.querySelectorAll(".slider__toggle-link");

  links.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("тест");
      links.forEach((item) => {
        item.classList.remove("slider__toggle-link_active");
      });
      item.classList.add("slider__toggle-link_active");
    });
  });

  document.addEventListener("scroll", () => {
    console.log("scroll");

    // получаем все секции с атрибутом id
    let sections = Array.from(document.querySelectorAll("section")).filter(
      (section) => section.hasAttribute("id")
    );

    sections.forEach((section) => {
      // получаем параметры секции
      const rect = section.getBoundingClientRect();
      // проверяем что начало секции находится в первой половине экрана
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        console.log(rect.top);
        links.forEach((item) => {
          if (item.getAttribute("href").replace("#", "") === section.id) {
            item.classList.add("slider__toggle-link_active");
          } else {
            item.classList.remove("slider__toggle-link_active");
          }
        });
      }
    });
  });
}
// --------------------------------------- end бокове меню: ---------------------------------------------

const contactsPage = document.querySelector(".contacts-page");
if (contactsPage) {
  const btnsOpen = contactsPage.querySelectorAll(".address__item-btn_plus");
  const wrappers = contactsPage.querySelectorAll(".address__wrapper");
  const minusOpen = contactsPage.querySelectorAll(".address__item-btn_minus");

  btnsOpen.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("тест");
      wrappers.forEach((item) => {
        item.classList.add("address__wrapper_close");
      });
      const wrapper = item.closest(".address__wrapper");
      wrapper.classList.remove("address__wrapper_close");
    });
  });

  minusOpen.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("тест");
      wrappers.forEach((item) => {
        item.classList.add("address__wrapper_close");
      });
      const wrapper = item.closest(".address__wrapper");
      wrapper.classList.add("address__wrapper_close");
    });
  });
}

// --------------------------------------- start кнопки ремонта: ---------------------------------------------
const aboutBtnWrap = document.querySelector(".about__btn-wrap");
if (aboutBtnWrap) {
  const aboutBtns = aboutBtnWrap.querySelectorAll(".about__btn"); // console.log(aboutBtns);
  aboutBtns.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("тест");
      aboutBtns.forEach((item) => {
        item.classList.remove("about__btn_active");
      });
      item.classList.add("about__btn_active");
    });
  });
}

const sliderBtnList = document.querySelector(".slider__btn-list");
if (sliderBtnList) {
  const sliderBtns = sliderBtnList.querySelectorAll(".slider__btn");
  sliderBtns.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("тест");
      sliderBtns.forEach((item) => {
        item.classList.remove("slider__btn_active");
      });
      item.classList.add("slider__btn_active");
    });
  });
}
// --------------------------------------- end кнопки ремонта: ---------------------------------------------
//подсветка активного пункта меню:---------------------------------------------------------

// const page = body.getAttribute("data-page");
// const navLinks = document.querySelectorAll(".nav__link");
// navLinks.forEach((item) => {
//   if (item.getAttribute("href") === `${page}.html`) {
//     item.classList.add("nav__link_active");
//   }
// });

let page = window.location.pathname.split("/").pop();
if (page === "") {
  page = "index";
} else {
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((item) => {
    if (item.getAttribute("href").includes(page)) {
      item.classList.add("nav__link_active");
    }
  });
}

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   allowTouchMove: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
// -------------------------------------------- start range-slider: ---------------------------------------------

function rangeSliderInit(slider, gap, minRange, maxRange) {
  const rangeSlider = slider.querySelector(".range-slider");
  // текстовые инпуты:
  const priceInputs = slider.querySelectorAll(
    ".choice__slider-select .select__input"
  );
  const textInputMin = slider.querySelector(".select__input_from");
  const textInputMax = slider.querySelector(".select__input_to");
  // console.log(priceInputs);
  // рендж инпуты:
  const rangeInputs = slider.querySelectorAll(".range-inputs-wrap input");
  const rangeInputMin = slider.querySelector(".min-range");
  const rangeInputMax = slider.querySelector(".max-range");

  // основные параметры:
  gap = gap;
  minRange = minRange;
  maxRange = maxRange;

  // присваиваем значения инпутам:
  textInputMin.min = minRange;
  textInputMax.min = minRange;
  rangeInputMin.min = minRange;
  rangeInputMax.min = minRange;

  textInputMin.max = maxRange;
  textInputMax.max = maxRange;
  rangeInputMin.max = maxRange;
  rangeInputMax.max = maxRange;

  textInputMin.step = gap;
  textInputMax.step = gap;
  rangeInputMin.step = gap;
  rangeInputMax.step = gap;

  // value должно стоять соследним!!!
  textInputMin.value = minRange;
  textInputMax.value = maxRange;
  rangeInputMin.value = minRange;
  rangeInputMax.value = maxRange;

  // обработка событий текстовых инпутов:
  priceInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      //получаем значения из текстовых инпутов:
      let minVal = parseInt(textInputMin.value);
      let maxVal = parseInt(textInputMax.value);
      let diff = maxVal - minVal;

      // ограничиваем значение min инпута:
      if (minVal < minRange) {
        textInputMin.value = minRange;
        minVal = minRange;
      }

      // ограничиваем значение max инпута:
      if (maxVal > maxRange) {
        textInputMax.value = maxRange;
        maxVal = maxRange;
      }

      // ограничиваем максимальное значение min инпута:
      if (e.target === textInputMin) {
        if (minVal > maxVal - gap) {
          textInputMin.value = maxVal - gap;
          minVal = maxVal - gap;
        }
      }

      // ограничиваем минимальное значение max инпута:
      if (e.target === textInputMax) {
        if (maxVal < minVal + gap) {
          textInputMax.value = minVal + gap;
          maxVal = minVal + gap;
        }
      }

      // вычисляем положение рендж инпутов:
      if (diff >= gap) {
        rangeInputMax.value = maxVal;
        rangeInputMin.value = minVal;
        rangeSlider.style.right = `${
          100 - ((maxVal - minRange) * 100) / (maxRange - minRange)
        }%`;
        rangeSlider.style.left = `${
          ((minVal - minRange) * 100) / (maxRange - minRange)
        }%`;
      }
    });
  });

  rangeInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      //получаем значения из текстовых инпутов:
      let minVal = parseInt(rangeInputMin.value);
      let maxVal = parseInt(rangeInputMax.value);
      let diff = maxVal - minVal;

      // ограничиваем значение min инпута:
      if (minVal < minRange) {
        rangeInputMin.value = minRange;
        minVal = minRange;
      }

      // ограничиваем значение max инпута:
      if (maxVal > maxRange) {
        rangeInputMax.value = maxRange;
        maxVal = maxRange;
      }

      // ограничиваем максимальное значение min инпута:
      if (e.target === rangeInputMin) {
        if (minVal > maxVal - gap) {
          rangeInputMin.value = maxVal - gap;
          minVal = maxVal - gap;
        }
      }

      // ограничиваем минимальное значение max инпута:
      if (e.target === rangeInputMax) {
        if (maxVal < minVal + gap) {
          rangeInputMax.value = minVal + gap;
          maxVal = minVal + gap;
        }
      }

      // вычисляем положение рендж инпутов:
      if (diff >= gap) {
        textInputMin.value = minVal;
        textInputMax.value = maxVal;
        rangeSlider.style.right = `${
          100 - ((maxVal - minRange) * 100) / (maxRange - minRange)
        }%`;
        rangeSlider.style.left = `${
          ((minVal - minRange) * 100) / (maxRange - minRange)
        }%`;
      }
    });
  });
}

const squareSlider = document.querySelector(".choice__slider-select_square");
if (squareSlider) {
  rangeSliderInit(squareSlider, 1, 26, 81);
}

const costSlider = document.querySelector(".choice__slider-select_cost");
if (costSlider) {
  rangeSliderInit(costSlider, 1, 2300000, 7000000);
}

const floorSlider = document.querySelector(".choice__slider-select_floor");
if (floorSlider) {
  rangeSliderInit(floorSlider, 1, 1, 4);
}

// -------------------------------------------- end range-slider: ---------------------------------------------
// -------------------------------------------- start checkbox-lable: ---------------------------------------------
const checkbox = document.querySelectorAll(".checkbox__label");
if (checkbox) {
  checkbox.forEach((item) => {
    if (item.querySelector(".checkbox__input").checked) {
      item.classList.add("checkbox__label_active");
    }
    item.addEventListener("click", function () {
      console.log("тест");
      checkbox.forEach((item) => {
        item.classList.remove("checkbox__label_active");
      });
      item.classList.add("checkbox__label_active");
    });
  });
}
// -------------------------------------------- end checkbox-lable: ---------------------------------------------
// -------------------------------------------- start slider: ---------------------------------------------
new Swiper(".news-slider_swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  slidesPerView: 3.2, // сколько слайдов показывать, можно дробно
  // slidesPerView: 'auto', // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  centeredSlides: true, //выравнивание слайдов по центру
  initialSlide: 1, //начальный слайд (c нуля)

  spaceBetween: 40,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3.35,
    },
  },
});

new Swiper(".building_swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: "auto", // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 40,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-building",
    prevEl: ".swiper-button-prev-building",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
    },
    500: {
      // slidesPerView: 2,
    },
    800: {
      // slidesPerView: 3.35,
    },
  },
});

new Swiper(".regions_swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: "auto", // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 20,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_reg",
    prevEl: ".swiper-button-prev_reg",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
    },
    500: {
      // slidesPerView: 2,
    },
    800: {
      // slidesPerView: 3.35,
    },
  },
});

new Swiper(".apartments_swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: "auto", // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 10,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_apart",
    prevEl: ".swiper-button-prev_apart",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
    },
    500: {
      // slidesPerView: 2,
    },
    800: {
      // slidesPerView: 3.35,
    },
  },
});

new Swiper(".commercial_swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: "auto", // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 21,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_apart",
    prevEl: ".swiper-button-prev_apart",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
    },
    500: {
      // slidesPerView: 2,
    },
    800: {
      // slidesPerView: 3.35,
    },
  },
});

new Swiper(".promo_swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: 1, // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 20,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_promo",
    prevEl: ".swiper-button-prev_promo",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
    },
    500: {
      // slidesPerView: 2,
    },
    800: {
      // slidesPerView: 3.35,
    },
  },
});

new Swiper(".catalog__item-slider", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: 1, // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 20,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  // watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_card",
    prevEl: ".swiper-button-prev_card",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
    },
    500: {
      // slidesPerView: 2,
    },
    800: {
      // slidesPerView: 3.35,
    },
  },
});

new Swiper(".news_swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: "auto", // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 40,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_news",
    prevEl: ".swiper-button-prev_news",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
    },
    500: {
      // slidesPerView: 2,
    },
    800: {
      // slidesPerView: 3.35,
    },
  },
});

new Swiper(".reparation_swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: 1, // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  // spaceBetween: 40,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_rep",
    prevEl: ".swiper-button-prev_rep",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
    },
    500: {
      // slidesPerView: 2,
    },
    800: {
      // slidesPerView: 3.35,
    },
  },
});

new Swiper(".slider_swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: "auto", // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  // spaceBetween: 40,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  // watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next_slider",
    prevEl: ".swiper-button-prev_slider",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
    },
    500: {
      // slidesPerView: 2,
    },
    800: {
      // slidesPerView: 3.35,
    },
  },
});
// -------------------------------------------- end slider: ---------------------------------------------
// -------------------------------------------- start popup: ---------------------------------------------
const popupLinks = document.querySelectorAll(".popup-link");
const lockPadding = document.querySelectorAll(".lock-padding");
// const btn = document.querySelector(".project-btn");

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      console.log("тест");
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName); //получаем id попап-окна
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".popup-close");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      console.log("тест");
      popupClose(el.closest(".popup")); //ближайший родитель класса popup
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      // закрываем текущий открытый попап, если он есть
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    // console.log(curentPopup);
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      console.log("тест");
      if (!e.target.closest(".popup__content")) {
        // если клик был по области вокруг попапа то ничего не делаем
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

// добавляем боди padding-right при открытии попапа, на ширину скролл-бара
function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".header").offsetWidth + "px";
  // console.log(lockPaddingValue);
  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.marginRight = lockPaddingValue;
    // console.log(el.style.marginRight);
  }
  body.style.paddingRight = lockPaddingValue;
  // console.log(body.style.paddingRight);
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.marginRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});
// -------------------------------------------- end popup: ---------------------------------------------

// -------------------------------------------- start gallery: ---------------------------------------------
// const previews = document.querySelectorAll(".plans__item");

// if (previews) {
//   previews.forEach((item) => {
//     item.addEventListener("click", function () {
// console.log('тест');
//       const imgBox = document.querySelector(".plans__img").querySelector("img");
//       const img = item.querySelector("img").getAttribute("src");
//       imgBox.setAttribute("src", img);
//     });
//   });
// }

// -------------------------------------------- end gallery: ---------------------------------------------

// -------------------------------------------- start btn_montage: ---------------------------------------------

// -------------------------------------------- end btn_montage ---------------------------------------------

// -------------------------------------------- start корзина: ---------------------------------------------

const headerCartBtn = document.querySelector(".btn__cart");
if (headerCartBtn) {
  function setCartActive() {
    headerCartBtn.classList.add("btn__cart_active");
  }
  function setCartEmpty() {
    headerCartBtn.classList.remove("btn__cart_active");
  }
  headerCartBtn.addEventListener("click", function (e) {
    console.log("тест");
    e.preventDefault();
    window.location.href = "cart.html";
  });
}

const cartItemDelBtns = document.querySelectorAll(".card__del-btn");
if (cartItemDelBtns) {
  cartItemDelBtns.forEach((item) => {
    const el = item.closest(".cart__card");
    item.addEventListener("click", function (e) {
      console.log("тест");
      e.preventDefault();
      el.remove();
      getTotalCost();
    });
  });
}

const cartCards = document.querySelectorAll(".cart__card");

if (cartCards.length) {
  // console.log(cartCards);
  const btnMontage = document.querySelectorAll(".btn_montage");
  if (btnMontage) {
    btnMontage.forEach((item) => {
      // изменение вида кнопки при клике:
      item.addEventListener("click", function () {
        console.log("тест");
        item.classList.toggle("btn_montage_active");
        // const cost = item.closest(".cart__card").querySelector(".card__cost");
        // let quontity = item
        //   .closest(".cart__card")
        //   .querySelector(".card__counter-value").value;
        // console.log(quontity);
        getTotalCost();
      });
    });
  }

  cartCards.forEach((item) => {
    // счетчик количества карточек в корзине:
    const plus = item.querySelector(".card__counter-btn_plus");
    const minus = item.querySelector(".card__counter-btn_minus");
    const counterValue = item.querySelector(".card__counter-value");
    let quontity = 0;

    counterValue.addEventListener("input", function (e) {
      if (Number(counterValue.value) <= 0) {
        quontity = 0;
        counterValue.value = 0;
      } else {
        quontity = counterValue.value;
      }
      getCost(item, quontity);
      getTotalCost();
    });

    plus.addEventListener("click", function () {
      console.log("тест");
      quontity++;
      counterValue.value = quontity;
      getCost(item, quontity);
      getTotalCost();
      setCartActive();
    });
    minus.addEventListener("click", function () {
      console.log("тест");
      if (counterValue.value > 0) {
        quontity--;
        counterValue.value = quontity;
        getCost(item, quontity);
        getTotalCost();
      }
    });
  });
}

// вычисление стоимости товара в корзине, в зависимости от количества:
function getCost(item, quontity) {
  // console.log("getCost");
  const cost = item.querySelector(".card__cost");
  const priceText = item.querySelector(".card__price").innerHTML;
  const price = parseInt(priceText.replace(/\s/g, ""));
  cost.innerHTML = (price * quontity).toLocaleString();
}

// вычисление общей стоимости товаров в корзине:
function getTotalCost() {
  // console.log(55);
  let total = 0;
  const totalCost = document.querySelector(".form__cost-value");
  let allCosts = document.querySelectorAll(".card__cost");

  allCosts.forEach((item) => {
    total += parseInt(item.innerHTML.replace("&nbsp;", ""));
    totalCost.innerHTML = total.toLocaleString();
  });
  if (total === 0) {
    setCartEmpty();
    totalCost.innerHTML = "0";
  }
}

// -------------------------------------------- end корзина ---------------------------------------------

// -------------------------------------------- start О компании: ---------------------------------------------

const btns = document.querySelectorAll(".stage__item");

const articles = document.querySelectorAll(".stage__article");

if (btns.length) {
  // console.log(btns);
  btns.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("тест");
      btns.forEach((item) => {
        item.classList.remove("stage__item_active");
      });
      const id = item.getAttribute("data-id");
      articles.forEach((item) => {
        item.classList.remove("stage__article_active");
        if (item.getAttribute("data-id") === id) {
          item.classList.add("stage__article_active");
        }
      });
      // document.querySelector(`.stage__article[data-id="${id}"]`).classList.add("stage__article_active");
      item.classList.toggle("stage__item_active");
    });
  });
}
// -------------------------------------------- end О компании ---------------------------------------------

// -------------------------------------------- start Отзывы: ---------------------------------------------

// document.addEventListener("click", function (e) {
//   console.log('тест');
//   // закрытие отзывов при клике на другой елемент:
//   if (!e.target.closest(".card_about_open")) {
//     const cardsFeedback = document.querySelectorAll(".card_about");

//     cardsFeedback.forEach((item) => {
//       item.classList.remove("card_about_open");
//     });
//   }

//   // открытие отзывов:
//   const openBtns = document.querySelectorAll(".feedback-btn_open");
//   if (openBtns) {
//     openBtns.forEach((item) => {
//       if (e.target.closest(".feedback-btn_open") == item) {
//         const card = item.closest(".card_about");
//         const truthCardTextBlock = card.querySelector(".card__desc_hide");
//         const truthCardText = truthCardTextBlock.textContent;
//         const cardTextBlockForShow = card.querySelector(".card__desc_show");
//         card.classList.add("card_about_open");
//         cardTextBlockForShow.textContent = truthCardText;
//       }
//     });
//   }

//   // закрытие отзывов:
//   const closeBtns = document.querySelectorAll(".feedback-btn_close");
//   if (closeBtns) {
//     closeBtns.forEach((item) => {
//       if (e.target.closest(".feedback-btn_close") == item) {
//         const card = item.closest(".card_about");
//         const truthCardTextBlock = card.querySelector(".card__desc_hide");
//         const truthCardText = truthCardTextBlock.textContent;
//         const cardTextBlockForShow = card.querySelector(".card__desc_show");
//         card.classList.remove("card_about_open");
//         const cardTextTrim = truthCardText.slice(0, 140) + "...";
//         cardTextBlockForShow.textContent = cardTextTrim;
//       }
//     });
//   }
// });

// // форматирование отзывов при загрузке страницы:
// const cardsFeedback = document.querySelectorAll(".card_about");
// if (cardsFeedback.length) {
//   cardsFeedback.forEach((item) => {
//     const truthCardTextBlock = item.querySelector(".card__desc_hide");
//     const truthCardText = truthCardTextBlock.textContent;
//     // console.log(truthCardText);
//     const cardTextBlockForShow = item.querySelector(".card__desc_show");

//     if (truthCardText.length > 160) {
//       item.classList.add("card_about_overflow");
//       const cardTextTrim = truthCardText.slice(0, 140) + "...";
//       cardTextBlockForShow.textContent = cardTextTrim;
//     } else {
//       cardTextBlockForShow.textContent = truthCardText;
//     }
//   });
// }

// -------------------------------------------- end Отзывы ---------------------------------------------

// -------------------------------------------- start Каталог: ---------------------------------------------
const catalog = document.querySelector(".catalog-all-main");
if (catalog) {
  const activOptionsItem = document.querySelectorAll(".activ-options__item");
  if (activOptionsItem) {
    activOptionsItem.forEach((item) => {
      const closeBtn = item.querySelector(".activ-options__icon");
      closeBtn.addEventListener("click", function () {
        console.log("тест");
        item.remove();
      });
    });
  }

  const allActivOptionsDelBtn = document.querySelector(
    ".activ-options__del-all"
  );
  if (allActivOptionsDelBtn) {
    const closeBtn = allActivOptionsDelBtn.querySelector(
      ".activ-options__icon"
    );
    closeBtn.addEventListener("click", function () {
      console.log("тест");
      activOptionsItem.forEach((item) => {
        item.remove();
      });
      allActivOptionsDelBtn.remove();
    });
  }

  const menuItem = catalog.querySelectorAll(".filter__item_head");
  menuItem.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("тест");
      menuItem.forEach((item) => {
        item.classList.remove("filter__item_head_active");
      });
      item.classList.add("filter__item_head_active");
    });
  });

  //открытие фильтра:
  const filterItem = catalog.querySelectorAll(".filter__item_body");
  filterItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      console.log("тест");
      //закрытие всех остальных фильтров:
      filterItem.forEach((item) => {
        if (item !== e.target.closest(".filter__item_body")) {
          item.classList.remove("filter__item_body_active");
          const arrow = item.querySelector(".filter__icon");
          arrow.classList.remove("filter__icon_active");
        }
      });

      item.classList.toggle("filter__item_body_active");
      const arrow = item.querySelector(".filter__icon");
      arrow.classList.toggle("filter__icon_active");
    });
  });

  // закрытие фильтра:
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      filterItem.forEach((item) => {
        item.classList.remove("filter__item_body_active");
        const arrow = item.querySelector(".filter__icon");
        arrow.classList.remove("filter__icon_active");
      });
    }
  });
  document.addEventListener("click", function (e) {
    console.log("тест");
    if (!e.target.closest(".filter__item_body")) {
      filterItem.forEach((item) => {
        item.classList.remove("filter__item_body_active");
        const arrow = item.querySelector(".filter__icon");
        arrow.classList.remove("filter__icon_active");
      });
    }
  });

  const catalogCards = document.querySelectorAll(".catalog-all__item");

  if (catalogCards.length) {
    // console.log(catalogCards);
    catalogCards.forEach((item) => {
      const cartLinkBtn = item.querySelector(".in-cart__icon");
      cartLinkBtn.addEventListener("click", function (e) {
        console.log("тест");
        e.preventDefault();
        window.location.href = cartLinkBtn.getAttribute("data-href");
      });

      const colorBtn = item.querySelectorAll(".card__color-item");
      if (colorBtn) {
        colorBtn.forEach((item) => {
          item.addEventListener("click", function (e) {
            console.log("тест");
            e.preventDefault();
            colorBtn.forEach((item) => {
              item.classList.remove("card__color-item_active");
            });
            item.classList.add("card__color-item_active");
          });
        });
      }

      const toCartBtn = item.querySelector(".card__btn_to-cart");
      toCartBtn.addEventListener("click", function (e) {
        console.log("тест");
        e.preventDefault();
      });
      const cartBtn = item.querySelector(".card__btn_in-cart");
      cartBtn.addEventListener("click", function (e) {
        console.log("тест");
        e.preventDefault();
      });

      // счетчик количества карточек в корзине:
      const plus = item.querySelector(".card__counter-btn_plus");
      const minus = item.querySelector(".card__counter-btn_minus");
      const counterValue = item.querySelector(".card__counter-value");
      let quontity = 0;

      // counterValue.addEventListener("change", function (e) {
      //   quontity = e.target.value;
      // });
      counterValue.addEventListener("input", function (e) {
        if (Number(counterValue.value) <= 0) {
          quontity = 0;
          counterValue.value = "";
        } else {
          quontity = counterValue.value;
        }
      });

      plus.addEventListener("click", function (e) {
        console.log("тест");
        e.preventDefault();

        quontity++;
        counterValue.value = quontity;
        // getCost(item, quontity);
        // getTotalCost();
      });
      minus.addEventListener("click", function (e) {
        console.log("тест");
        if (counterValue.value > 0) {
          e.preventDefault();

          quontity--;
          counterValue.value = quontity;
          // getCost(item, quontity);
          // getTotalCost();
        }
      });

      const montageBtn = item.querySelector(".btn_montage");

      montageBtn.addEventListener("click", function (e) {
        console.log("тест");
        e.preventDefault();
        montageBtn.classList.toggle("btn_montage_active");
      });

      toCartBtn.addEventListener("click", function (e) {
        console.log("тест");
        e.preventDefault();
        toCartBtn.classList.add("card__btn_to-cart_hide");
        cartBtn.classList.add("card__btn_in-cart_visible");
      });
    });
  }
}

// -------------------------------------------- end Каталог ---------------------------------------------
// -------------------------------------------- start Описание товара: ---------------------------------------------

// const goodsItem = document.querySelector(".goods-item__main");
// if (goodsItem) {
//   const montageBtn = goodsItem.querySelector(".btn_montage");

//   montageBtn.addEventListener("click", function (e) {
// console.log('тест');
//     e.preventDefault();
//     montageBtn.classList.toggle("btn_montage_active");
//   });

//   const botMenu = goodsItem.querySelectorAll(".bot-block__menu-item");
//   const botText = goodsItem.querySelectorAll(".bot-block__text");
//   botMenu.forEach((item) => {
//     item.addEventListener("click", function (e) {
// console.log('тест');
//       const id = item.getAttribute("data-id");
//       botMenu.forEach((item) => {
//         item.classList.remove("bot-block__menu-item_active");
//       });
//       item.classList.add("bot-block__menu-item_active");

//       botText.forEach((item) => {
//         item.classList.remove("bot-block__text_active");
//         if (item.getAttribute("data-id") === id) {
//           item.classList.add("bot-block__text_active");
//         }
//       });
//     });
//   });

//   const previews = document.querySelectorAll(".small-img-wrap__img");

//   if (previews) {
//     previews.forEach((item) => {
//       item.addEventListener("click", function () {
// console.log('тест');
//         const imgBox = document
//           .querySelector(".goods-item__img")
//           .querySelector("img");
//         const img = item.querySelector("img").getAttribute("src");
//         imgBox.setAttribute("src", img);
//       });
//     });
//   }

//   // счетчик количества карточек в корзине:
//   const plus = goodsItem.querySelector(".in-cart__counter-btn_plus");
//   const minus = goodsItem.querySelector(".in-cart__counter-btn_minus");
//   const counterValue = goodsItem.querySelector(".in-cart__counter-value");
//   const totalCost = goodsItem.querySelector(".cost__cost-value");
//   const priceEl = goodsItem.querySelector(".in-cart__price").innerHTML;
//   let price = parseInt(priceEl.replace(/\s/g, ""));
//   console.log(totalCost);

//   let quontity = 0;
//   counterValue.addEventListener("input", function (e) {
//     if (Number(counterValue.value) <= 0) {
//       quontity = 0;
//       counterValue.value = 0;
//     } else {
//       quontity = counterValue.value;
//     }
//     totalCost.innerHTML = (quontity * price).toLocaleString();
//   });

//   plus.addEventListener("click", function (e) {
// console.log('тест');
//     quontity++;
//     counterValue.value = quontity;
//     console.log(quontity * price);
//     totalCost.innerHTML = (quontity * price).toLocaleString();
//   });

//   minus.addEventListener("click", function (e) {
// console.log('тест');
//     if (counterValue.value > 0) {
//       quontity--;
//       counterValue.value = quontity;
//       totalCost.innerHTML = (quontity * price).toLocaleString();
//       console.log(quontity * price);
//       totalCost.innerHTML = (quontity * price).toLocaleString();
//     }
//   });

//   const colorBtn = goodsItem.querySelectorAll(".color-list__color-item");
//   if (colorBtn) {
//     colorBtn.forEach((item) => {
//       item.addEventListener("click", function (e) {
// console.log('тест');
//         e.preventDefault();
//         colorBtn.forEach((item) => {
//           item.classList.remove("color-list__color-item_active");
//         });
//         item.classList.add("color-list__color-item_active");
//       });
//     });
//   }
// }

// -------------------------------------------- end Описание товара ---------------------------------------------
// -------------------------------------------- start OWL: ---------------------------------------------
// let margin = 16;

// jQuery(($) => {
//   if ($(window).width() <= 768) {
//     margin = 13;
//   }
// });
// // console.log(window.screen.width / 340);

// jQuery(($) => {
//   if ($(window).width() > 0) {
//     $(".owl-carousel-index").owlCarousel({
//       // screenLeft:true,
//       // startPosition: 1,

//       loop: false,
//       // center: true,
//       margin: 20,
//       items: 4,
//       nav: true,
//       // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
//       dots: false,
//       singleItem: false,
//       autoplay: false,
//       smartSpeed: 1000,
//       // autowidth: true,
//       autoplayTimeout: 5000,
//       stagePadding: 104, // позволяет задать начальное положение первого слайда
//       responsive: {
//         0: {
//           items: 1,
//           stagePadding: 15,
//           margin: 5,

//           // nav: false,
//           // items: window.screen.width / 360,
//         },
//         350: {
//           items: 1,
//           stagePadding: 15,
//           margin: 5,

//           // nav: false,
//           // items: window.screen.width / 360,
//         },
//         570: {
//           items: 1,
//           stagePadding: 30,
//           margin: 10,
//           singleItem: true,

//           // nav: false,
//           // items: window.screen.width / 360,
//         },
//         760: {
//           items: 2,
//           stagePadding: 30,
//           margin: 5,

//           // nav: false,
//           // items: window.screen.width / 360,
//         },
//         1280: {
//           items: 2.5,
//           stagePadding: 30,
//           // nav: false,
//           // items: window.screen.width / 420,
//         },
//         1460: {
//           items: 3,
//           stagePadding: 116,
//         },
//         1920: {
//           items: 4,
//         },
//       },
//     });

//     // $(".owl-carousel-index").owlCarousel({
//     //   loop: false,
//     //   center: true,
//     //   margin: 20,
//     //   // items: 4.5,
//     //   nav: true,
//     //   // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
//     //   dots: false,
//     //   singleItem: false,
//     //   autoplay: false,
//     //   smartSpeed: 1000,
//     //   autoplayTimeout: 5000,
//     //   responsive: {
//     //     0: {
//     //       nav: false,
//     //       items: 1,
//     //     },
//     //     800: {
//     //       nav: false,
//     //       items: 1,
//     //     },
//     //     1200: {
//     //       items: 1,
//     //     },
//     //   },
//     // });

//     $(".owl-carousel-slider").owlCarousel({
//       loop: false,
//       margin: 20,
//       nav: true,
//       dots: false,
//       autoplay: false,
//       smartSpeed: 1000,
//       autoplayTimeout: 5000,
//       responsive: {
//         //Адаптация в зависимости от разрешения экрана
//         0: {
//           items: 1,
//         },
//         600: {
//           items: 1,
//         },
//         1000: {
//           items: 1,
//         },
//       },
//     });

//     // $(".owl-carousel-about").owlCarousel({
//     //   loop: false,
//     //   margin: 16,
//     //   items: 4,
//     //   nav: true,
//     //   // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
//     //   dots: false,
//     //   singleItem: false,
//     //   autoplay: false,
//     //   smartSpeed: 1000,
//     //   autoplayTimeout: 5000,
//     //   responsive: {
//     //     0: {
//     //       nav: false,
//     //       margin: 5,
//     //       items: 1,

//     //       // items: window.screen.width / 360,
//     //     },
//     //     400: {
//     //       nav: false,
//     //       margin: 5,

//     //       items: 1.3,

//     //       // items: window.screen.width / 360,
//     //     },
//     //     520: {
//     //       nav: false,
//     //       margin: 5,

//     //       items: 1.7,

//     //       // items: window.screen.width / 360,
//     //     },
//     //     650: {
//     //       nav: false,
//     //       items: 2.2,

//     //       // items: window.screen.width / 360,
//     //     },
//     //     800: {
//     //       nav: false,
//     //       items: 2.5,
//     //       // items: window.screen.width / 420,
//     //     },
//     //     900: {
//     //       nav: false,
//     //       items: 3,
//     //       // items: window.screen.width / 420,
//     //     },
//     //     1200: {
//     //       nav: false,
//     //       items: 4,
//     //     },
//     //     1350: {
//     //       items: 4,
//     //     },
//     //   },
//     // });

//     // $(".owl-carousel-index").owlCarousel({
//     //   loop: false,
//     //   margin: 16,
//     //   // autoWidth:true,
//     //   items: 4,
//     //   nav: true,
//     //   // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
//     //   dots: false,
//     //   singleItem: false,
//     //   autoplay: false,
//     //   smartSpeed: 1000,
//     //   autoplayTimeout: 5000,
//     //   stagePadding: 104, // позволяет задать начальное положение первого слайда
//     //   responsive: {
//     //     0: {
//     //       nav: false,
//     //       // margin: 5,
//     //       items: 4,
//     //       margin: 13,
//     //     },
//     //     600: {
//     //       nav: false,
//     //       items: 4,
//     //       margin: 15,
//     //     },
//     //     1050: {
//     //       items: 4,
//     //     },
//     //   },
//     // });

//     // $(".owl-carousel-news-item").owlCarousel({
//     //   loop: false,
//     //   margin: 16,
//     //   // autoWidth:true,
//     //   items: 3,
//     //   nav: true,
//     //   // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
//     //   dots: false,
//     //   singleItem: false,
//     //   autoplay: false,
//     //   smartSpeed: 1000,
//     //   autoplayTimeout: 5000,
//     //   responsive: {
//     //     0: {
//     //       nav: false,
//     //       // margin: 5,
//     //       items: 1,
//     //       autoWidth: true,

//     //       // margin: 13,
//     //     },
//     //     410: {
//     //       nav: false,
//     //       // margin: 5,
//     //       items: 1.17,
//     //       // margin: 13,
//     //     },
//     //     425: {
//     //       nav: false,
//     //       // margin: 5,
//     //       items: 1.2,
//     //       // margin: 13,
//     //     },
//     //     530: {
//     //       nav: false,
//     //       // margin: 5,
//     //       items: 1.5,
//     //       // margin: 13,
//     //     },
//     //     600: {
//     //       nav: false,
//     //       // margin: 5,
//     //       items: 1.7,
//     //       // margin: 13,
//     //     },
//     //     750: {
//     //       nav: false,
//     //       // margin: 5,
//     //       items: 2.15,
//     //       // margin: 13,
//     //     },
//     //     950: {
//     //       nav: false,
//     //       items: 2.4,
//     //       // margin: 15,
//     //     },
//     //     1050: {
//     //       nav: false,
//     //       items: 2.7,
//     //       // margin: 15,
//     //     },
//     //     1180: {
//     //       items: 3,
//     //     },
//     //   },
//     // });
//   }
// });

// -------------------------------------------- end OWL ---------------------------------------------

// -------------------------------------------- start BURGER: ---------------------------------------------

const burger = document.querySelector(".burger");

if (burger) {
  // const headerNav = document.querySelector(".header__nav");
  // const mobMenu = mobMenuWrap.querySelector(".header__mob-menu");
  // const mobMenuWrap = document.querySelector(".header__mob-menu-wrap");

  const closeBtn = document.querySelector(".burger__close-btn");
  burger.addEventListener("click", function (e) {
    console.log("тест");
    burger.classList.add("burger_active");
    closeBtn.classList.add("burger__close-btn_active");
    headerNav.classList.toggle("nav_active");
  });

  document.addEventListener("click", function (e) {
    console.log("тест-глобальный");
    if (!e.target.closest(".header__nav") && !e.target.closest(".burger")) {
      burger.classList.remove("burger_active");
      headerNav.classList.remove("nav_active");
    }
  });
}
// -------------------------------------------- end BURGER ---------------------------------------------

// -------------------------------------------- start Search: ---------------------------------------------
const headerSearchWrap = document.querySelector(".header__search-form-wrap");

if (headerSearchWrap) {
  if (window.screen.width <= 920) {
    headerSearchWrap.addEventListener("click", function (e) {
      console.log("тест");
      headerSearchWrap.classList.add("header__search-form-wrap_active");
      // console.log("200");
    });
  }

  const closeSearchBtn = headerSearchWrap.querySelector(
    ".search-form__close-btn"
  );
  const inputField = headerSearchWrap.querySelector(".search-form__input");

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", function (e) {
      console.log("тест");
      // e.preventDefault();
      headerSearchWrap.classList.remove("header__search-form-wrap_active");
      inputField.value = "";
      // console.log("100");
      e.stopPropagation();
    });
  }

  document.addEventListener("click", function (e) {
    console.log("тест");
    if (
      !e.target.closest(".search-form") &&
      headerSearchWrap.classList.contains("header__search-form-wrap_active")
    ) {
      headerSearchWrap.classList.remove("header__search-form-wrap_active");
      inputField.value = "";
      // console.log("400");
    }
  });
}

// -------------------------------------------- end Search ---------------------------------------------

// -------------------------------------------- start товар: ---------------------------------------------
const goodsCartBtn = document.querySelectorAll(".goods-item__btn_to-cart");

if (goodsCartBtn) {
  // const goodsQuantity = document.querySelector(".goods__quantity");
  goodsCartBtn.forEach((item) => {
    item.addEventListener("click", function (e) {
      console.log("тест");
      e.preventDefault();
      item.classList.toggle("goods-item__btn_to-cart_active");
      // headerCartBtn.classList.toggle("btn__cart_active");
      setCartActive();
    });
  });
}

// -------------------------------------------- end товар ---------------------------------------------
// -------------------------------------------- start сертификаты: ---------------------------------------------
// const sertificates = document.querySelectorAll(".card_sert");

// if (sertificates) {
//   sertificates.forEach((item) => {
//     item.addEventListener("click", function (e) {
// console.log('тест');
//       const img = item.innerHTML;
//       // const img = item.querySelector("img").getAttribute("src");
//       console.log(img);
//       // item.querySelector("img").setAttribute("src", img);

//       e.preventDefault();
//     });
//   });
// }

// -------------------------------------------- start сертификаты: ---------------------------------------------
// -------------------------------------------- end корзина ---------------------------------------------

$("#phone_1").mask("+7(999) 999 99 99");
$("#phone_2").mask("+7(999) 999 99 99");

// -------------------------------------------- start Куки: ---------------------------------------------
function setCookie(name, value, lifetimeDays = 30, path = "/") {
  var expires = "";
  if (lifetimeDays) {
    var date = new Date();
    date.setTime(date.getTime() + lifetimeDays * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=" + path;
}

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

if (!getCookie("CookiePolicyAccepted")) {
  $(".cookie").show();
} else {
  $(".cookie").hide();
}

function acceptCookiePolicy() {
  // console.log("acceptCookiePolicy");
  setCookie("CookiePolicyAccepted", true);
  $(".cookie").fadeTo(500, 0);
  setTimeout(() => {
    $(".cookie").hide();
  }, 500);
}
function closeCookiePolicyNotification() {
  // console.log("closeCookiePolicyNotification");
  $(".cookie").fadeOut(300);
}

const cookieBtn = document.querySelector(".cookie__btn");
if (cookieBtn) {
  cookieBtn.addEventListener("click", function (e) {
    console.log("тест");
    e.preventDefault();
    acceptCookiePolicy();
  });
}

const cookieCloseBtn = document.querySelector(".cookie__close");
if (cookieCloseBtn) {
  cookieCloseBtn.addEventListener("click", function (e) {
    console.log("тест");
    e.preventDefault();
    closeCookiePolicyNotification();
  });
}
// -------------------------------------------- end Куки ---------------------------------------------
// -------------------------------------------- start Отзывы: ---------------------------------------------

// -------------------------------------------- end Отзывы ---------------------------------------------
// -------------------------------------------- start Селект: ---------------------------------------------

let queryParams = {
  name: "",
  phone: "",
  email: "",
  message: "",
  project: "sosnoviy",
  numbers_of_rooms: "",
  area: "",
  balcony: "",
  dressing_room: "",
  side_2: "",
  side_3: "",
  guest_bathroom: "",
  kitchen_living_room: "",
};

// console.log(selects);
const choiceForm = document.querySelector(".choice__form");
if (choiceForm) {
  const selectProjectList = document.querySelectorAll(".choice__select");
  if (selectProjectList) {
    selectProjectList.forEach((selectProject) => {
      selectProject.addEventListener("click", (event) => {
        console.log("тест");
        selectProjectList.forEach((selectProject) => {
          selectProject.classList.remove("select_open");
        });
        selectProject.classList.toggle("select_open");
      });
      const selectOptions = selectProject.querySelectorAll(".select__item");
      if (selectOptions) {
        selectOptions.forEach((item) => {
          item.addEventListener("click", (event) => {
            const input = selectProject.querySelector(".select__text");
            event.stopPropagation(); // отменяем всплытие, что бы повторно не сработало событие на самом селекте
            input.innerHTML = item.innerHTML;
            input.classList.add("select__text_active");
            input.setAttribute("data-id", item.getAttribute("data-id"));
            queryParams.project = item.getAttribute("data-id");
            // console.log(queryParams);
            selectProject.classList.remove("select_open");
            selectProject.classList.add("select_active");
          });
        });
      }
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".choice__select")) {
        selectProjectList.forEach((selectProject) => {
          selectProject.classList.remove("select_open");
        });
      }
    });
  }
  // selects.forEach((select) => {
  // });

  const choiceButtonsSelect = document.querySelector(".choice__buttons-select");
  if (choiceButtonsSelect) {
    // const btns = choiceButtonsSelect.querySelectorAll(".choice__buttons-select-item");

    const choiceBtns = document.querySelectorAll(
      ".choice__buttons-select-item"
    );

    if (choiceBtns) {
      choiceBtns.forEach((item) => {
        item.addEventListener("click", (event) => {
          item.classList.toggle("choice__buttons-select-item_active");
          queryParams.numbers_of_rooms = "";

          choiceBtns.forEach((item) => {
            if (item.classList.contains("choice__buttons-select-item_active")) {
              queryParams.numbers_of_rooms =
                queryParams.numbers_of_rooms +
                ", " +
                item.getAttribute("data-id");
            }
          });
          // console.log(queryParams);
        });
      });
    }
  }

  const filterBtns = document.querySelectorAll(".choice__btn-filter");

  if (filterBtns) {
    filterBtns.forEach((item) => {
      item.addEventListener("click", (event) => {
        item.classList.toggle("choice__btn-filter_active");
        let key = item.getAttribute("data-id");
        if (item.classList.contains("choice__btn-filter_active")) {
          queryParams[key] = "yes";
        } else {
          queryParams[key] = "";
        }
        // console.log(queryParams);
      });
    });
  }

  const choice__square = document.querySelector(".choice__square-select");
  if (choice__square) {
    const inputFrom = choice__square.querySelector(".select__input_from");
    const inputTo = choice__square.querySelector(".select__input_to");
    queryParams.area = inputFrom.value + " - " + inputTo.value;

    inputFrom.addEventListener("input", (event) => {
      queryParams.area = inputFrom.value + " - " + inputTo.value;
      // console.log(queryParams);
    });

    inputTo.addEventListener("input", (event) => {
      queryParams.area = inputFrom.value + " - " + inputTo.value;
      // console.log(queryParams);
    });
  }

  const choiceForm = document.querySelector("#choice-form");
  // console.log(choiceForm);
  if (choiceForm) {
    const submitBtn = choiceForm.querySelector(".form__btn");
    // console.log(submitBtn);
    submitBtn.addEventListener("click", (event) => {
      // choiceForm.addEventListener("submit", (event) => {
      // console.log("click");
      // choiceForm.addEventListener("submit", (event) => {
      event.preventDefault();
      queryParams.name = choiceForm.querySelector(".form__input_name").value;
      queryParams.phone = choiceForm.querySelector(".form__input_phone").value;
      queryParams.email = choiceForm.querySelector(".form__input_email").value;
      queryParams.message = choiceForm.querySelector(
        ".form__input_textarea"
      ).value;
      // console.log(queryParams);
      if (queryParams.name === "" || queryParams.phone === "") {
        alert("Заполните обязательные поля");
        return;
      } else {
        postForm(queryParams).then((res) => {
          if (res === "OK!") {
            const popupSuccess = document.querySelector("#success");
            popupOpen(popupSuccess);
          } else {
            alert("Произошла ошибка, попробуйте позже.");
            // const popupError = document.querySelector("#error");
            // popupOpen(popupError);
          }
        });
      }
      // const popupSuccess = document.querySelector("#success");
      // popupOpen(popupSuccess);
      // postForm(queryParams);
      // const popupActive = document.querySelector(".popup.open");
      // popupClose(popupActive);
      // return false;
    });
  }

  const requestForm = document.querySelector("#request-form");
  if (requestForm) {
    const submitBtn = requestForm.querySelector(".request__btn");
    // console.log(submitBtn);
    submitBtn.addEventListener("click", (event) => {
      // console.log("click");
      // requestForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const queryParams = {
        apartment: "",
        name: "",
        phone: "",
        email: "",
        message: "",
      };
      queryParams.apartment = requestForm.querySelector(
        ".request__input_apartment"
      ).value;
      queryParams.name = requestForm.querySelector(
        ".request__input_name"
      ).value;
      queryParams.phone = requestForm.querySelector(
        ".request__input_phone"
      ).value;
      queryParams.email = requestForm.querySelector(
        ".request__input_email"
      ).value;
      queryParams.message = requestForm.querySelector(
        ".request__input_textarea"
      ).value;
      // console.log(queryParams);
      if (
        queryParams.apartment === "" ||
        queryParams.name === "" ||
        queryParams.phone === ""
      ) {
        alert("Заполните обязательные поля");
        return;
      } else {
        postRequest(queryParams).then((res) => {
          if (res === "OK!") {
            const popupSuccess = document.querySelector("#success");
            popupOpen(popupSuccess);
            // return false;
          } else {
            alert("Произошла ошибка, попробуйте позже.");
            // return false;

            // const popupError = document.querySelector("#error");
            // popupOpen(popupError);
          }
        });
      }

      // if (queryParams.phone === "") {
      //   queryParams.apartment = "Отсутствует";
      // }

      // postRequest(queryParams);
      // const popupActive = document.querySelector(".popup.open");
      // popupClose(popupActive);
      // const popupSuccess = document.querySelector("#success");
      // popupOpen(popupSuccess);

      // return false;
    });
  }

  const notificationForm = document.querySelector("#notification-form");
  if (notificationForm) {
    const submitBtn = notificationForm.querySelector(".notification__btn");
    // console.log(submitBtn);
    submitBtn.addEventListener("click", (event) => {
      // console.log("click");
      // notificationForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const queryParams = {
        agency: "",
        agentName: "",
        agentPhone: "",
        clientName: "",
        clientPhone: "",
        message: "",
      };
      // queryParams.apartment = notificationForm.querySelector(".notification__input_apartment").value;
      // queryParams.name = notificationForm.querySelector(".notification__input_name").value;
      // queryParams.phone = notificationForm.querySelector(".notification__input_phone").value;
      // queryParams.email = notificationForm.querySelector(".notification__input_email").value;
      queryParams.agency = notificationForm.querySelector(
        ".notification__input_agency"
      ).value;
      queryParams.agentName = notificationForm.querySelector(
        ".notification__input_agent-name"
      ).value;
      queryParams.agentPhone = notificationForm.querySelector(
        ".notification__input_agent-phone"
      ).value;
      queryParams.clientName = notificationForm.querySelector(
        ".notification__input_client-name"
      ).value;
      queryParams.clientPhone = notificationForm.querySelector(
        ".notification__input_client-phone"
      ).value;
      queryParams.message = notificationForm.querySelector(
        ".notification__input_textarea"
      ).value;
      // console.log(queryParams);
      if (
        queryParams.agency === "" ||
        queryParams.agentName === "" ||
        queryParams.agentPhone === "" ||
        queryParams.clientName === "" ||
        queryParams.clientPhone === ""
      ) {
        alert("Заполните обязательные поля");
        return;
      } else {
        postNotification(queryParams).then((res) => {
          if (res === "OK!") {
            const popupSuccess = document.querySelector("#success");
            popupOpen(popupSuccess);
          } else {
            alert("Произошла ошибка, попробуйте позже.");
            // const popupError = document.querySelector("#error");
            // popupOpen(popupError);
          }
        });
      }
    });
  }

  // const
  // const btns = choiceButtonsSelect.querySelectorAll(".choice__buttons-select-item";

  // btns.forEach((btn) => {
  //   btn.addEventListener("click", (event) => {
  //     const input = choiceButtonsSelect.querySelector(".choice__buttons-select-text");
  //     event.stopPropagation(); // отменяем всплытие, что бы повторно не сработало событие на самом селекте
  //     input.innerHTML = btn.innerHTML;
  //     input.classList.add("choice__buttons-select-text_active");
  //     input.setAttribute("data-id", btn.getAttribute("data-id"));
  //     queryParams.numbers_of_rooms = btn.getAttribute("data-id");
  //     // console.log(queryParams);
  //     choiceButtonsSelect.classList.remove("choice__buttons-select_active");
  //   });
  // });
  // }

  // console.log(selects);
  // const selects = document.querySelectorAll(".select");
  // if (selects) {
  //   selects.forEach((select) => {
  //     select.addEventListener("click", (event) => {
  //       console.log("click");
  //       select.classList.toggle("select_open");
  //     });
  //     const selectOptions = select.querySelectorAll(".select__item");
  //     selectOptions.forEach((item) => {
  //       item.addEventListener("click", (event) => {
  //         const input = select.querySelector(".select__text");
  //         event.stopPropagation(); // отменяем всплытие, что бы повторно не сработало событие на самом селекте
  //         input.innerHTML = item.innerHTML;
  //         input.classList.add("select__text_active");
  //         input.setAttribute("data-id", item.getAttribute("data-id"));
  //         select.classList.remove("select_open");
  //         select.classList.add("select_active");
  //       });
  //     });
  //   });
}
// -------------------------------------------- end Селект ---------------------------------------------
// -------------------------------------------- start Карта ---------------------------------------------
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.


const footerForm = document.querySelector(".footer__form");
if (footerForm) {
  const submitBtn = footerForm.querySelector(".form__btn");
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let queryParams = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };

    queryParams.name = document.querySelector(".form__input_name").value;
    queryParams.phone = document.querySelector(".form__input_phone").value;
    queryParams.email = document.querySelector(".form__input_email").value;
    // footerForm.addEventListener("submit", (event) => {
    //   event.preventDefault();
    //   const footerName = document.querySelector(".footer__input-name");
    //   const footerEmail = document.querySelector(".footer__input-email");
    //   const footerPhone = document.querySelector(".footer__input-phone");
    //   console.log(footerName.value);
    //   console.log(footerEmail.value);
    //   console.log(footerPhone.value);
    //   footerName.value = "";
    //   footerEmail.value = "";
    //   footerPhone.value = "";
    //   return false;
    // });
    // console.log(queryParams);
    // postCall(queryParams);
    // const popupSuccess = document.querySelector("#success");
    // popupOpen(popupSuccess);

    if (queryParams.name === "" || queryParams.phone === "") {
      alert("Заполните обязательные поля");
      return;
    } else {
      postCall(queryParams).then((res) => {
        if (res === "OK!") {
          const popupSuccess = document.querySelector("#success");
          popupOpen(popupSuccess);
        } else {
          alert("Произошла ошибка, попробуйте позже.");
          // const popupError = document.querySelector("#error");
          // popupOpen(popupError);
        }
      });
    }
  });
}

// footerForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const footerName = document.querySelector(".footer__input-name");
//   const footerEmail = document.querySelector(".footer__input-email");
//   const footerPhone = document.querySelector(".footer__input-phone");
//   console.log(footerName.value);
//   console.log(footerEmail.value);
//   console.log(footerPhone.value);
//   footerName.value = "";
//   footerEmail.value = "";
//   footerPhone.value = "";
//   return false;
// });

//-------------------------- start отправка формы на почту ------------------------------

async function postCall(queryParams) {
  // console.log(JSON.stringify(queryParams));
  // Блок try выполнится полностью, если не будет ошибок:
  try {
    // Выполняем запрос:
    const responce = await fetch("files/post-mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryParams),
    });
    const res = await responce.json();
    return res; // Возвращаем результат запроса
    // const infoList = await responce.json();
    // return infoList; // Возвращаем результат запроса
    // console.log(responce);
  } catch (err) {
    // Блок catch сработает только если будут какие-то ошибки в блоке try:
    // Выведем в консоли информацию об ошибке:
    console.log("При оптравке письма произошла ошибка, детали ниже:");
    console.error(err);
    // Вернем исключение с текстом поясняющим детали ошибки:
    // alert("Произошла ошибка при оптравке письма!");
    throw new Error("Запрос завершился неудачно.");
  }
}

async function postForm(queryParams) {
  // console.log(JSON.stringify(queryParams));
  // Блок try выполнится полностью, если не будет ошибок:
  try {
    // Выполняем запрос:
    const responce = await fetch("files/post-form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryParams),
    });
    const res = await responce.json();
    return res; // Возвращаем результат запроса
    // const infoList = await responce.json();
    // return infoList; // Возвращаем результат запроса
    // console.log(responce);
  } catch (err) {
    // Блок catch сработает только если будут какие-то ошибки в блоке try:
    // Выведем в консоли информацию об ошибке:
    console.log("При оптравке письма произошла ошибка, детали ниже:");
    console.error(err);
    // Вернем исключение с текстом поясняющим детали ошибки:
    alert("Произошла ошибка при оптравке письма!");
    throw new Error("Запрос завершился неудачно.");
  }
}

async function postRequest(queryParams) {
  // console.log(JSON.stringify(queryParams));
  // Блок try выполнится полностью, если не будет ошибок:
  try {
    // Выполняем запрос:
    const responce = await fetch("files/post-request.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryParams),
    });
    const res = await responce.json();
    return res; // Возвращаем результат запроса
    // const infoList = await responce.json();
    // return infoList; // Возвращаем результат запроса
    // console.log(responce);
  } catch (err) {
    // Блок catch сработает только если будут какие-то ошибки в блоке try:
    // Выведем в консоли информацию об ошибке:
    console.log("При оптравке письма произошла ошибка, детали ниже:");
    console.error(err);
    // Вернем исключение с текстом поясняющим детали ошибки:
    alert("Произошла ошибка при оптравке письма!");
    throw new Error("Запрос завершился неудачно.");
  }
}

async function postNotification(queryParams) {
  // console.log(JSON.stringify(queryParams));
  // Блок try выполнится полностью, если не будет ошибок:
  try {
    // Выполняем запрос:
    const responce = await fetch("files/post-notification.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryParams),
    });
    const res = await responce.json();
    return res; // Возвращаем результат запроса
    // console.log(infoList);
  } catch (err) {
    // Блок catch сработает только если будут какие-то ошибки в блоке try:
    // Выведем в консоли информацию об ошибке:
    console.log("При оптравке письма произошла ошибка, детали ниже:");
    console.error(err);
    // Вернем исключение с текстом поясняющим детали ошибки:
    alert("Произошла ошибка при оптравке письма!");
    throw new Error("Запрос завершился неудачно.");
  }
}

// const choiceSendBtn = document.querySelector(".choice__btn");
// choiceSendBtn.addEventListener("click", (event) => {
//   // fetchToPost(queryParams)

//   const arrApartments = fetchToPost(queryParams);
//   console.log(arrApartments);
//   // event.preventDefault();
//   // const footerName = document.querySelector(".footer__input-name");
//   // const footerEmail = document.querySelector(".footer__input-email");
//   // const footerPhone = document.querySelector(".footer__input-phone");
//   // console.log(footerName.value);
//   // console.log(footerEmail.value);
//   // console.log(footerPhone.value);
//   // footerName.value = "";
//   // footerEmail.value = "";
//   // footerPhone.value = "";
//   // return false;
// });

// let postOptions = {
//   // опции для получения списка всех контрагентов
//   function: "getAll",
//   table: "apartments",
//   all: "*",
// };

// const arrApartments = await fetchToDB(options);
// console.log(arrApartments);

// console.log(options);
// await fetchToDB(options);
// требуется подключить скрипт как модуль, иначе await не работает!!!

//--------------------------end Отправка формы на почту----------------------------