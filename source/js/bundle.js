/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/modules/add-to-cart.js":
/*!******************************************!*\
  !*** ./source/js/modules/add-to-cart.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


function addCardToCart({
  parentSelector,
  id,
  name,
  photo,
  price,
  rating
}) {
  const element = document.createElement("li");
  element.classList.add('card', 'card--cart');
  element.setAttribute('id', id);
  element.setAttribute('tabindex', '0');
  element.innerHTML = `
        <div class="card__rating">
        <svg
        class="card__stare"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.00002 0.125C7.2379 0.125 7.45517 0.260045 7.56046 0.47336L9.34643 4.09154L13.3404 4.67532C13.5758 4.70972 13.7712 4.87473 13.8445 5.10098C13.9179 5.32723 13.8565 5.57552 13.6861 5.74147L10.7966 8.55585L11.4785 12.5318C11.5187 12.7663 11.4223 13.0033 11.2299 13.1432C11.0374 13.283 10.7822 13.3014 10.5716 13.1907L7.00002 11.3124L3.42843 13.1907C3.21785 13.3014 2.96267 13.283 2.77018 13.1432C2.5777 13.0033 2.48129 12.7663 2.52151 12.5318L3.20344 8.55585L0.313935 5.74147C0.143549 5.57552 0.0821284 5.32723 0.155489 5.10098C0.22885 4.87473 0.424275 4.70972 0.659626 4.67532L4.6536 4.09154L6.43958 0.47336C6.54487 0.260045 6.76213 0.125 7.00002 0.125ZM7.00002 2.16203L5.62921 4.93914C5.53825 5.12342 5.36251 5.25121 5.15916 5.28093L2.09278 5.72913L4.3111 7.88978C4.45852 8.03336 4.52581 8.24032 4.49102 8.44315L3.96763 11.4948L6.70911 10.0531C6.89122 9.95731 7.10881 9.95731 7.29093 10.0531L10.0324 11.4948L9.50901 8.44315C9.47422 8.24032 9.54151 8.03336 9.68893 7.88978L11.9073 5.72913L8.84087 5.28093C8.63753 5.25121 8.46179 5.12342 8.37083 4.93914L7.00002 2.16203Z"
            fill="#F2C94C"
        />
        </svg>
        <span class="card__counter">${rating}</span>
    </div>

    <svg
        class="card__delete"
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 5C0 4.44772 0.447715 4 1 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H1C0.447715 6 0 5.55228 0 5Z"
        fill="#959DAD"
        />
        <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H8ZM15 4V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0H8C7.20435 0 6.44129 0.31607 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H3C2.44772 4 2 4.44772 2 5V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H15C15.7957 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7957 18 19V5C18 4.44772 17.5523 4 17 4H15ZM4 6V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V6H4Z"
        fill="#959DAD"
        />
        <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 9C8.55229 9 9 9.44771 9 10V16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16V10C7 9.44771 7.44772 9 8 9Z"
        fill="#959DAD"
        />
        <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 9C12.5523 9 13 9.44771 13 10V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10C11 9.44771 11.4477 9 12 9Z"
        fill="#959DAD"
        />
    </svg>

    <img
        class="card__img"
        src="${photo}"
        width="142"
        height="180"
        alt="${name}"
    />
    <div>
        <h3 class="card__title">${name}</h3>
        <p class="card__price">${price}</p>
    </div>
    `;
  document.querySelector(parentSelector).append(element);
}

/* harmony default export */ __webpack_exports__["default"] = (addCardToCart);

/***/ }),

