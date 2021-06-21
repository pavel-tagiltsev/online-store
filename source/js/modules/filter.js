function filter(triggerSelector, elemSelector) {
    const list = document.querySelector(elemSelector),
        trigger = document.querySelector(triggerSelector);

        trigger.addEventListener("click", evt => {
            console.log(1);
            evt.preventDefault();
            list.classList.toggle('filter__list--active');
        });
             
}

export default filter;