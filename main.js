// const player = (name,symbol) => {
//     return {name, symbol};
// }

// const gameBoard = (() => {
//     const gameCells = [];
   
//     return {
//         gameCells,
//         gameCell
//         }
// })();

// const displayController = (() => {
//     const pressCell = () => {
//         gameBoard.gameCell.addEventListener('click', displaySymbol(e))
//     }
        
    
//     return {
//         pressCell
//     }
// })();

// const gameLogic = (() => {
    
// })();

// function displaySymbol(e) {
//     console.log(e);
// }

// displayController.pressCell();


// const cell1 = document.querySelector(`button[data-key="00"]`);
// const cell2 = document.querySelector(`button[data-key="01"]`);
// const cell3 = document.querySelector(`button[data-key="02"]`);
// const cell4 = document.querySelector(`button[data-key="10"]`);
// const cell5 = document.querySelector(`button[data-key="11"]`);
// const cell6 = document.querySelector(`button[data-key="12"]`);
// const cell7 = document.querySelector(`button[data-key="20"]`);
// const cell8 = document.querySelector(`button[data-key="21"]`);
// const cell9 = document.querySelector(`button[data-key="22"]`);


const cells = document.getElementsByClassName('gameButtons');
const diagonal1 = document.getElementsByClassName('diagonal1');
const diagonal2 = document.getElementsByClassName('diagonal2');
const cellColumn1 = document.getElementsByClassName('cellColumn1');
const cellColumn2 = document.getElementsByClassName('cellColumn2');
const cellColumn3 = document.getElementsByClassName('cellColumn3');
const cellRow1 = document.getElementsByClassName('cellRow1');
const cellRow2 = document.getElementsByClassName('cellRow2');
const cellRow3 = document.getElementsByClassName('cellRow3');


// const cells = Array.from(cell);
let count = 0;
for(let i = 0; i< cells.length; i++){
    cells[i].addEventListener('click', function (e) {
        count++;
        if(count%2 === 0) {
            e.target.textContent = "X"
        } else {
            e.target.textContent = "O"
        }
        e.target.disabled = 'true';
        console.log(count);
        win();
    })
}

function win() {
    for(let i = 0; i < 3; i++){
        if(diagonal1[i].textContent === "X") {
            console.log("X wins!")
        }
    }
}

function disableAll() {
  for(let i = 0; i < cells.length; i++){
    cells[i].disabled = 'true';
  }
}