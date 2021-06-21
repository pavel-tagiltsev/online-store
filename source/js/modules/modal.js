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

export default modal;
export {
  openModal
};
export {
  closeModal
};
