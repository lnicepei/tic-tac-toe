let Gameboard = (() => {
    let boardArray = ["", "", "", "", "", "", "", "", ""];
    let container = document.querySelector(".board-container");
    let counter = 0;
    for(let box in boardArray){
        let sign = document.createElement("div");
        sign.addEventListener("click", () => {
            if(boardArray[box] == "" && counter % 2 == 0){
                boardArray[box] = "x";
                counter++;
            }else if(boardArray[box] == "" && counter % 2 == 1){
                boardArray[box] = "o";
                counter++;
            }
            sign.textContent = boardArray[box];
            console.log(boardArray);
            GameEndCombinations(boardArray);
        });
        container.appendChild(sign);
    }
    return{boardArray}
})();

let Player = (name, sign) => {
    const getName  = () => name;
    const getSign = () => sign;
    return{getName, getSign}
    
};

let playerX = Player("Dmitry", "x");
let playerO = Player("Number2", "o");

function GameEndCombinations (boardArray){
    // if(boardArray == ["x","x","x","o","o","o","o","o","o"] ||
    //     boardArray == ["o","o","o","x","x","x","o","o","o"] ||
    //     boardArray == ["o","o","o","o","o","o","x","x","x"] ||
    //     boardArray == ["x","o","o","x","o","o","x","o","o"] ||
    //     boardArray == ["o","x","o","o","x","o","o","x","o"] ||
    //     boardArray == ["o","o","x","o","o","x","o","o","x"] ||
    //     boardArray == ["x","o","o","o","x","o","o","o","x"] ||
    //     boardArray == ["o","o","x","o","x","o","x","o","o"]){
    //         alert("X won");
    //     }
    if(boardArray[0] == "x" && boardArray[1] == "x" && boardArray[2] == "x" ||
    boardArray[3] == "x" && boardArray[4] == "x" && boardArray[5] == "x" ||
    boardArray[6] == "x" && boardArray[7] == "x" && boardArray[8] == "x" ||
    boardArray[0] == "x" && boardArray[3] == "x" && boardArray[6] == "x" ||
    boardArray[1] == "x" && boardArray[4] == "x" && boardArray[7] == "x" ||
    boardArray[2] == "x" && boardArray[5] == "x" && boardArray[8] == "x" ||
    boardArray[0] == "x" && boardArray[4] == "x" && boardArray[8] == "x" ||
    boardArray[2] == "x" && boardArray[4] == "x" && boardArray[6] == "x"
    ){
        alert("XXX");
    }else if(
        boardArray[0] == "o" && boardArray[1] == "o" && boardArray[2] == "o" || 
        boardArray[3] == "o" && boardArray[4] == "o" && boardArray[5] == "o" ||
        boardArray[6] == "o" && boardArray[7] == "o" && boardArray[8] == "o" ||
        boardArray[0] == "o" && boardArray[3] == "o" && boardArray[6] == "o" ||
        boardArray[1] == "o" && boardArray[4] == "o" && boardArray[7] == "o" ||
        boardArray[2] == "o" && boardArray[5] == "o" && boardArray[8] == "o" ||
        boardArray[0] == "o" && boardArray[4] == "o" && boardArray[8] == "o" ||
        boardArray[2] == "o" && boardArray[4] == "o" && boardArray[6] == "o"
    ){
        alert("OOO");
    }
}   