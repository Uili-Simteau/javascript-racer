var racerTable = document.querySelector('.racer_table')

var player1 = document.querySelector('#player1_strip');
var player2 = document.querySelector('#player2_strip');
var playerPosition = document.querySelector('.active');
var tablePosition = document.querySelectorAll("td");


for (var i = 0; i < tablePosition.length; i++) {
    tablePosition[i]. addEventListener("keyup", updatePlayerPosition, false);
};

function updatePlayerPosition(player1) {
    this.className = "active";
    this.previousElementSibling.className = "";
}

function advancePosition2(event) {
    if (event.which = 13) {
        this.className = "active";
        this.previousElementSibling.className = "";
    };


}