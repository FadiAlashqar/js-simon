// COUNTDOWN
// richiamo gli elementi su cui andrò a a lvorare:
const countdown = document.getElementById('countdown');
let seconds = 0;

// CORPO DEL PROGRAMMA
const CountInterval = setInterval(function() {
    seconds++
    countdown.innerText = seconds;

    if (seconds === 10) {
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

// CONTROLLO I NUMERI INSERITI E LI CONFROTNO CON QUELLI GENERATI, QUINDI DETERMINO QUANTI NUMERI COMBACIANO
let answersForm = document.getElementById('answers-form')
let button = document.querySelector('button')

button.addEventListener('click', function(verify) {
    verify.preventDefault()
    
    let computerNum = numbersList.children;
    let userNum = answersForm.elements;
    let correctNums = [];

    for (let j = 0; j < computerNum.length; j++) {
       
        let text = computerNum[j].innerText

        for (let m = 0; m < userNum.length; m++) {
           
            let value = userNum[m].value
            
            if (parseInt(text) === parseInt(value)) {
                
                correctNums.push(value);
                
                const message = document.getElementById('message')
                message.innerText = (`hai indovinato ${correctNums.length} numeri :${value++}`)
            }
            
        }   
        
    }
    let output = "";
    if (correctNums.length > 0) {
        output = `Hai indovinato ${correctNums.length} numeri: ${correctNums.join(', ')}`;
    } else {
        output = "Non hai indovinato nessun numero!";
    }

    const message = document.getElementById('message');
    message.innerText = output;
   
    
})




