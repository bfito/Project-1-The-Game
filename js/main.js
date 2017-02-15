// console.log("Testing");

function Node(powerDefenseAttack) {
    this.connectedNodes = [];
    this.powerDefenseAttack = powerDefenseAttack;
    this.owner = 0;
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
nodes[2].owner = null; // null
nodes[3].owner = null; // null
nodes[4].owner = null; // null

nodes[0].powerDefenseAttack = 20;
nodes[1].powerDefenseAttack = 20;
console.log(nodes);


// function firstNodeSelected () {
//   console.log("hello");
//   // if (nodes[i] === nodes.owner[1]) {
//   //   console.log("selectedNode is: " + selectedNode);
//   //   secondNodeSelect();
//   // } else {console.log("Selected node is not player1");}
// }

var i = 1;
selectedNode = function firstNodeSelected () {
  // var selectedNode;
  // var selectedNode = nodes.owner[2];

  if (nodes[i] == nodes.owner[1]) {
    console.log("selectedNode is: " + selectedNode);
    secondNodeSelect();
  } else {console.log("Selected node is not player1");}
};


//
// function secondNodeSelect () {
//   var selectedNode;
//     checkNodeSelection();
//   if (checkNodeSelection === true && selectedNode = nodes[0].owner); {
//     sendRehiforcements();}
//   else (checkNodeSelection = true) {
//       attackNode();
//     }
//
//   }




function checkNodeConnection() {
// forEach or for to run through each array...
}


// function reinforceNode() {
// }


// function attackNode () {
//
// }
