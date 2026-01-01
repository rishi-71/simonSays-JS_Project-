let gameSequence = [];
let userSequence = [];
let btns = ["red","green","yellow","purple"];

let gameStarted = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
      if(gameStarted == false){
        console.log("Game started");
        gameStarted = true;
      }
      levelUp();
})

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },150);
}

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function (){
        btn.classList.remove("gameflash");
    },150);
}


function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*3)+1;
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    console.log(gameSequence);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameFlash(randomBtn);
}

function checkAns(){
    let idx = level-1;

    if(userSequence[idx] === gameSequence[idx]){
        console.log("same value");
    }else {
        h2.innerText = `Game Over Press any key to start`;
    }
}

function btnPress(){
    console.log(this);
    let btn= this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSequence.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
} 