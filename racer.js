//run program after everything has loaded.
document.addEventListener('DOMContentLoaded', function() {

//load track for each player
var lane1 = document.getElementById('lane1');
var lane2 = document.getElementById('lane2');

//prompt length of track from user
var trackLength = prompt("How far away is the planet? 3 to 15 parsecs?");

//generate track
for (var j = 0;  < trackLength.length; j++) {
    lane1.appendChild(document.createElement('td'));
    lane2.appendChild(document.createElement('td'));
};

//initialise each player to a track
var player1 = lane1.querySelectorQll('td');
var player2 = lane2.querySelectorQll('td');

//create finish line with 'finish' class.
player1[trackLength].className = "finish";
player2[trackLength].className = "finish";

//initialise player positions on track.
var p1 = 1;
var p2 = 1;

var racer1_wins = document.getElementById('racer1_wins');
var racer2_wins = document.getElementById('racer2_wins');

var button = document.getElementById('restart');










})