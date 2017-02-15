// console.log("Testing");
function Node(powerDefenseAttack) {
    this.connectedNodes = [];
    this.powerDefenseAttack = powerDefenseAttack;
    this.owner = 0;
}

var nodes = [
		{ connectedNodes: [2, 3],    powerDefenseAttack: 3, owner: 1 },     //Node: 0
		{ connectedNodes: [2, 4],    powerDefenseAttack: 3, owner: null },  //Node: 1
		{ connectedNodes: [0, 1, 3], powerDefenseAttack: 3, owner: null },  //Node: 2
		{ connectedNodes: [0, 2, 4], powerDefenseAttack: 3, owner: null },  //Node: 3
		{ connectedNodes: [1, 3],    powerDefenseAttack: 3, owner: 2 }      //Node: 4
	],

// var nodes = [];


console.log(nodes);;
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



var id = " ";

 $(".node").click(function(){
   id = $(this).attr('id');
   id = parseInt(id[id.length - 1]);
  //  console.log(id);
   firstClickedNode = this.id;
  //  console.log("The firstClickedNode is " + firstClickedNode);
   checkNodesOwnership(nodes[id]);
   checkIfNodeAdjacent();
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

function checkIfNodeAdjacent () {
  //  console.log("Testing id in other function" +  id);

}

function actionNode () {
  }



// function reinforceNode() {
// }


// function attackNode () {
//
// }
