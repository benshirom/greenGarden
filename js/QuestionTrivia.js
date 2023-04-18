class Question {
    constructor(_Q, _A1, _A2, _A3, _A4, _rightA) {
        this.Q = _Q;
        this.A1 = _A1;
        this.A2 = _A2;
        this.A3 = _A3;
        this.A4 = _A4;
        this.rightA = _rightA;
    }

    render() {
        // let myDiv = document.createElement("div");
        // myDiv.className = "d-flex flex-column";
        // document.querySelector("#trivia_screen").append(myDiv);
        // myDiv.innerHTML =
        //     ` <h5 id="id_Q">${this.Q}v</h5>
        // <button id="id_A1" onclick="answerBtn(${this.A1})" class="btn btn-light my-2 p-2">${this.A1}v</button>
        // <button id="id_A2" onclick="answerBtn(${this.A2})" class="btn btn-light  my-2 p-2">${this.A2}v</button>
        // <button id="id_A3" onclick="answerBtn(${this.A3})" class="btn btn-light  my-2 p-2">${this.A3}v</button>
        // <button id="id_A4" onclick="answerBtn(${this.A4})" class="btn btn-light  my-2 p-2">${this.A4}v</button>`;
        document.querySelector("#id_Q").innerHTML=this.Q;
        document.querySelector("#id_A1").innerHTML=this.A1;
        document.querySelector("#id_A2").innerHTML=this.A2;
        document.querySelector("#id_A3").innerHTML=this.A3;
        document.querySelector("#id_A4").innerHTML=this.A4;
    }


}