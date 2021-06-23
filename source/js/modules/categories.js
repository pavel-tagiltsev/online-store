import {
  getResource
} from "../services/services";

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

  getResource("https://frontend-test.idaproject.com/api/product-category")
    .then(data => {
      data.forEach(({
        id,
        name
      }) => {
        new CreateItem(".category__list", id, name).render();
      });
    });
}

export default categories;
