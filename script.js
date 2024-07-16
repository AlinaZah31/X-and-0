let prevOption = "X";
let arrayX = "", array0 = "";
let weHaveWinner = 0;

generateButtons();

function generateButtons() {
    for (let i = 1; i <= 9; ++i) {
        const button = document.createElement("button");
        button.type = "button";
        button.innerText = " - ";
        button.id = i;
        document.body.appendChild(button);
        button.onclick = "this.disabled=true";
        button.onclick = function() {changeValue(i); this.disabled=true;}
        if (i % 3 == 0 ) {
            document.body.appendChild(document.createElement("br"));
        }  
    } 
}

function changeValue(idBtn) {   
    let currentBtn = document.getElementById(idBtn);
    if (prevOption == "X") {
        currentBtn.innerHTML = "0";
        currentBtn.style.backgroundColor = "green";
        array0 += idBtn;
        prevOption = "0";
        displayResults(array0, '0');
    } else if (prevOption == "0") {
        currentBtn.innerHTML = "X";
        currentBtn.style.backgroundColor = "blue";
        arrayX += idBtn;
        prevOption = "X";
        displayResults(arrayX, 'x');
    }
    if (weHaveWinner == 0) {
        document.getElementById("Initial-text").innerHTML = "NO WINNER";
    }
}

function displayResults(string, winnerValue) {
    if ((string.includes(1) && string.includes(2) && string.includes(3)) || 
        (string.includes(4) && string.includes(5) && string.includes(6)) || 
        (string.includes(7) && string.includes(8) && string.includes(9)) || 
        (string.includes(1) && string.includes(4) && string.includes(7)) || 
        (string.includes(2) && string.includes(5) && string.includes(8)) || 
        (string.includes(3) && string.includes(6) && string.includes(9)) || 
        (string.includes(1) && string.includes(5) && string.includes(9)) || 
        (string.includes(3) && string.includes(5) && string.includes(7))) {
        document.getElementById("Initial-text").innerHTML = "The winner is: " + winnerValue;
        weHaveWinner = 1;
    }
}
