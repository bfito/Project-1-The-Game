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

 $(".node").click(function(){
   var id = $(this).attr('id');
   id = parseInt(id[id.length - 1]);
   console.log(id);
   focusNode = this.id;
   console.log("The focusNode is " + focusNode);
   selectedNode(nodes[id]);
 });

 function selectedNode (node) {
   if (node.owner == 1) {
    // actionNode();
    console.log("True");
    console.log(focusNode + " is P1's");
  } else {
    console.log("False");
  }

}

function actionNode () {
  if (selectedNode == true) {
    console.log("True");

  }
  // if (checkNodeSelection === true && selectedNode = nodes[0].owner); {
  //   sendRehiforcements();}
  // else (checkNodeSelection = true) {
  //     attackNode();
  //   }

  }




// function checkNodeConnection() {
//   for (var i = 0; i < nodes.length; i++) {
//     for (var j = 0; j < nodes.connectedNodes.length; j++) {
//       if (nodes.connectedNodes[j] == selectedNode) {}
//       else {console.log("Is not connected");}
//     }
//   }
// }


// function reinforceNode() {
// }


// function attackNode () {
//
// }
