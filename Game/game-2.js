let min = 1,
    max = 10,
    winNum = randomNum(min, max),
    guessesNum = 3;

const taskContainer = document.querySelector('.container'),
      taskInput = document.querySelector('.inputField'),
      taskSubmit = document.querySelector('#submitBtn'),
      taskMessage = document.querySelector('.message'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num');

  minNum.textContent = min;
  maxNum.textContent = max;

  taskContainer.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
      window.location.reload();
    }
  })

  taskSubmit.addEventListener('click', function(){
    let guess = parseInt(taskInput.value);

    if(isNaN(guess) || guess > 10 || guess < 0){
      setMessage(`Please guess a number between ${min} and ${max}`, 'red');
    }
    if(guess === winNum){
      gameOver(true, `${winNum} is correct, YOU WIN :)`);
      taskSubmit.value = 'Play Again';
      taskSubmit.className = 'play-again';
    } else {
    guessesNum -= 1;
    if(guessesNum === 0){
      gameOver(false, `${guess} is not correct, the correct number was ${winNum}, you lost :(`)
      taskSubmit.value = 'Play Again';
      taskSubmit.className = 'play-again';
      } 
      else {
        gameOver(false, `${guess} is not correct, ${guessesNum} guesses left`);
        taskInput.value = '';
      }
    }
  });

  function randomNum(min, max){
   return Math.floor(Math.random()*(max-min+1)+min);
  };

function setMessage(msg, color){
  taskMessage.textContent = msg;
  taskMessage.style.color = color;
};
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
      taskInput.disable = true;
      taskInput.style.borderColor = color;
      taskMessage.style.color = color;
      setMessage(msg);
}