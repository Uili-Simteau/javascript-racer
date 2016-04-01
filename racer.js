//run program after everything has loaded.
document.addEventListener('DOMContentLoaded', function() {

//load track for each player
var lane1 = document.getElementById('lane1');
var lane2 = document.getElementById('lane2');

//prompt length of track from user
var trackLength = prompt("How far away is the planet? (10 to 30 parsecs)");
trackLength;

//generate track
for (var j = 0; j < trackLength; j++) {
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

var won = document.getElementById('won');


//don't need this with the alert.
//var button = document.getElementById('restart');


//start user expeience
document.addEventListener('keyup', choosePlayer)


/*assign event keys to each player, and progress them using
class name active; change racer win class if the last cell
class = 'active'*/
function choosePlayer() {
    for(var i = 0; i >= trackLength; i++) {
        if (event.which === 65) {
            updatePlayerPosition(player1, p1)
            p1++;}
        }
    } else if (event.which === 13) {
        updatePlayerPosition(player2, p2)
        p2++;
    }
};

/*update position by changing existing td to "" and the incremented
one to "active" */
function updatePlayerPosition(player, p) {
    if (player[p].className === "active") {
        player[p].className = "";
        player[p+1].className = "active";
    } else if (player[p].className === [p][trackLength]) {
        won.className = "";
            relaunch();
    }
};


function relaunch() {
    if(confirm("Relaunch this Mission?"));
    window.location.reload();
}

});