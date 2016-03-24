document.addEventListener('DOMContentLoaded', function() {
  //run the code

//call all the elements I think I need
  var racerTable = document.querySelector('.racer_table');
  var player1 = player1Track.querySelectorAll('td');
  var player2 = player2Track.querySelectorAll('td');
  var player1Track = document.querySelector('#player1_strip');
  var player2Track = document.querySelector('#player2_strip');
  var playerPosition = document.querySelectorAll('.active');
  var tablePosition = document.querySelectorAll("td");
  var tracks = document.querySelectorAll("tr");
  var start1 = 1;
  var start2 =1;
  var race = document.addEventListener('keyup', updatePlayerPosition);
  var lengthOfTrack = 7;


  lengthOfTrack = propmt("How far do you want to race? 1-20 parsecs?";


//create how long the track is
//loops for 'number' of player tracks, how many 'tr's there are -no of players?
                for (var i = 0; i < tracks.length; i++) {
                    //loop for 'length' of tracks
                    for (var j = 0; j < lengthOfTrack.length; j++) {
                        var parsec = document.createElement('td');
                        tracks[i].appendChild(parsec);
                    }
                    //set last cell in array as finish line
                    parsec.className = "planet"
                }


//enacted everytime a key is released
function updatePlayerPosition(event) {
    //if 'a' is pressed player 1
    if (event.which === 13) {
//change position function is called on player 1, start position is incremented
        changePosition(player1);
        if (player1Track[start1].className = "active") {
            player1Track[start1].className = "active";
            player1Track[start1-1].className = "";
            start1 +=1;
        }
    //if enter is pressed, update changes on player 2
    } else if (event.which === 97) {
        changePosition(player2);
    };

};

// this is the change function that fires when called
    function changePosition() {
    //during race, active class is
    if (tablePosition.nextElementSibling.className = "finish") {
    propmt("You've finished the Race!")
}
    else if (tablePosition.className = "active") {
    tablePosition.className = "";
    tablePosition.nextElementSibling.className = "active";
}
};
});