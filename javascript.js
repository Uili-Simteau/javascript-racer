var racerTable = document.querySelector('.racer_table')

var Player1 = racerTable.querySelector('#player1_strip');
var Player2 = racerTable.querySelector('#player2_strip');
var playerPosition = racer_table.querySelector('.active');
var tablePosition = racer_table.querySelectorAll("td");


for (var i = 0; i < tablePosition.length; i++) {
    tablePosition[i]. addEventListener("keyup", advancePosition1, false);
};

function advancePosition1() {
    this.className = "active";
    this.previousElementSibling.className = "";
}

function advancePosition2(Player2) {
    this.className = "active";
    this.previousElementSibling.className = "";
}