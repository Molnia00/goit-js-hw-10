


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputOfDATE = document.querySelector('#datetime-picker');
const timerContainer = document.querySelector('.timer');
const fieldContainer = document.querySelector('.field');
const buttonForDate = document.querySelector('[data-start]');

const dataSecond = document.querySelector('[data-seconds]');
const dataMinute = document.querySelector('[data-minutes]');
const dataHour = document.querySelector('[data-hours]');
const dataDay = document.querySelector('[data-days]');


let userSelectedDate = null;
let stopCount = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    dateFormat: "d.m.Y",
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const selectedDate = selectedDates[0];
  
        if (selectedDate < new Date()) {
            alert('Please choose a date in the future');
            buttonForDate.disabled = true;
        } else {
            userSelectedDate = selectedDate;
            buttonForDate.disabled = false;
        }
    },
};

flatpickr("#datetime-picker", options);



buttonForDate.addEventListener("click",startCount )

function startCount() {
    stopCount = setInterval(updateCount, 1000);
}

function updateCount(){
    const now = new Date();
    const timeLeft = userSelectedDate - now;
    if (timeLeft < 0) {
        clearInterval(stopCount);
        return
    }

    const countTime = convertMs(timeLeft);
    console.log(countTime);
    dataDay.innerHTML = countTime.days; 
    dataSecond.innerHTML = countTime.seconds;
    dataMinute.innerHTML = countTime.minutes;
    dataHour.innerHTML = countTime.hours;
    
}





function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


