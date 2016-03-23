document.addEventListener('DOMContentLoaded', function() {
  //run the code

//call all the elements I think I need
  var racerTable = document.querySelector('.racer_table');

  var player1Track = document.querySelector('#player1_strip');
  var player2Track = document.querySelector('#player2_strip');
  var playerPosition = document.querySelectorAll('.active');
  var tablePosition = document.querySelectorAll("td");
//test

//add a looping counter for td, or should this be <tr>?
    for (var i = 0; i < playerPosition.length; i++) {
    if (playerPosition[i]. addEventListener("keyup", updatePlayerPosition, false);
    };

    if (player1Track.className = .active) {

    }

/*this function should identify if the td has a class "active".
when the specific key is pressed, the class is changed on the current active
td to "", the next td tag is changed to class "active"*/


    function updatePlayerPosition(event) {
    if (event.which = 13) {
        player1.className = "active";
        this.previousElementSibling.className = "";  }

};
});