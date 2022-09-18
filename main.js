const player = (name,symbol) => {
    return {name, symbol};
}

const gameBoard = (() => {
    const gameCells = [];
    const matrix = (gameCells) => {
        for (let i = 0; i< 3; i++) {
            for (let j = 0; j< 3; j++){
                console.log(gameCells[i][j])
            }
        }
    }
    
    return {
        gameCells,
        matrix
        }
})();

