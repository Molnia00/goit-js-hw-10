// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
 
const form = document.querySelector('.form');
const btnCreate = document.querySelector('.btnCreate');
const inputReq = document.querySelector('[required]');

form.addEventListener('submit' , createMessage);

function createMessage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const delay = formData.get('delay');

    const state = formData.get('state');
    


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
               resolve(`✅ Fulfilled promise in ${delay}ms`);
             } else {
               reject(`❌ Rejected promise in ${delay}ms`);
             }
        }, delay);
    });
    
    promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });


}










































