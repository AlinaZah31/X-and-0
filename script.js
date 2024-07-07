function shuffleArray (array) { 
    for (let i = 8; i > 0; --i) { 
        const j = Math.floor (Math.random () * (i + 1)); 
        [array [i], array [j]] = [array [j], array [i]]; 
    } 
    return array; 
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array = shuffleArray(array);
let stringX = "", string0 = "";
let weHaveWinner = 0;
letsPlay();

function letsPlay() { 
    weHaveWinner = 0;
    for (let i = 0; i < 9 && weHaveWinner == 0; ++i) {
        if (i % 2 != 0) {
            stringX += array[i];
            document.getElementById(array[i]).innerHTML = "X";
            document.getElementById(array[i]).style.color = "Red";
            displayResults(stringX, 'X');
        } else {
            document.getElementById(array[i]).innerHTML = "0";
            document.getElementById(array[i]).style.color = "Blue";
            string0 += array[i];
            displayResults(string0, '0');
        }
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


