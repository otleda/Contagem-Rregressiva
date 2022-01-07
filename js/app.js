const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

    const days = Math.floor(difference / 1000 / 60 / 60 / 24); //  359
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24; //  8617
    const minutes = Math.floor(difference / 1000 / 60) % 60; //  517062
    const seconds = Math.floor(difference / 1000) % 60; // 31023844

    // USANDO CONDICAO TERNARIA
    secondsContainer.textContent =  seconds < 10 ? `0${seconds}` : seconds ;
    minutesContainer.textContent =  minutes < 10 ? `0${minutes}` : minutes ;
    hoursContainer.textContent =  hours < 10 ? `0${hours}` : hours ;
    daysContainer.textContent =  days < 10 ? `0${days}` : days ;

}

setInterval( updateCountdown, 1000);