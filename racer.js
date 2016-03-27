//run program after everything has loaded.
document.addEventListener('DOMContentLoaded', function() {

//load track for each player
var lane1 = document.getElementById('lane1');
var lane2 = document.getElementById('lane2');

//prompt length of track from user
var trackLength = prompt("How far away is the planet? 3 to 15 parsecs?");

//generate track
for (var j = 0; j < trackLength.length; j++) {
    lane1.appendChild(document.createElement('td'));
    lane2.appendChild(document.createElement('td'));
};

//initialise each player to a track
var player1 = lane1.querySelectorAll('td');
var player2 = lane2.querySelectorAll('td');

//create finish line with 'finish' class.
player1[trackLength].className = "finish";
player2[trackLength].className = "finish";

//initialise player positions on track.
var p1 = 1;
var p2 = 1;

var racer1_wins = document.getElementById('racer1_wins');
var racer2_wins = document.getElementById('racer2_wins');

var button = document.getElementById('restart');


//start user expeience
document.addEventListener('keyup', choosePlayer)


/*assign event keys to each player, and progress them using
class name active; change racer win class if the last cell
class = 'active'*/
function choosePlayer() {
    if (event.which === 13) {
        updatePlayerPosition(player1, p1)
        p1++;
        if (player1[trackLength].className === "finish") {
            racer1_wins.className = "";
            endGame();
        }
    } else if (event.which === 97) {
        updatePlayerPosition(player2, p2)
        p2++;
        if (player2[trackLength].className === "finish") {
            racer2_wins.className = "";
            endGame();
        }
    }
};

/*update position by changing existing td to "" and the incremented
one to "active" */
function updatePlayerPosition(player, p) {
    if (player[p].className === "active") {
        player[p].className = "";
        player[p+1].className = "active";
    }
};

/* remove the 'keyup' eventlistener, reveal the button and add event
listener to button for 'click'*/
function endGame() {
    document.removeEventListener('keyup', choosePlayer);
    button.class = "";
    button.addEventListener('click', restart);
}

/*set everything back to the beginning, hide win statements, hide button
add event listener back for 'keyup' choose player*/
function restart() {
    for (var i = 0; i < trackLength; i++) {
        player1[i].className = "";
        player2[i].className = "";
    }
    player1[1].className = "active";
    player1[trackLength].className = 'finish';
    player2[1].className = "active";
    player2[trackLength].className = 'finish';
    button.className = "hidden";
    racer1_wins.className = "hidden";
    racer2_wins.className = "hidden";
    document.addEventListener('keyup', choosePlayer);
    p1 = 1;
    p2 = 1;
}
});