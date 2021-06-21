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

  const categoryList = document.querySelector('.category__list');
  const filterList = document.querySelector('.filter__list');
  const indicator = document.querySelector('.filter__indicator');


  filterList.addEventListener('click', (evt) => {
    const myNode = document.querySelector(".catalog__list");
    myNode.innerHTML = '';
    const target = evt.target;
    cards({
      quality: target.getAttribute('data-quality')
    });

    filterList.classList.remove('filter__list--active');

    if (target.getAttribute('data-quality') === 'price') {
      indicator.textContent = 'цене';
    }

    if (target.getAttribute('data-quality') === 'rating') {
      indicator.textContent = 'популярности';
    }

  });

  categoryList.addEventListener('click', (evt) => {
    const myNode = document.querySelector(".catalog__list");
    myNode.innerHTML = '';
    const target = evt.target;
    cards({
      category: target.getAttribute('data-category')
    });
  });

  function cartCount() {
    const list = document.querySelector('.modal__list');
    const counter = document.querySelector('.header__counter');
    console.log(list.children.length);
    counter.textContent = list.children.length;
  }

  cartCount();

  function deleteCard() {
    const list = document.querySelector('.modal__list');

    list.addEventListener('click', evt => {
      if (evt.target.classList.contains('card__delete')) {

        const list = document.querySelector('.modal__list');
        const modal = document.querySelector('.modal');

        evt.target.parentElement.remove();
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

    catalog.addEventListener('click', (evt) => {
      evt.preventDefault();
      const target = evt.target;

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
      }
    });

  deleteCard();

  // const list = document.querySelector('.modal__list');
  // const modalList = document.querySelector('.modal');
  
  // if (list.children.length === 0) {
  //   modalList.classList.add('modal--empty');
  // } else {
  //   modalList.classList.remove('modal--empty');
  // }

});
