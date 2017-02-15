// var cellHealth
// var cellsPosition
// var oneVariableToControlThemAll;

$(document).ready(function () {
//   var player1 = prompt('Enter name for Player #1');
//   var player2 = prompt('Enter name for Player #2');
//   myGlobalConnectGame = new ConnectFour(player1, player2);

currentGame = new Game();
// currentGame.takeOver(0,0,1,0);
// currentGame.takeOver(0,1,0,0);
// console.log(currentGame);

var targetNode;
var attackerNode;

// function neighborsMath(row, col) {}
// this.board.neighbors = [
//     [row-1],[1],
//     [0], +1],
//     [+1,+1],
//     [+1, 0],
//     [+1,-1],
//     [0, +1],
//     [-1,+1],
//     [-1,0]
//   ];
//
// this.board.prototype.every()
// +
//
//
//
//
// neighborsMath.isNeighbor = function(x, y) {
//   if (node.this.playerControllingNode = 1) {
//
//   } else if (node.this.playerControllingNode = 2) {
//
//   } else
//   // var neighbors = y % 2 == 0 ?this.board.neighbors;
//   // for (var i = 0; i < neighbors.length; i++) {
//   //   if (x + neighbors[i][0] == x2 && y + neighbors[i][1] == y2) {
//       return true
//     }
//   }
//   return false
// };
//






// ********************************************************
// COUNTER WHICH IS THE AMOUNT OF Resistance OR AttackPower
// var counter = 0;
// function ResistanceAttackPowerCounter() {
//   window.setInterval(
//   function () {
//       counter = counter + 1;
//       document.getElementById("cell-1").innerHTML =  counter;
//   }, 1000);
//   console.log(counter);
// }
// console.log(counter)

// WHEN CLICKING ANOTHER NODE A "LINK" IS MADE. IN LINK FIRST NODE NEEDS TO SEND COUNTER TO SECOND NODE.
// IF NODE IS NEUTRAL COUNTER NEEDS TO TAKE DOWN DEFENSE. NEUTRAL NODE DOES NOT HAVE COUNTER JUST DEFENSE.
// IF NODE BELONGS TO PLAYER FIRST NODE ADDS TO PLAYER'S SECOND NODE, SECOND NODE HAVING ITS OWN COUNTER + FIRST NODE COUNTER
// IF NODE IS ADVERSARY'S, ADVERSARY'S NODE'S DEFENSE IS ADVERSARY'S COUNTER...


// ****************************************************************
// SELECTING & TOGGLING BACKGROUND COLOR, ONLY TWO CELLS AT TIME.
$('.cell').click(function(e){
    var $et = $(e.target);
    // <div id="cell-4" class="cell button" data-position="1,1"></div>
    //                                               |
    //                          ----------------------
    //                          |
    // console.log(e.target)
    // console.log($et.data('position'))
    if (attackerNode !== null) {
      targetNode = $et.data('position');
      // takeOver();
      // Call takeOver
      // Reset attacker & target
      // console.log(takeOver.owner);
      console.log(attackerNode);
      
    } else {
      attackerNode = $et.data('position');

      console.log(attackerNode);
    }

    // if ($et.hasClass('cell-player-1')) {
    //     $et.removeClass('cell-player-1'); // NEEDS TO REMOVE NOT COMPLETE PLAYER CLASS BUT ACTIVE. ONLY ONE NODE CAN BE SELECTED AND ACTIVELY USED
    //     // updateCurrentPlayer();
    // } else {
    //     if ($('.cell-player-1').length < 2) {
    //         $et.addClass('cell-player-1');
            // ResistanceAttackPowerCounter();
    //     }
    // }
});

// SELECTING NEXT NODE. BASICALLY WILL SEND "NUMBERS" TO OTHER NODE REGARDLESS OF OWNERSHIP. SIMPLY WILL ADD OR SUBSTRACT...
// firstPick = "";//lo que haga click primero
// secondPick = "";//lo que haga click dps
// connection = 0;

// CHECK IF ADJACENT. THIS IS MEMEMORY GAME CODE. NEED TO checkIfAdjacent
// function checkIfAdjacent(firstPick, secondPick){
  // // document.getElementById('clicked').text = clickCounter;
  // if (firstPick === secondPick){
  //   var clicked = document.getElementsByClassName('clicked');
  //   clicked[0].className = "pic winner";
  //   clicked[0].className = "pic winner";
  //   paired++;
  //   document.getElementById('discovered').innerHTML = "Discovered: "+paired;
  // } else {
  //   var timeoutId = setTimeout(function () {
  //     turnCardsAgain(firstPick, secondPick);
  //   }, 500);
  // }
});