/***/ "./source/js/modules/cards.js":
/*!************************************!*\
  !*** ./source/js/modules/cards.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./source/js/services/services.js");

let copyData = [];

function cards({
  category,
  quality
}) {
  class CreateCard {
    constructor(parentSelector, id, name, price, rating, photo, category, ...classes) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.rating = rating;
      this.photo = photo;
      this.price = price;
      this.category = category;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("li");
      element.setAttribute('id', this.id);
      element.setAttribute('data-category', this.category);
      element.setAttribute('tabindex', '0');

      if (this.classes.length === 0) {
        this.classes = "card";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = ` 
            <div class="card__rating">
              <svg class="card__stare" width="14" height="14" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.00002 0.125C7.2379 0.125 7.45517 0.260045 7.56046 0.47336L9.34643 4.09154L13.3404 4.67532C13.5758 4.70972 13.7712 4.87473 13.8445 5.10098C13.9179 5.32723 13.8565 5.57552 13.6861 5.74147L10.7966 8.55585L11.4785 12.5318C11.5187 12.7663 11.4223 13.0033 11.2299 13.1432C11.0374 13.283 10.7822 13.3014 10.5716 13.1907L7.00002 11.3124L3.42843 13.1907C3.21785 13.3014 2.96267 13.283 2.77018 13.1432C2.5777 13.0033 2.48129 12.7663 2.52151 12.5318L3.20344 8.55585L0.313935 5.74147C0.143549 5.57552 0.0821284 5.32723 0.155489 5.10098C0.22885 4.87473 0.424275 4.70972 0.659626 4.67532L4.6536 4.09154L6.43958 0.47336C6.54487 0.260045 6.76213 0.125 7.00002 0.125ZM7.00002 2.16203L5.62921 4.93914C5.53825 5.12342 5.36251 5.25121 5.15916 5.28093L2.09278 5.72913L4.3111 7.88978C4.45852 8.03336 4.52581 8.24032 4.49102 8.44315L3.96763 11.4948L6.70911 10.0531C6.89122 9.95731 7.10881 9.95731 7.29093 10.0531L10.0324 11.4948L9.50901 8.44315C9.47422 8.24032 9.54151 8.03336 9.68893 7.88978L11.9073 5.72913L8.84087 5.28093C8.63753 5.25121 8.46179 5.12342 8.37083 4.93914L7.00002 2.16203Z"
                  fill="#F2C94C" />
              </svg>
              <svg class="card__stare-fill" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 3L0 0H6H12L9.5 3V6.5L9 7.5L6 6L5 6.5L2.5 7.5V6.5V3Z" fill="#F2C94C"/>
                </svg>
              <span class="card__counter">${this.rating}</span>
            </div>
            <div class="card__wrapper">
              <div class="card__event">
                <div class="card__event-trigger"></div>
                <svg class="card__event-svg" width="12" height="14" viewBox="0 0 12 14" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.92 0.74C2.03331 0.588916 2.21115 0.5 2.4 0.5H9.6C9.78885 0.5 9.96669 0.588916 10.08 0.74L11.88 3.14C11.9579 3.24386 12 3.37018 12 3.5V11.9C12 12.3774 11.8104 12.8352 11.4728 13.1728C11.1352 13.5104 10.6774 13.7 10.2 13.7H1.8C1.32261 13.7 0.864773 13.5104 0.527208 13.1728C0.189642 12.8352 0 12.3774 0 11.9V3.5C0 3.37018 0.0421067 3.24386 0.12 3.14L1.92 0.74ZM2.7 1.7L1.2 3.7V11.9C1.2 12.0591 1.26321 12.2117 1.37574 12.3243C1.48826 12.4368 1.64087 12.5 1.8 12.5H10.2C10.3591 12.5 10.5117 12.4368 10.6243 12.3243C10.7368 12.2117 10.8 12.0591 10.8 11.9V3.7L9.3 1.7H2.7Z"
                fill="#959DAD" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 3.5C0 3.16863 0.268629 2.9 0.6 2.9H11.4C11.7314 2.9 12 3.16863 12 3.5C12 3.83137 11.7314 4.1 11.4 4.1H0.6C0.268629 4.1 0 3.83137 0 3.5Z"
                fill="#959DAD" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M3.6 5.3C3.93137 5.3 4.2 5.56863 4.2 5.9C4.2 6.37739 4.38964 6.83523 4.72721 7.17279C5.06477 7.51036 5.52261 7.7 6 7.7C6.47739 7.7 6.93523 7.51036 7.27279 7.17279C7.61036 6.83523 7.8 6.37739 7.8 5.9C7.8 5.56863 8.06863 5.3 8.4 5.3C8.73137 5.3 9 5.56863 9 5.9C9 6.69565 8.68393 7.45871 8.12132 8.02132C7.55871 8.58393 6.79565 8.9 6 8.9C5.20435 8.9 4.44129 8.58393 3.87868 8.02132C3.31607 7.45871 3 6.69565 3 5.9C3 5.56863 3.26863 5.3 3.6 5.3Z"
                fill="#959DAD" />
            </svg>
              </div>
            </div>
            <img class="card__img" src="https://frontend-test.idaproject.com${this.photo}" width="142"
              height="180" alt="${this.name}" />
            <h3 class="card__title">${this.name.toLowerCase().replace(/(?<!\p{Lowercase})\p{Lowercase}/gu, ch => ch.toUpperCase())}</h3>
            <p class="card__price">${this.price.toLocaleString()} ₽</p>
            `;
      this.parent.append(element);
    }

  }

  function copyArray(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)("https://frontend-test.idaproject.com/api/product").then(data => {
    if (category) {
      copyData = copyArray(data).filter(item => item.category == category);
      copyData.forEach(({
        id,
        name,
        price,
        rating,
        photo,
        category
      }) => {
        new CreateCard(".catalog__list", id, name, price, rating, photo, category).render();
      });
    } else if (quality === 'price') {
      copyData.sort((a, b) => a.price - b.price).forEach(({
        id,
        name,
        price,
        rating,
        photo,
        category
      }) => {
        new CreateCard(".catalog__list", id, name, price, rating, photo, category).render();
      });
    } else if (quality === 'rating') {
      copyData.sort((a, b) => b.rating - a.rating).forEach(({
        id,
        name,
        price,
        rating,
        photo,
        category
      }) => {
        new CreateCard(".catalog__list", id, name, price, rating, photo, category).render();
      });
    } else {
      copyData = copyArray(data).filter(item => item.category == '1');
      copyData.forEach(({
        id,
        name,
        price,
        rating,
        photo,
        category
      }) => {
        new CreateCard(".catalog__list", id, name, price, rating, photo, category).render();
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./source/js/modules/categories.js":
/*!*****************************************!*\
  !*** ./source/js/modules/categories.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./source/js/services/services.js");


function categories() {
  class CreateItem {
    constructor(parentSelector, id, name, ...classes) {
      this.id = id;
      this.name = name;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("li");

      if (this.classes.length === 0) {
        this.classes = "category__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      if (this.id == '1') {
        element.classList.add('category__item--active');
      }

      element.innerHTML = ` 
        <span data-category="${this.id}" tabindex="0">${this.name}</span>
              `;
      this.parent.append(element);
    }

  }

  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)("https://frontend-test.idaproject.com/api/product-category").then(data => {
    data.forEach(({
      id,
      name
    }) => {
      new CreateItem(".category__list", id, name).render();
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (categories);

/***/ }),

