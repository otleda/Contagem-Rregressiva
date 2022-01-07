const secondsContainer = document.querySelector('#seconds');

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

    // USANDO CONDICAO IF ELSE
    /* secondsContainer.textContent =  seconds;
    if(seconds < 10){
        secondsContainer.textContent = '0' + seconds;
    }else{
        seconds
    } */
}

setInterval( updateCountdown, 1000);