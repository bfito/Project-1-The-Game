// console.log("Testing");

// function Node(row, column, number, owner) {
//     this.row = row;
//     this.col = column;
//     this.number = number;    // Defense/Firewall
//     this.owner = owner;
//
//     // this.counter = counter;
//     // IF NODE IS NOT OCCUPIED = 0
//     // IF NODE IS OCCUPIED BY PLAYER1 = 1
//     // IF NODE IS OCCUPIED BY PLAYER2 = 2
// }

function Node(firePower) {
    this.connectedNodes = [];
    this.firePower = firePower;
    this.owner = 0;

    // this.counter = counter;
    // IF NODE IS NOT OCCUPIED = 0
    // IF NODE IS OCCUPIED BY PLAYER1 = 1
    // IF NODE IS OCCUPIED BY PLAYER2 = 2
}

var nodes = [];

function Game (player1Name, player2Name) {
}

console.log(nodes);
for (var i = 0; i < 5; i += 1) {
  var node = new Node (3, 0);
  nodes.push(node);
}

nodes[0].connectedNodes = [2, 3];
nodes[1].connectedNodes = [2, 4];
nodes[2].connectedNodes = [0, 1, 3];
nodes[3].connectedNodes = [0, 2, 4];
nodes[4].connectedNodes = [1, 3];

nodes[0].owner = 1; // player1
nodes[1].owner = 2; // player2

nodes[0].firePower = 20;
nodes[1].firePower = 20;
console.log(nodes);

// this.board = [
//   [ neutral1, neutral2],
//   [ player1, null]
// ];


// }


Game.prototype.takeOver = function (targetRow, targetCol, attackerRow, attackerCol) {
  var targetNode = this.board[targetRow][targetCol];
  var attackerNode = this.board[attackerRow][attackerCol];

  if (targetNode.owner === null) {
// ATTACK CODE
    targetNode.number =  attackerNode.number - targetNode.number;
    attackerNode.number = 0;
    targetNode.owner = attackerNode.owner;
  } else if (theNode.owner === 1) {
    // Player1's node
  } else {
    // Player2's node
  }
};

function Attack () {

}

// this.player1 = player1Name;
// this.player2 = player2Name;
// this.winner = null;
//
//   // 50/50(ish) chance for either player to start
//   if (Math.random() < 0.5) {
//     this.currentPlayer = this.player1;
//     } else {
//     this.currentPlayer = this.player2;
//   }
// }

// ************************************************************
// WHERE PLAYER STARTS. WILL BE FIXED FOR NOW.CONNECTFOUR CODE.
// var playerPositionFound = this.board[x][y];


// for (var i = (this.board.length - 1); i >= 0; i -= 1) {
//   if (this.board[i][columnNumber] === null) {
//     playerPositionFound = i;
//     break;
//   }
// }
//
// if (this.currentPlayer === this.player1) {
//   this.board[playerPositionFound][columnNumber] = 1;
//   this.currentPlayer = this.player2;
// } else {
//   this.board[playerPositionFound][columnNumber] = 2;
//   this.currentPlayer = this.player1;
// }
// *****************************************************

// "OWNERSHIP OF NODE"
// function OwnershipOfNode () {
//   if (Node.owner )
// }