/***/ "./source/js/modules/filter.js":
/*!*************************************!*\
  !*** ./source/js/modules/filter.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function filter(triggerSelector, elemSelector) {
  const list = document.querySelector(elemSelector),
        trigger = document.querySelector(triggerSelector);
  trigger.addEventListener("click", evt => {
    console.log(1);
    evt.preventDefault();
    list.classList.toggle('filter__list--active');
  });
}

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./source/js/modules/form.js":
/*!***********************************!*\
  !*** ./source/js/modules/form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


function sendForm() {
  function upload(data, onLoad, onError) {
    const URL = 'https://reqres.in/api/users';
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 201:
          onLoad('Данные успешно отправлены:)');
          break;

        case 500:
          onLoad('Упс, что-то пошло не так:(');

        default:
          onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });
    xhr.addEventListener('error', function () {
      onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
    });
    xhr.open('POST', URL);
    xhr.send(data);
  }

  const form = document.querySelector('.form');
  const modal = document.querySelector('.modal');
  const cartList = document.querySelector('.modal__list');

  function cartCount() {
    const list = document.querySelector('.modal__list');
    const counter = document.querySelector('.header__counter');
    console.log(list.children.length);
    counter.textContent = list.children.length;
  }

  function onLoad(message) {
    // alert(message);
    cartList.innerHTML = '';
    modal.classList.add('modal--succsess');
    cartCount();
  }

  function onError(message) {
    alert(message);
  }

  form.addEventListener('submit', function (evt) {
    upload(new FormData(form), onLoad, onError);
    evt.preventDefault();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (sendForm);

/***/ }),

