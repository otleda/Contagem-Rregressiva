const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');

const nextYearContainer = document.querySelector('#year');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit


const insertCountdowToDisplay = ({ days, hours, minutes, seconds }) => {
  secondsContainer.textContent = getTimeUnit(seconds);
  minutesContainer.textContent = getTimeUnit(minutes);
  hoursContainer.textContent = getTimeUnit(hours);
  daysContainer.textContent = getTimeUnit(days);
}

const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

    const days = Math.floor(difference / 1000 / 60 / 60 / 24); //  359
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24; //  8617
    const minutes = Math.floor(difference / 1000 / 60) % 60; //  517062
    const seconds = Math.floor(difference / 1000) % 60; // 31023844

    if(days == '00' ) {
        nextYearContainer.textContent = nextYear;
    }
    
    insertCountdowToDisplay({days, hours, minutes, seconds});
}

setInterval( updateCountdown, 1000);