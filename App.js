let gameSeq = [];
let userSeq = [];

let bts = ['red','yellow','purple','green'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function () {
    console.log("Game started !");
    if (started == false) {
        console.log("game is started !")
        started = true;
    }
    levelup();
});

function btnFlash (btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },500);
}
function levelup () {
    userSeq = [];
    level++;
    h2.innerText = `Level  ${level}`;
    let randIdx = Math.floor(Math.random() * 3 );
    let randColor = bts[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx) {
    // console.log("Current level :",level);
    // let idx = level - 1;

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            //levelup();
            setTimeout(levelup,1000);
        }
        console.log("Same Value !")
    } else {
        h2.innerHTML = `Game Over Bitch ! your score <b>${level}</b> <br>Press any key restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout ( function () {
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();

    }

}

function btnPress () {
    console.log("Button was pressed !");
    // console.log(this);
    let btn = this;
    btnFlash(btn);
    
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}