


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputOfDATE = document.querySelector('#datetime-picker');
const timerContainer = document.querySelector('.timer');
const fieldContainer = document.querySelector('.field');
const buttonForDate = document.querySelector('[data-start]');



let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      const selectedDate = selectedDates[0]; 
  
 if (selectedDate < new Date()) {
      alert('Please choose a date in the future');
       }
    },
};

flatpickr("#datetime-picker", options);

