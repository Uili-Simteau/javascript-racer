var racerTable = document.getElementByClass('.racer_table')

var Player1 = racer_table.querySelector('#player1_strip');
var Player2 = racer_table.querySelector('#player2_strip');
var playerPosition = racer_table.querySelector('.active');
var tablePosition = racer_table.querySelectorAll("td");


for (var i = 0; i < tablePosition.length; i++) {
    tablePosition[i]. addEventListener("keypress", advancePosition);
};

function changePosition() {
    console.log(this);
}