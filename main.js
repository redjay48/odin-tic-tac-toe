const player = (name, symbol) => {
    return { name, symbol };
}


const Player1 = player("", "X");
const Player2 = player("", "O");


const formInput = (() => {

    const _name1 = document.querySelector('#name1');
    const _name2 = document.querySelector('#name2');
    const _submitButton = document.querySelector('.submitButton');
    const entry = () => {
        _submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (_name1.value !== '' && _name2.value !== '') {
                Player1.name = _name1.value;
                Player2.name = _name2.value;
                endGame.reset();
            } else {
                gameBoard.display.textContent = "Please Enter Player Names";
                endGame.disableAll();
            }
            

        })
    }


    return {
        entry
    }
})();




const gameBoard = (() => {
    const cells = document.getElementsByClassName('gameButtons');
    const _diagonal1 = Array.from(document.getElementsByClassName('diagonal1'));
    const _diagonal2 = Array.from(document.getElementsByClassName('diagonal2'));
    const _cellColumn1 = Array.from(document.getElementsByClassName('cellColumn1'));
    const _cellColumn2 = Array.from(document.getElementsByClassName('cellColumn2'));
    const _cellColumn3 = Array.from(document.getElementsByClassName('cellColumn3'));
    const _cellRow1 = Array.from(document.getElementsByClassName('cellRow1'));
    const _cellRow2 = Array.from(document.getElementsByClassName('cellRow2'));
    const _cellRow3 = Array.from(document.getElementsByClassName('cellRow3'));
    const display = document.getElementById('displayWinner');
    const setArray = [_diagonal1, _diagonal2, _cellColumn1, _cellColumn2, _cellColumn3, _cellRow1, _cellRow2, _cellRow3];

    return {
        cells,
        setArray,
        display
    }
})();

const displayController = (() => {

    let _count = 0;
    const pressCell = () => {

        Array.from(gameBoard.cells).forEach(element => {
            element.addEventListener('click', () => {
                element.disabled = "true"
                _count++;
                if (_count % 2 !== 0) {
                    element.textContent = Player1.symbol;
                } else {
                    element.textContent = Player2.symbol;
                }
                element.disabled = 'true';
                gameLogic.win();
            })
        })
    }

    return {
        pressCell
    }
})();



const gameLogic = (() => {

    const _fillAll = (element) => element.textContent !== '';
    const _fillOne = (element) => element.textContent === Player1.symbol;
    const _fillTwo = (element) => element.textContent === Player2.symbol;


    const win = () => {

        gameBoard.setArray.forEach(set => {
            if (set.every(_fillAll)) {
                if (set.every(_fillOne)) {
                    gameBoard.display.textContent = `${Player1.name} Wins!!!`;
                    name1.value = '';
                    name2.value = '';
                    endGame.disableAll();
                } else if (set.every(_fillTwo)) {
                    gameBoard.display.textContent = `${Player2.name} Wins!!!`;
                    name1.value = '';
                    name2.value = '';
                    endGame.disableAll();
                }
            }
        })
    }

    return {
        win
    }
})();


const endGame = (() => {
    const disableAll = () => {
        for (let i = 0; i < gameBoard.cells.length; i++) {
            gameBoard.cells[i].disabled = true;
        }
    }

    const reset = () => {
        for (let i = 0; i < gameBoard.cells.length; i++) {
            gameBoard.cells[i].disabled = false;
            gameBoard.cells[i].textContent = '';
            gameBoard.display.textContent = '';
        }
    }

    return {
        disableAll,
        reset
    }
})();


displayController.pressCell();
formInput.entry();





// const cell00 = document.querySelector(`button[data-key="00"]`);
// const cell01 = document.querySelector(`button[data-key="01"]`);
// const cell02 = document.querySelector(`button[data-key="02"]`);
// const cell10 = document.querySelector(`button[data-key="10"]`);
// const cell11 = document.querySelector(`button[data-key="11"]`);
// const cell12 = document.querySelector(`button[data-key="12"]`);
// const cell20 = document.querySelector(`button[data-key="20"]`);
// const cell21 = document.querySelector(`button[data-key="21"]`);
// const cell22 = document.querySelector(`button[data-key="22"]`);

