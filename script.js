letsPlay();

function letsPlay() {
    let arrayX = "", array0 = "";

    for (let i = 1; i <= 9; ++i) {
        let option = document.getElementById(i);
        option.addEventListener("input", function(event){
            if (option.innerHTML == 'x') {
                arrayX += i; 
                //console.log("arrayX: " + arrayX);
                displayResults(arrayX, 'x');
            } else if (option.innerHTML == '0') {
                array0 += i; 
                //console.log("array0: " + array0);
                displayResults(array0, '0');
            }
        })
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
