//webpage element access
let checkBtn = document.querySelector('.btn-check');
let attemptsLeftE1 = document.querySelector('#attempts-left');
let txtNumber= document.querySelector('.input-number');
let messageE1 = document.querySelector('.message');
let secretNumE1=document.querySelector('.secret-number');
let body=document.querySelector('body');
// let newGameBtn = document.querySelector('new-game');
//create global variables

let secretNumber = 5;

let attemptsLeft = 10;


//add an event listner on check button
checkBtn.addEventListener('click',function(){
    if(attemptsLeft > 0){
       attemptsLeft --;
       attemptsLeftE1.textContent = attemptsLeft;

    //    get the number entered by the user
let guess=Number(txtNumber.value);
//no input
if(guess === 0){
  messageE1.textContent='No number or 0 is entered';
}
//guessed correct number
else if(guess === secretNumber){
    messageE1.textContent='YOU WON THE GAME!';
    //display the secret number
    secretNumE1.textContent=secretNumber;
    //change bgcolor
    body.style.backgroundColor="#FF5733";
}
//guessed wrong number
else if(guess !== secretNumber){
    if(currentscore > 0){
        body.style.backgroundColor='red';  
        setTimeout(() => {body.style.backgroundColor='black';}, 500)
           let message = guess >secretNumber ? 'you guessed too high'
                          :'you guessed too low';
        messageE1.textContent= message;
        
    }else{
        messageE1.textContent='you lost the game';
        body.style.backgroundColor='red';  
    }

}
    }else{
        //lost the game
        messageE1.textContent='you lost the game';
        attemptsLeft.textContent = 0;
        body.style.backgroundColor='red';  
    }
})
// newGameBtn.addEventListener('click',function(){
//     secretNumber = 5;
//     attemptsLeft=10;
//     messageE1.textContent='Guess a number between 1-10';
//     attemptsLeftE1.textContent = attemptsLeft;
//     secretNumE1.textContent='?';
//     txtNumber.value='';
//     body.style.backgroundColor='black';
// })
