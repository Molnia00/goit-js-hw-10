


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

const error = "Please choose a date in the future";
let userSelectedDate = null;
let stopCount = null;
buttonForDate.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    dateFormat: "y-m-d",
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const selectedDate = selectedDates[0];
        
        if (selectedDate < new Date()) {
            iziToast.error({
            title: 'Error',
            message: "Please choose a date in the future",
            position: 'topRight',
        });
            buttonForDate.disabled = true;
        } else {
            userSelectedDate = selectedDate;
            buttonForDate.disabled = false;
            
        }
    },
};

const fp = flatpickr("#datetime-picker", options);




buttonForDate.addEventListener("click",startCount )

function startCount() {
    stopCount = setInterval(updateCount, 1000);
    buttonForDate.disabled = true;
    inputOfDATE.disabled = true;
    fp.set('clickOpens' , false)
}

function updateCount(){
    const now = new Date();
    const timeLeft = userSelectedDate - now;
    if (timeLeft < 0) {
        clearInterval(stopCount);
        
         buttonForDate.disabled = false;
    inputOfDATE.disabled = false;
    fp.set('clickOpens' , true)

        return;
    }

    const countTime = convertMs(timeLeft);
    console.log(countTime);
    
    dataDay.innerHTML = addZero(countTime.days); 
    dataSecond.innerHTML = addZero(countTime.seconds);
    dataMinute.innerHTML = addZero(countTime.minutes);
    dataHour.innerHTML = addZero(countTime.hours);
}

function addZero(num) {
    const strnum = "" + num;
    
    return strnum.padStart(2, "0");
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


//npm run dev