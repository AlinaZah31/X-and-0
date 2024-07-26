currentPlayer = "X";
let weHaveWinner = 0;  
winnerValues = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

generateButtons();

function generateButtons() {
    for (let i = 1; i <= 9; ++i) {
        const button = document.createElement("button");
        button.type = "button";
        button.innerText = " - ";
        button.id = i;
        document.body.appendChild(button);    
        button.onclick = "this.disabled=true";
        button.onclick = function() {letsPlay(i, currentPlayer); this.disabled=true;}
        if (i % 3 == 0 ) {
            document.body.appendChild(document.createElement("br"));
        }  
    } 
}

function letsPlay(idBtn, currentGamer) { 
    let weHaveWinner1 = 0;  
    let currentBtn = document.getElementById(idBtn);
    if (currentGamer === "X") {
        currentPlayer = "0";
    } else if (currentGamer === "0") {
        currentPlayer = "X";
    } 
    if (weHaveWinner == 0) {
        currentBtn.innerHTML = currentGamer;
        document.getElementById("Initial-text").innerHTML = "NO WINNER";
        for (let i = 0; i < winnerValues.length; ++i) {
            for (let j = 0; j < 3; ++j) {
                if (idBtn === winnerValues[i][j]) {
                    winnerValues[i][j] = currentGamer;
                }
                if (winnerValues[i][0] == winnerValues[i][1] && winnerValues[i][0] == winnerValues[i][2]) {
                    document.getElementById("Initial-text").innerHTML = "The winner is: " + currentGamer;
                    weHaveWinner1 = 1;
                }
            }
        }
        weHaveWinner = weHaveWinner1;
    }    
}