/***/ "./source/js/modules/mask.js":
/*!***********************************!*\
  !*** ./source/js/modules/mask.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


function setMask() {
  [].forEach.call(document.querySelectorAll('[name ="phone"]'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = new_value.indexOf("_");

      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }

      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (setMask);

/***/ }),

/***/ "./source/js/modules/modal.js":
/*!************************************!*\
  !*** ./source/js/modules/modal.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openModal": function() { return /* binding */ openModal; },
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; }
/* harmony export */ });
function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector),
        list = document.querySelector('.modal__list');

  if (list.children.length === 0) {
    modal.classList.add('modal--empty');
  } else {
    modal.classList.remove('modal--empty');
  }

  modal.classList.add("modal--active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  if (modal.classList.contains('modal--succsess')) {
    modal.classList.remove('modal--succsess');
  }

  modal.classList.remove("modal--active");
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector) {
  const openBtns = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
  openBtns.forEach(item => {
    item.addEventListener("click", evt => {
      evt.preventDefault();
      openModal(modalSelector);
    });
  });
  modal.addEventListener("click", evt => {
    if (evt.target === modal || evt.target.hasAttribute('data-close')) {
      closeModal(modalSelector);
    }
  });
  document.addEventListener("keydown", evt => {
    if (evt.code === "Escape" && modal.classList.contains("modal--active")) {
      closeModal(modalSelector);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./source/js/services/services.js":
/*!****************************************!*\
  !*** ./source/js/services/services.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": function() { return /* binding */ postData; },
/* harmony export */   "getResource": function() { return /* binding */ getResource; }
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });
  return await res.json();
};

const getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cards */ "./source/js/modules/cards.js");
/* harmony import */ var _modules_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/categories */ "./source/js/modules/categories.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./source/js/modules/modal.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filter */ "./source/js/modules/filter.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./source/js/modules/form.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mask */ "./source/js/modules/mask.js");
/* harmony import */ var _modules_add_to_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/add-to-cart */ "./source/js/modules/add-to-cart.js");








