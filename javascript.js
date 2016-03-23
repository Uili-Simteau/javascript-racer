document.addEventListener('DOMContentLoaded', function() {
  //run the code

//call all the elements I think I need
  var racerTable = document.querySelector('.racer_table');

  var player1Track = document.querySelector('#player1_strip');
  var player2Track = document.querySelector('#player2_strip');
  var playerPosition = document.querySelectorAll('.active');
  var tablePosition = document.querySelectorAll("td");

  var player1 = player1Track.querySelectorAll('td');
  var player2 = player2Track.querySelectorAll('td');



//add a looping counter for table body
   for (var i = 1; i < tablePosition.length; i++) {
    tablePosition[i].addEventListener("keypress", updatePlayerPosition, false);
    };

//depending on which key is pressed, it will update "active" to the next sibling element

    function updatePlayerPosition(event) {
    if (event.which === 13) {
        changePosition(player1);
    }

    if (event.which === 97) {
        changePosition(player2);
    }

};

// this is the change function that fires when called
    function changePosition(player) {
    if (tablePosition.className = "active") {
    tablePosition.className = "";
    tablePosition.nextElementSibling.className = "active";
}
};
});