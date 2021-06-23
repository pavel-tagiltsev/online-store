import {
  getResource
} from "../services/services";

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
            <p class="card__price">${this.price} ₽</p>
            `;
      this.parent.append(element);
    }
  }

  function copyArray(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  getResource("https://frontend-test.idaproject.com/api/product")
    .then(data => {
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

export default cards;