document.addEventListener("DOMContentLoaded", () => {
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_5__.default)();
  (0,_modules_form__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,_modules_categories__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_0__.default)({});
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_3__.default)('.filter__title', '.filter__list');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.default)('.header__cart', '#modal');
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_5__.default)();
  fixHeader();
  cartCount();
  deleteCard();
  makeSticky('.category');
  window.addEventListener('resize', () => {
    makeSticky('.category');
  });

  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      (0,_modules_add_to_cart__WEBPACK_IMPORTED_MODULE_6__.default)(JSON.parse(localStorage.getItem(key)));
      cartCount();
    }
  }

  function fixHeader() {
    const header = document.querySelector('.header');
    document.body.style.marginTop = `${header.clientHeight}px`;
  }

  const categoryList = document.querySelector('.category__list');
  const filterList = document.querySelector('.filter__list');
  const filterListIndicator = document.querySelector('.filter__indicator');

  function cartCount() {
    const cartList = document.querySelector('.modal__list');
    const counter = document.querySelector('.header__counter');
    counter.textContent = cartList.children.length;
  }

  function clearCatalog() {
    const catalog = document.querySelector(".catalog__list");
    catalog.innerHTML = '';
  }

  filterList.addEventListener('click', evt => {
    const target = evt.target;
    clearCatalog();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_0__.default)({
      quality: target.getAttribute('data-quality')
    });
    filterList.classList.remove('filter__list--active');

    if (target.getAttribute('data-quality') === 'price') {
      filterListIndicator.textContent = 'цене';
    }

    if (target.getAttribute('data-quality') === 'rating') {
      filterListIndicator.textContent = 'популярности';
    }
  });
  categoryList.addEventListener('click', evt => {
    const target = evt.target;
    const listItems = target.parentElement.parentElement.children;

    if (target.hasAttribute('data-category')) {
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('category__item--active');
      }

      target.parentElement.classList.add('category__item--active');
      clearCatalog();
      (0,_modules_cards__WEBPACK_IMPORTED_MODULE_0__.default)({
        category: target.getAttribute('data-category')
      });
    }
  });

  function deleteCard() {
    const list = document.querySelector('.modal__list');
    const modal = document.querySelector('.modal');
    list.addEventListener('click', evt => {
      const target = evt.target;

      if (target.classList.contains('card__delete')) {
        target.parentElement.remove();
        cartCount();

        if (list.children.length === 0) {
          modal.classList.add('modal--empty');
        } else {
          modal.classList.remove('modal--empty');
        }

        if (localStorage.length > 0) {
          for (let i = 0; i < localStorage.length; i++) {
            if (target.parentElement.getAttribute('id') == localStorage.key(i)) {
              localStorage.removeItem(localStorage.key(i));
            }
          }
        }
      }
    });
  }

  const catalog = document.querySelector('.catalog__list'); // let index = 0;

  catalog.addEventListener('click', evt => {
    evt.preventDefault();
    const target = evt.target;
    const cartCounter = document.querySelector('.header__counter');

    if (target.classList.contains('card__event-trigger')) {
      const card = target.parentElement.parentElement.parentElement,
            id = card.getAttribute('id'),
            name = card.querySelector('.card__title').textContent,
            photo = card.querySelector('.card__img').getAttribute('src'),
            price = card.querySelector('.card__price').textContent,
            rating = card.querySelector('.card__counter').textContent;
      const data = {
        parentSelector: '.modal__list',
        id: id,
        name: name,
        photo: photo,
        price: price,
        rating: rating
      };
      (0,_modules_add_to_cart__WEBPACK_IMPORTED_MODULE_6__.default)(data);
      cartCount();
      localStorage.setItem(card.getAttribute('id'), JSON.stringify(data));
      cartCounter.style.display = 'none';
      setTimeout(() => {
        cartCounter.style.display = 'block';
      }, 100);
    }
  });

  function makeSticky(selector) {
    const header = document.querySelector('.header');
    const category = document.querySelector('.category');

    if (document.documentElement.clientWidth > 480) {
      category.style = ``;

      function getTopOffset(e) {
        var y = 0;

        do {
          y += e.offsetTop;
        } while (e = e.offsetParent);

        return y;
      }

      var block = document.querySelector(selector);

      if (null != block) {
        var topPos = getTopOffset(block);

        window.onscroll = function () {
          var newcss = topPos < window.pageYOffset + header.clientHeight + 25 ? `top:20px; position: fixed; top: ${header.clientHeight + 15}px; left: 0px'` : 'position:absolute;';
          block.setAttribute('style', newcss);
        };
      }
    } else {
      category.style = `position: static; display: block;`;

      window.onscroll = function () {
        category.style = `position: static; display: block;`;
      };
    }
  }

  const inputName = document.querySelector('[name="name"');
  const inputPhone = document.querySelector('[name="phone"');
  const inputAdress = document.querySelector('[name="adress"');

  function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1) {
      event.preventDefault();
    }
  }

  inputName.addEventListener('keydown', event => {
    noDigits(event);
  });
  inputName.addEventListener('change', () => {
    if (inputName.checkValidity()) {
      inputName.classList.add('form__input--valid');
      inputName.classList.remove('form__input--invalid');
    } else {
      inputName.classList.add('form__input--invalid');
      inputName.classList.remove('form__input--valid');
    }
  });
  inputAdress.addEventListener('change', () => {
    if (inputAdress.checkValidity()) {
      inputAdress.classList.add('form__input--valid');
      inputAdress.classList.remove('form__input--invalid');
    } else {
      inputAdress.classList.add('form__input--invalid');
      inputAdress.classList.remove('form__input--valid');
    }
  });
  inputPhone.addEventListener('change', () => {
    if (inputPhone.value.length < 17) {
      inputPhone.classList.add('form__input--invalid');
    } else {
      inputPhone.classList.remove('form__input--invalid');
      inputPhone.classList.add('form__input--valid');
    }
  });
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map