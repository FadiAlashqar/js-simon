// COUNTDOWN
// richiamo gli elementi su cui andrò a a lvorare:
const countdown = document.getElementById('countdown');
let seconds = 0;

// CORPO DEL PROGRAMMA
const CountInterval = setInterval(function() {
    seconds++
    countdown.innerText = seconds;

    if (seconds === 30) {
        let answersForm = document.getElementById('answers-form')
        let numbersList = document.getElementById('numbers-list')
        
        answersForm.classList.remove("d-none");
        numbersList.classList.add("d-none")
        
            clearInterval(CountInterval);
    }
}, 1000)


// // NUMERI CASUALI

let max = 50;

function randomNum(num) {
    return Math.floor(Math.random() * num) + 1;
}

let numbersList = document.getElementById('numbers-list')

for (let i = 0; i < 5; i++) {
    let generateNum = randomNum(max);
    let list = document.createElement("li")
     list.textContent = generateNum;
     numbersList.appendChild(list);
}

