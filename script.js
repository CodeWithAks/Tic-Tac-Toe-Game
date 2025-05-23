let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-game");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        // console.log("Box was clicked");
        if(turnO) {
            box.innerText = "O";
            box.style.backgroundColor = "#FEFAE0";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.backgroundColor = "#FEFAE0";
            box.style.color = "Blue";
            turnO = true;
        }
        box.disabled = true;
        
        Checkwinner();
    });
});

const disableBoxes = () => {
    for( let box of boxes){
        box.disabled = true;   
    }
};

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "White";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const Checkwinner = () => {
    for(pattern of winPatterns) {
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!= "" && pos2val!= "" && pos3val!= "") {
            if(pos1val == pos2val && pos2val == pos3val) {
                console.log("WINNER",pos3val);
                showWinner(pos3val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);