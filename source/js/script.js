import cards from "./modules/cards";
import categories from "./modules/categories";
import modal from "./modules/modal";
import filter from "./modules/filter";
import sendForm from './modules/form';
import setMask from './modules/mask';
import getDataCard from './modules/mask';
import addCardToCart from './modules/add-to-cart';



document.addEventListener("DOMContentLoaded", () => {
  setMask();
  sendForm();
  categories();
  cards({});
  filter('.filter__title', '.filter__list');
  modal('.header__cart', '#modal');
  getDataCard();
  fixHeader();
  cartCount();
  deleteCard();
  makeSticky('.category');
  
  window.addEventListener('resize', () => {
    makeSticky('.category');
});
  

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

  filterList.addEventListener('click', (evt) => {
    const target = evt.target;
    clearCatalog();

    cards({
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


  categoryList.addEventListener('click', (evt) => {
    const target = evt.target;
    const listItems = target.parentElement.parentElement.children;

    
    if (target.hasAttribute('data-category')) {
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('category__item--active');
      }
      
      target.parentElement.classList.add('category__item--active');
      
      clearCatalog();
      cards({
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
      }
    });
  }

  const catalog = document.querySelector('.catalog__list');

  // let index = 0;
  catalog.addEventListener('click', (evt) => {
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

      addCardToCart(data);
      cartCount();

      cartCounter.style.display = 'none';

      setTimeout(() => {
        cartCounter.style.display = 'block';
      }, 100);
    }
  });

  function makeSticky(selector) {
    const header = document.querySelector('.header');
    const category =document.querySelector('.category');

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
          var newcss = (topPos < window.pageYOffset + header.clientHeight + 25) ?
            `top:20px; position: fixed; top: ${header.clientHeight + 15}px; left: 0px'` : 'position:absolute;';
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

  inputName.addEventListener('keydown', (event) => {
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
