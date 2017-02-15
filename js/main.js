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

 $(".node").click(function(){
   var id = $(this).attr('id');
   id = parseInt(id[id.length - 1]);
  //  console.log(id);
   firstClickedNode = this.id;
  //  console.log("The firstClickedNode is " + firstClickedNode);
   checkNodesOwnership(nodes[id]);
 });

 function checkNodesOwnership (node) {
   if (node.owner == 1) {
    // actionNode();
    console.log("True");
    console.log(firstClickedNode + " is P1's");
  } else if (node.owner == 2) {
    console.log(firstClickedNode + " is P2's");
  } else {    
    console.log("This is a neutral");
  }
}

function actionNode () {
  if (checkNodesOwnership == true) {
    console.log("True");

  }
  // if (checkNodeSelection === true && checkNodesOwnership = nodes[0].owner); {
  //   sendRehiforcements();}
  // else (checkNodeSelection = true) {
  //     attackNode();
  //   }

  }




// function checkNodeConnection() {
//   for (var i = 0; i < nodes.length; i++) {
//     for (var j = 0; j < nodes.connectedNodes.length; j++) {
//       if (nodes.connectedNodes[j] == checkNodesOwnership) {}
//       else {console.log("Is not connected");}
//     }
//   }
// }


// function reinforceNode() {
// }


// function attackNode () {
//
// }
