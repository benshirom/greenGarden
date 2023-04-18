let divScreen = document.querySelector("#trivia_screen");
let counter = 0;
let myQ;
let score = 0;
window.onload = function () {
    // createQuestionTmp();
    // fillQuestion(counter)
    document.querySelector("#trivia_screen").innerHTML = `
    <h2 class="myFont">Welcome To Trivia Game</h2>
    <div class="d-flex justify-content-center">
        
        <p class="myFont1 col-6">
            Enjoy and Learn About The Eearth
            Discover the global warming and
            influences on environmental</p>
           </div>
    <button id="id_start" onclick="startTrivia()"  class="btn my-2 p-2 myFont">START</button>
     `;
}

function reastGame() {
    counter = 0;
    score = 0;
    document.querySelector("#trivia_screen").innerHTML = "";
}

function startTrivia() {
    reastGame();
    createQuestionTmp();
    fillQuestion(counter)
}



function createQuestionTmp() {
    let myDiv = document.createElement("div");
    myDiv.className = "d-flex flex-column ";
    document.querySelector("#trivia_screen").append(myDiv);
    myDiv.innerHTML =
        ` <h5 id="id_Q"class="myFont1">v</h5>
    <button id="id_A1" onclick="clickAnswerBtn(1)"  class="btn btn-light my-2 p-2"></button>
    <button id="id_A2" onclick="clickAnswerBtn(2)" class="btn btn-light  my-2 p-2"></button>
    <button id="id_A3" onclick="clickAnswerBtn(3)" class="btn btn-light  my-2 p-2"></button>
    <button id="id_A4" onclick="clickAnswerBtn(4)" class="btn btn-light  my-2 p-2"></button>`;

}


function fillQuestion(Qnum) {
    let mybq = json_ar[Qnum];
    myQ = new Question(mybq.Q, mybq.A1, mybq.A2, mybq.A3, mybq.A4, mybq.rightA);
    myQ.render();
}

function clickAnswerBtn(_id) {
    let fullId = "id_A" + _id
    if (counter <= 8) {


        if (_id == myQ.rightA) {
            console.log(counter);
            document.getElementById(fullId).style.backgroundColor = "green";
            score += 10;
        } else {
            document.getElementById(fullId).style.backgroundColor = "red";

        }
        setTimeout(function () { nextQuestion(); }, 800);

    } else if (counter == 9) {
        if (_id == myQ.rightA) {
            console.log(counter);
            document.getElementById(fullId).style.backgroundColor = "green";
            score += 10;
        } else {
            document.getElementById(fullId).style.backgroundColor = "red";
        }
        counter++;
    }
    setTimeout(function () { cleanBtnBackground(); }, 400);
    if (counter == 10) {
        setTimeout(function () { gameOver(); }, 800)
    }
}

function nextQuestion() {
    counter++;
    fillQuestion(counter);
}

function cleanBtnBackground() {
    let fullId = "id_A"
    for (let i = 1; i <= 4; i++) {
        document.getElementById(fullId + i).style.backgroundColor = "white";
    }
}

function gameOver() {
    document.querySelector("#trivia_screen").innerHTML = "";
    document.querySelector("#trivia_screen").innerHTML = `
    <h2 class="myFont1">game over</h2>
    <h5>score:${score}</h5>
    <h5>${checkScore()}</h5>
    <button id="id_btn_start" onclick="window.location.href='https://ben-shirom.netlify.app/index.html';" class="btn border-2 my-1 myFont">go home </button> 
    <button id="id_btn_start" onclick="startTrivia()" class="btn  border-2 my-1 myFont">new game</button>
    `;
}

function checkScore() {
    if (score==100) 
        return "Well done, excellent game";
    else if (score >= 80)
        return "Well done, good game";
    else if (score >= 50)
        return "You can do better";
    else if (score <= 40)
        return "Go study";
}





















