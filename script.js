'use strict'

const playerScoreArr = document.querySelectorAll('.player__score');

const playerSection = document.querySelectorAll('.player');

const playerCurrentScore = document.querySelectorAll('.player__current__score');

const winner = document.querySelector('.winner');

const dice = document.querySelector('.dice');
dice.style.visibility = 'hidden';

const restart = document.querySelector('.restart');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');

let curentScore = 0;
let playerScore = [0, 0];
let randomNumber;
let curentPlayer = 0;
let playing = true;

let generateRandomNumber = () => Math.trunc(Math.random() * 6) + 1;

function changePlayer(){
  playerCurrentScore[curentPlayer].textContent = 0;
  playerSection[curentPlayer].classList.remove('player--active');
  curentPlayer === 0 ? curentPlayer = 1 : curentPlayer = 0;
  playerSection[curentPlayer].classList.add('player--active');
}

roll.addEventListener('click', function(){
  if(!playing) return;
  randomNumber = generateRandomNumber();
  dice.style.visibility = 'visible';
  dice.src = `img/dice-${randomNumber}.png`;

    if(randomNumber !== 1) {
      curentScore += randomNumber;
      playerCurrentScore[curentPlayer].textContent = curentScore;
    } else {
      curentScore = 0;
      changePlayer();
    }
}); 

hold.addEventListener('click', function(){
  playerScore[curentPlayer] += curentScore;
  curentScore = 0;
  playerScoreArr[curentPlayer].textContent = playerScore[curentPlayer];
  if(playerScore[curentPlayer] >= 100){
    playing = false;
    dice.style.visibility = 'hidden';
    document.querySelector(`#score--${curentPlayer}`).textContent = 0;
    winner.style.visibility = 'visible';
  } else {
    changePlayer();
    dice.style.visibility = 'hidden';
  }
    


});

restart.addEventListener('click', function(){
  playerScoreArr[0].textContent = 0;
  playerScoreArr[1].textContent = 0;
  playerScore = 0;
  playerSection[1].classList.remove('player--active');
  playerSection[0].classList.remove('player--active');
  playerSection[0].classList.add('player--active');
  curentScore = 0;
  curentPlayer = 0;
  playing = true;
  playerScore = [0, 0];
  dice.style.visibility = 'hidden';
  winner.style.visibility = 'hidden';
});







