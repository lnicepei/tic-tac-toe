const Player = (name, sign) => {
    const getName = () => name;
    const getSign = () => sign;
    return {getName, getSign}
};

const playerX = Player("", "x");
const playerO = Player("", "o");

const Gameboard = (() => {
    let boardArray = ["", "", "", "", "", "", "", "", ""];
    let container = document.querySelector(".board-container");
    
    function buildBoard() {
        let counter = 0;

        for (let box in boardArray) {
            let sign = document.createElement("div");
            sign.addEventListener("click", () => {
                
                if (boardArray[box] == "" && counter % 2 == 0 && document.querySelector(".restart-menu").innerHTML == "") {
                    boardArray[box] = playerX.getSign();
                    counter++;
                    sign.innerHTML = '<svg style="width:100%;height:100%" viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>'
                } else if (boardArray[box] == "" && counter % 2 == 1 && document.querySelector(".restart-menu").innerHTML == "") {
                    boardArray[box] = playerO.getSign();
                    counter++;
                    sign.innerHTML='<svg style="width:100%;height:100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
                }

                GameEndCombinations(boardArray);
            });
            container.appendChild(sign);
        }
    }

    buildBoard();

    const endGame = () => {
        boardArray = ["", "", "", "", "", "", "", "", ""];
        
        document.querySelector(".board-container").innerHTML = "";
        document.querySelector(".restart-menu").innerHTML = "";
        document.querySelector(".game-result").textContent = "";

        buildBoard();
    };

    return {boardArray, endGame}
})();


function GameEndCombinations (boardArray) {
    if (boardArray[0] == "x" && boardArray[1] == "x" && boardArray[2] == "x" ||
    boardArray[3] == "x" && boardArray[4] == "x" && boardArray[5] == "x" ||
    boardArray[6] == "x" && boardArray[7] == "x" && boardArray[8] == "x" ||
    boardArray[0] == "x" && boardArray[3] == "x" && boardArray[6] == "x" ||
    boardArray[1] == "x" && boardArray[4] == "x" && boardArray[7] == "x" ||
    boardArray[2] == "x" && boardArray[5] == "x" && boardArray[8] == "x" ||
    boardArray[0] == "x" && boardArray[4] == "x" && boardArray[8] == "x" ||
    boardArray[2] == "x" && boardArray[4] == "x" && boardArray[6] == "x"
    ) {
        document.querySelector(".game-result").textContent = "X wins";

        let restartButton = document.createElement("div");
        restartButton.addEventListener("click", Gameboard.endGame);
        restartButton.className = "restart-button";
        restartButton.textContent = "Restart";

        document.querySelector(".restart-menu").innerHTML = "";
        document.querySelector(".restart-menu").appendChild(restartButton);

    } else if (
        boardArray[0] == "o" && boardArray[1] == "o" && boardArray[2] == "o" || 
        boardArray[3] == "o" && boardArray[4] == "o" && boardArray[5] == "o" ||
        boardArray[6] == "o" && boardArray[7] == "o" && boardArray[8] == "o" ||
        boardArray[0] == "o" && boardArray[3] == "o" && boardArray[6] == "o" ||
        boardArray[1] == "o" && boardArray[4] == "o" && boardArray[7] == "o" ||
        boardArray[2] == "o" && boardArray[5] == "o" && boardArray[8] == "o" ||
        boardArray[0] == "o" && boardArray[4] == "o" && boardArray[8] == "o" ||
        boardArray[2] == "o" && boardArray[4] == "o" && boardArray[6] == "o"
    ) {
        document.querySelector(".game-result").textContent = "O wins";
        let restartButton = document.createElement("div");
        restartButton.addEventListener("click", Gameboard.endGame);
        restartButton.className = "restart-button";
        restartButton.textContent = "Restart";
        document.querySelector(".restart-menu").innerHTML = "";
        document.querySelector(".restart-menu").appendChild(restartButton);

    } else {
        const isFull = boardArray.every(cell => cell.length > 0);

        if (isFull) {
            document.querySelector(".game-result").textContent = "It's a draw";
            let restartButton = document.createElement("div");
            restartButton.addEventListener("click", Gameboard.endGame);
            restartButton.className = "restart-button";
            restartButton.textContent = "Restart";
            document.querySelector(".restart-menu").innerHTML = "";
            document.querySelector(".restart-menu").appendChild(restartButton);
        }
    }
}