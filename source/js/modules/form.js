'use strict';
function sendForm() {
    function upload(data, onLoad, onError) {
        const URL = 'https://reqres.in/api/users';
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
  
        xhr.addEventListener('load', function() {
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
  
        xhr.addEventListener('error', function() {
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
  
      form.addEventListener('submit', function(evt) {
        upload(new FormData(form), onLoad, onError);
        evt.preventDefault();
      });
}

export default sendForm;