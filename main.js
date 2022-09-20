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


// const cell00 = document.querySelector(`button[data-key="00"]`);
// const cell01 = document.querySelector(`button[data-key="01"]`);
// const cell02 = document.querySelector(`button[data-key="02"]`);
// const cell10 = document.querySelector(`button[data-key="10"]`);
// const cell11 = document.querySelector(`button[data-key="11"]`);
// const cell12 = document.querySelector(`button[data-key="12"]`);
// const cell20 = document.querySelector(`button[data-key="20"]`);
// const cell21 = document.querySelector(`button[data-key="21"]`);
// const cell22 = document.querySelector(`button[data-key="22"]`);


const cells = document.getElementsByClassName('gameButtons');
const diagonal1 = Array.from(document.getElementsByClassName('diagonal1'));
const diagonal2 = Array.from(document.getElementsByClassName('diagonal2'));
const cellColumn1 = Array.from(document.getElementsByClassName('cellColumn1'));
const cellColumn2 = Array.from(document.getElementsByClassName('cellColumn2'));
const cellColumn3 = Array.from(document.getElementsByClassName('cellColumn3'));
const cellRow1 = Array.from(document.getElementsByClassName('cellRow1'));
const cellRow2 = Array.from(document.getElementsByClassName('cellRow2'));
const cellRow3 = Array.from(document.getElementsByClassName('cellRow3'));
const setArray = [diagonal1, diagonal2, cellColumn1, cellColumn2, cellColumn3, cellRow1, cellRow2, cellRow3];


let count = 0;
Array.from(cells).forEach(element => {
    element.addEventListener('click', () => {
        element.disabled = "true"
        count++;
        if (count % 2 !== 0) {
            element.textContent = Player1.symbol;
        } else {
            element.textContent = Player2.symbol;
        }
        element.disabled = 'true';
        check();
    })
})

const fillAll = (element) => element.textContent !== '';
const fillOne = (element) => element.textContent === Player1.symbol;
const fillTwo = (element) => element.textContent === Player2.symbol;


function check() {
    setArray.forEach(set => {
        if (set.every(fillAll)) {
            if (set.every(fillOne)) {
                console.log(`${Player1.name} Wins!!!`);
            } else if (set.every(fillTwo)) {
                console.log(`${Player2.name} Wins!!!`);
            }
        }
    })
}



function disableAll() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].disabled = 'true';
    }
}





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
// let count = 0;
// let countOne = 0;
// let countTwo = 0;
// let array = [[], [], []];
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         document.querySelector(`button[data-key="${i}${j}"]`).addEventListener('click', function (e) {
//             count++;
//             if (count % 2 !== 0) {
//                 e.target.textContent = Player1.symbol;
//                 array[i][j] = Player1.symbol;
//                 countOne++;
//                 if (i === k) {
//                     if (array[i][j] === Player1.symbol) {
//                         countRow++;
//                         if (countRow === 3) {
//                             return `${current.name} Wins!!!`;
//                         }
//                     }
//                 } 
                // if(countOne >= 3) {
                //     if(win(Player1) !== undefined) {
                //         console.log(win(Player1));
                //     } else {
                //         disableAll();
                //     }
                // }
//             } else {
//                 e.target.textContent = Player2.symbol;
//                 array[i][j] = Player2.symbol;
//                 countTwo++;
//                 if(countTwo >= 3) {
//                     if(win(Player2) !== undefined) {
//                         console.log(win(Player2));
//                     }
//                 }
//             }
//             e.target.disabled = "true";
//         })
//     }
// }

// function winCondition(array,a, b, counter) {
//     if (array[a][b] === Player1.symbol) {
//         counter++;
//         if (counter === 3) {
//             console.log(counter);
//             console.log(`${Player1.name} Wins!!!`);
//             counter = 0;
//         }
//     }
// }


// function win(current) {
//     let countRow = 0;
//     let countColumn = 0;
//     let countDiag1 = 0;
//     let countDiag2 = 0;
//     for (let k = 0; k < 3; k++) {
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {5
//                 if (i === k) {
//                     if (array[i][j] === current.symbol) {
//                         countRow++;
//                         if (countRow === 3) {
//                             return `${current.name} Wins!!!`;
//                         }
//                     }
//                 } 
//                 else if (j === k) {
//                     if (array[i][j] === current.symbol) {
//                         countColumn++;
//                         if (countColumn === 3) {
//                             countColumn = 0;
//                             return `${current.name} Wins!!!`;
//                         }
//                     }
//                 } else if (array[i][j] === array[j][i] === current.symbol) {
//                     countDiag1++;
//                     console.log(countDiag1);
//                     if (countDiag1 === 3) {
//                         countDiag1 = 0;
//                         return `${current.name} Wins!!!`;
//                     }
//                 } 
//                 else if (array[2][0] === array[1][1] === array[0][2] === current.symbol) {
//                     countDiag2++;
//                     console.log(countDiag2);
//                     if (countDiag2 === 3) {
//                         countDiag1 = 0;
//                         return `${current.name} Wins!!!`;
//                     }
//                 }
//             }
//         }
//     }
// }



