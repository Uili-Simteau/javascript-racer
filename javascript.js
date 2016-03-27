console.log("hello");

document.addEventListener('DOMContentLoaded', function() {
  //run the code
//call all the elements I think I need
  var racerTable = document.querySelector('.racer_table');
//these vars below are redundent I think
  var player1 = player1Track.querySelectorAll('td');
  var player2 = player2Track.querySelectorAll('td');
  var playerTrack
  var player1Track = document.querySelector('#player1_strip');
  var player2Track = document.querySelector('#player2_strip');
//  var playerPosition = document.querySelectorAll('.active');
 // var tablePosition = document.querySelectorAll("td");
  var tracks = document.querySelectorAll("tr");
  var start1 = 1;
  var start2 =1;
  var race = document.addEventListener('keyup', selectPlayer, false);
  var lengthOfTrack = 7;
  var restart = false;


  lengthOfTrack = prompt("How far do you want to race? 1-20 parsecs?")



//create how long the track is
//loops for 'number' of player tracks, how many 'tr's there are -no of players?
                for (var i = 0; i < tracks.length; i++) {
                    //loop for 'length' of tracks
                    for (var j = 0; j < lengthOfTrack.length; j++) {
                        var parsec = document.createElement('td');
                        tracks[i].appendChild(parsec);
                    }
                    //set last cell in array as finish line
                    parsec.className = "finish";
                };

}

restartGame()

  function selectPlayer() {
    if (event.which === 13) {
        playerTrack = player1Track;
        start = start1;
    } else if (event.which === 97) {
        playerTrack = player2Track;
        start = start2;
    }
    updatePlayerPosition(playerTrack, start)



//enacted everytime a key is released
  function updatePlayerPosition(playerTrack, start) {
    //if 'a' is pressed player 1
    if (event.which === 13) {
//change position function is called on player 1, start position is incremented
        if (player1Track[start1].className === "active") {
            player1Track[start1].className = "active";
            player1Track[start1-1].className = "";
            start1 +=1;
        }
        else if (player1Track[start1].className === "finish") {
                player1Track[start1-1].className = "";
                alert("Congratulations Star Racer, you've won!");
                restart = confirm("Play again?");
                //laura code: when player reaches end, cel is not incremented
                if (restart) {
                    restartGame()
                } else {
                    race = document.removeEventlistener('keyup', updatePlayerPosition);
                }
        }
        }
    //if enter is pressed, update changes on player 2
        else if (event.which === 97) {
            changePosition(player2);
            if (player2Track[start2].className === "active") {
                player2Track[start2].className = "active";
                player2Track[start2-1].className = "";
                start2 +=1;
        }
            else if (player1Track[start1].className === "finish") {
                player1Track[start1-1].className = "";
                alert("Congratulations Star Racer, you've won!");
                restart = confirm("Play again?");
                 if (restart) {
                    restartGame()
                } else {
                    play = document.removeEventlistener('keyup', updatePlayerPosition);
                }
            }
    };

function restartGame() {
    player1Track = document.querySelectorAll('#player1_strip td');
    player2Track = document.querySelectorAll('#player2_strip td');
//back to number 1's
    start1 = 1;
    start2 = 1;
//   remove class names from all cells and sets first cell as start
    for (var i = 0; i < player1Track.length-1; i++) {
        player1Track[i].className = "";
        player2Track[i].className = "";
        player1Track[0].className = "active";
        player2Track[0].className = "active";

        restart = false;
    };
  };
})