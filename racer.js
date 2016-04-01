//run program after everything has loaded.
document.addEventListener('DOMContentLoaded', function() {

//load track for each player
var lane1 = document.getElementById('lane1');
var lane2 = document.getElementById('lane2');
var trackLength = 10;
//prompt length of track from user
//trackLength = prompt("How far away is the planet? 10to 15 parsecs");

//trackLength;
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

var won = document.getElementById('won');


//don't need this with the alert.
//var button = document.getElementById('restart');


//start user expeience
document.addEventListener('keyup', chooseFleet)


/*assign event keys to each player, and progress them using
class name active; change racer win class if the last cell
class = 'active'*/
function chooseFleet() {
    for(var i = 0; i >= trackLength; i++) {
        for (event.which === 65) {
            updateFleetPosition(player1, p1)
            p1++;
        }
        };
    for (event.which === 13) {
        updateFleetPosition(player2, p2);
        p2++;
    }
};

/*update position by changing existing td to "" and the incremented
one to "active" */
function updateFleetPosition(player, p) {
    if (player[p].className === "active") {
        player[p].className = "";
        player[p+1].className = "active";
    } else if (player[p].className === player[p][trackLength]) {
        won.className = "";
            relaunch();
    }
};

function relaunch() {
    if(confirm("Relaunch this Mission?")){
    window.location.reload();
}
};
});