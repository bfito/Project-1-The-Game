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



function firstNodeSelected () {
  var selectedNode;
  if (selectedNode === nodes.owner[1]) {
    secondNodeSelect();
  } else {"NOTE:Nothing happens"}
}



function secondNodeSelect () {
  var selectedNode;
    checkNodeSelection();
  if (checkNodeSelection = true && selectedNode = player1.node) {
    sendRehiforcements();}
  else (checkNodeSelection = true) {
      attackNode();
    }

  }




function checkNodeConnection() {

}


// function reinforceNode() {
// }


// function attackNode () {
//
// }
