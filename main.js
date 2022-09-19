const player = (name, symbol) => {
    return { name, symbol };
}

const Player1 = player('Raju', "X");
const Player2 = player("Raj", "O");


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


const cell00 = document.querySelector(`button[data-key="00"]`);
const cell01 = document.querySelector(`button[data-key="01"]`);
const cell02 = document.querySelector(`button[data-key="02"]`);
const cell10 = document.querySelector(`button[data-key="10"]`);
const cell11 = document.querySelector(`button[data-key="11"]`);
const cell12 = document.querySelector(`button[data-key="12"]`);
const cell20 = document.querySelector(`button[data-key="20"]`);
const cell21 = document.querySelector(`button[data-key="21"]`);
const cell22 = document.querySelector(`button[data-key="22"]`);


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


// function win() {

//     let count = 0;
//     for (let i = 0; i < 3; i++) {
//         if (diagonal1[i].textContent === "X")
//         {
//             count++;
//             if (count === 3) {
//                 console.log("X wins!!!");
//                 disableAll();
//                 count = 0;
//             }

//         } else if (diagonal2[i].textContent === "X") {
//             count++;
//             if (count === 3) {
//                 console.log("X wins!!!");
//                 disableAll();
//                 count = 0;
//             }

//         } else if (cellColumn1[i].textContent === "X") {
//             count++;
//             if (count === 3) {
//                 console.log("X wins!!!");
//                 disableAll();
//                 count = 0;
//             }

//         } else if (cellColumn2[i].textContent === "X") {
//             count++;
//             if (count === 3) {
//                 console.log("X wins!!!");
//                 disableAll();
//                 count = 0;
//             }

//         } else if (cellColumn3[i].textContent === "X") {
//             count++;
//             if (count === 3) {
//                 console.log("X wins!!!");
//                 disableAll();
//                 count = 0;
//             }

//         } else if (cellRow1[i].textContent === "X") {
//             count++;
//             if (count === 3) {
//                 console.log("X wins!!!");
//                 disableAll();
//                 count = 0;
//             }

//         } else if (cellRow2[i].textContent === "X") {
//             count++;
//             if (count === 3) {
//                 console.log("X wins!!!");
//                 disableAll();
//                 count = 0;
//             }

//         } else if (cellRow3[i].textContent === "X") {
//             count++;
//             if (count === 3) {
//                 console.log("X wins!!!");
//                 disableAll();
//                 count = 0;
//             }

//         }
//     }
// }


// function win() {
//     let count = 0;
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if ().textContent === "X") {
//                 count++;
//                 if (count === 3) {
//                     console.log(`X wins ${i}`);
//                     disableAll();
//                 }
//             }

//         }
//     }
// }



function disableAll() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].disabled = 'true';
    }
}

// let count = 0;
// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', function (e) {
//         count++;
//         if (count % 2 === 0) {
//             e.target.textContent = "X"
//         } else {
//             e.target.textContent = "O"
//         }
//         e.target.disabled = 'true';

//         console.log(count);
//         win();
//     })
// }

// Array Logic
let count = 0;
let array = [[], [], []];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        document.querySelector(`button[data-key="${i}${j}"]`).addEventListener('click', function (e) {
            count++;
            if (count % 2 === 0) {
                e.target.textContent = Player1.symbol;
                array[i][j] = Player1.symbol;
            } else {
                e.target.textContent = Player2.symbol;
                array[i][j] = Player2.symbol;
            }
            e.target.disabled = "true";
        })
    }
}

function winCondition(a, b, counter) {
    if (array[a][b] === Player1.symbol) {
        counter++;
        if (counter === 3) {
            console.log(counter);
            console.log(`${Player1.name} Wins!!!`);
            counter = 0;
        }
    }
}


function win(current) {
    let countRow = 0;
    let countColumn = 0;
    let countDiag1 = 0;
    let countDiag2 = 0;
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (i === k) {
                    if (array[i][j] === current.symbol) {
                        countRow++;
                        if (countRow === 3) {
                            console.log(countRow);
                            console.log(`${current.name} Wins!!!`);
                            countRow = 0;
                        }
                    }
                } else if (j === k) {
                    if (array[i][j] === current.symbol) {
                        countColumn++;
                        if (countColumn === 3) {
                            console.log(countColumn);
                            console.log(`${current.name} Wins!!!`);
                            countColumn = 0;
                        }
                    }
                } else if (array[i][j] === array[j][i] === current.symbol) {
                    countDiag1++;
                    console.log(countDiag1);
                    if (countDiag1 === 3) {
                        console.log(countDiag1);
                        console.log(`${current.name} Wins!!!`);
                        countDiag1 = 0;
                    }
                } else if (array[2][0] === array[1][1] === array[0][2] === current.symbol) {
                    countDiag2++;
                    console.log(countDiag2);
                    if (countDiag2 === 3) {
                        console.log(countDiag2);
                        console.log(`${current.name} Wins!!!`);
                        countDiag1 = 0;
                    }
                }
            }
        }
    }
}



