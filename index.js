let mytext =document.getElementById("myText")
let mybtn = document.getElementById("myBtn")
let mypara = document.getElementById("myPara")
let max = 100;
let min = 1;
let answer = Math.floor(Math.random() * (max - min) + 1);
let attempts = 0;
//let running = true;
function restartGame() {
    // Reset variables
    max = 100;
    min = 1;
    answer = Math.floor(Math.random() * (max - min) + 1);
    attempts = 0;
    running = true;

    // Clear the input field and paragraph
    mytext.value = "";
    mypara.textContent = "";
}

function test(){

//while(running){
  let guess = mytext.value
  guess = Number(guess)
  
  if(isNaN(guess)){
        mypara.textContent= "enter the valid number"
  }else if(guess > max || guess < min){
        mypara.textContent= "enter the valid number"
  }else{
    attempts++;
    if(guess < answer){
       mypara.textContent = "too low.Try again"
    }else if(guess > answer){
       mypara.textContent = "too high.Try again"
    }else {
       mypara.textContent = `congrats! the answer was ${answer}. Total attempts ${attempts}`;
    
    }
  }
}

