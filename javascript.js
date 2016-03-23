document.addEventListener('DOMContentLoaded', function() {
  //run the code

//call all the elements I think I need
  var racerTable = document.querySelector('.racer_table');

  var player1Track = document.querySelector('#player1_strip');
  var player2Track = document.querySelector('#player2_strip');
  var playerPosition = document.querySelectorAll('.active');
  var tablePosition = document.querySelectorAll("td");

  var player1 = player1Track.querySelector('td');
  var player2 = player2Track.querySelector('td');

//test

//add a looping counter for td, or should this be <tr>?
   for (var i = 1; i < tablePosition.length; i++) {
    tablePosition[i].addEventListener("keypress", updatePlayerPosition, false);
    };

    if (player1Track.className = .active) {

    }

/*this function should identify if the td has a class "active".
when the specific key is pressed, the class is changed on the current active
td to "", the next td tag is changed to class "active"*/


    function updatePlayerPosition(event) {
    if (event.which === 13) {
        changePosition(player1);
    }

    if (event.which === 97) {
        changePosition(player2);
    }

};
});

    function changePosition(player) {
    if (tablePosition.className = "active") {
    tablePosition.className = "";
    tablePosition.nextElementSibling.className = "active";
}
};