// ------------------------- start WEBP: ---------------------------

function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  let className = support === true ? "webp" : "no-webp";
  document.documentElement.classList.add(className);
});

// ------------------------- end WEBP: ---------------------------
// ---------------------------------- start отправка и валидация формы ----------------------------------

const formAll = document.querySelectorAll(".main-form");

if (formAll) {
  formAll.forEach((form) => {
    form.addEventListener("submit", sendForm);
    const errorMessage = form.querySelector(".form__error");

    async function sendForm(e) {
      e.preventDefault();

      let errore = formvalidation(form); 

      if (errore === 0) {
        form.classList.add("_sending");
        let formData = new FormData(form);       


        let response = await fetch("/files/post-mail.php", {
          method: "POST",
          body: formData, 
        });

        if (response.ok) {
          let result = await response.json(); 
          form.reset(); 
          popupOpen(document.getElementById("success"));
          form.classList.remove("_sending");
        } else {
          popupOpen(document.getElementById("error"));
          form.classList.remove("_sending");
        }

      } else {
        // alert("Заполните обязательные поля");
        errorMessage.style.display = "block";
      }

    }
  });

  function formvalidation(item) {
    let error = 0;
    let formReq = item.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];

      formRemoveError(input); 

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
}

// ---------------------------------- end отправка и валидация формы ----------------------------------

const body = document.querySelector("body");
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// ----------------------- start передача данных о заказе в модальное окно --------------------------------------

const orderBtns = document.querySelectorAll("[data-order]");
if (orderBtns) {
  orderBtns.forEach((item) => {
    item.addEventListener("click", (event) => {
      const input = document.querySelector("#order").querySelector(".form__input_order");
      input.value = item.getAttribute("data-order");
    });
  });
}
// ------------------- end передача данных о заказе в модальное окно --------------------------------------
//подсветка активного пункта меню:---------------------------------------------------------


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

// -------------------------------------------- start slider: ---------------------------------------------


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
// -------------------------------------------- start BURGER: ---------------------------------------------

const burger = document.querySelector(".burger");

if (burger) {
  // const headerNav = document.querySelector(".header__nav");
  // const mobMenu = mobMenuWrap.querySelector(".header__mob-menu");
  // const mobMenuWrap = document.querySelector(".header__mob-menu-wrap");

  // const closeBtn = document.querySelector(".burger__close-btn");
  burger.addEventListener("click", function (e) {
    console.log("тест");
    // burger.classList.add("burger_active");
    // closeBtn.classList.add("burger__close-btn_active");
    // headerNav.classList.toggle("nav_active");
  });

  document.addEventListener("click", function (e) {
    console.log("тест-глобальный");
    if (!e.target.closest(".header__nav") && !e.target.closest(".burger")) {
      burger.classList.remove("burger_active");
      // headerNav.classList.remove("nav_active");
    }
  });
}
// -------------------------------------------- end BURGER ---------------------------------------------

$(".form__input_phone").mask("+7(999) 999 99 99");

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




