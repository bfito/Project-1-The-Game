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
	];


console.log(nodes);



var id = " ";
var firstClickedNode;

 $(".node").click(function(){
   id = $(this).attr('id');
   id = parseInt(id[id.length - 1]);
  //  console.log('parsedid is '+id);
  if(checkForFirstOrSecondClick() === true){
    firstClickedNode = id;
    console.log("The firstClickedNode is " + "node" + firstClickedNode);
  } else {
    secondClickedNode = id;
    console.log("secondClickedNode is " + "node" + secondClickedNode);
  }
   checkNodesOwnership(nodes[id]);
  //  checkIfNodeAdjacent();
 });

function checkForFirstOrSecondClick() {
  if (firstClickedNode !== undefined) {
    return false;
  }
  else {
    return true;
  }
}

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
  // console.log('testing checkIfNodeAdjacent is' +   firstClickedNode);
  i = firstClickedNode;
  j = i;
  // console.log(i);
  console.log(nodes[i].connectedNodes[0]);
if (nodes[i].connectedNodes[0] === nodes[j].connectedNodes[0]) {
console.log("Exito!");
}
}

function actionNode () {
  }



// function reinforceNode() {
// }


// function attackNode () {
//
// }
