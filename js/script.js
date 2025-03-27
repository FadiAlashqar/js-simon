// COUNTDOWN
// richiamo gli elementi su cui andrò a a lvorare:
const countdown = document.getElementById('countdown');
let seconds = 0;

// CORPO DEL PROGRAMMA
const CountInterval = setInterval(function name() {
    seconds++
    console.log(seconds)
    if (seconds <= 30) {
        countdown.innerText = seconds;
        
    }
    else{
        clearInterval(CountInterval);
    }
}, 1000)