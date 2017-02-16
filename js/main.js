// console.log("Testing");
function Node(powerDefenseAttack) {
    this.connectedNodes = [];
    this.powerDefenseAttack = powerDefenseAttack;
    this.owner = 0;
}

var nodes = [
		{ connectedNodes: [1, 2],    powerDefenseAttack: 20, owner: 1 },     //Node: 0
		{ connectedNodes: [0, 2, 4],    powerDefenseAttack: 20, owner: null },  //Node: 1
		{ connectedNodes: [0, 1, 3], powerDefenseAttack: 3, owner: null },  //Node: 2
		{ connectedNodes: [2, 4], powerDefenseAttack: 3, owner: null },  //Node: 3
		{ connectedNodes: [1, 3],    powerDefenseAttack: 3, owner: 2 }      //Node: 4
	];

//   document.getElementById("nodePower-0").innerHTML = nodes[0].powerDefenseAttack;
//   document.getElementById("nodePower-1").innerHTML = nodes[1].powerDefenseAttack;
//   document.getElementById("nodePower-2").innerHTML = nodes[2].powerDefenseAttack;
//   document.getElementById("nodePower-3").innerHTML = nodes[3].powerDefenseAttack;
//   document.getElementById("nodePower-4").innerHTML = nodes[4].powerDefenseAttack;
//
//   var paragraph = document.getElementById('paragraph');
// // http://learn.ironhack.com/#/learning_unit/749
//   contentDiv.setAttribute('nodePower-0', 'info-paragraph');

console.log(nodes);



var id = " ";
var firstClickedNode;
var secondClickedNode;

 $(".node").click(function(){
   id = $(this).attr('id');
   id = parseInt(id);
  //  console.log('parsedid is '+id);
  if(checkForFirstOrSecondClick() === true){
    firstClickedNode = id;
    console.log("first clicked node is: " + firstClickedNode);
    console.log("The firstClickedNode is " + "node" + firstClickedNode);
  } else {
    secondClickedNode = id;

    if (checkIfNodeAdjacent() === true) {
      console.log("secondClickedNode is " + "node" + secondClickedNode);
      actionNode();
      firstClickedNode = undefined;
    } else {
      firstClickedNode = id;
    }
    secondClickedNode = undefined;
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
  var i = firstClickedNode;
  var j = secondClickedNode;
  console.log(nodes[i].connectedNodes, j);

  // console.log(i);
  for (var x = 0; x < nodes[i].connectedNodes.length - 1; x++) {
    if (nodes[i].connectedNodes[x] === j) {
      console.log("Node-"+ i + " is adjacent to " + "Node-" + j);
      return true;
    } else {
      console.log("Node-"+ i + " is not adjacent to " + "Node-" + j);
    }
  }
  // console.log('Node-'+i+' is connected to ' + nodes[i].connectedNodes[0] + ' & ' + nodes[i].connectedNodes[1]);
  // console.log('second Clicked Node is node-' + j + 'which is connected to node' nodes[j].connectedNodes[0] );
  // console.log("Exito!");

  return false;
  // Return false was breaking the the loop and not getting go through the whole array. We placed the return false out of the loop but it still in the function.
}

var isNodeAlly = function () {
  console.log("calling isNodeAlly");
  if (  nodes[firstClickedNode].owner === nodes[secondClickedNode].owner) {
    console.log(firstClickedNode.owner + " " + secondClickedNode.owner);
    return true;
    // true if second clicked node belongs to same owner
  } else {
    return false;
    // false if second node is neutral or enemy

  }
};

function actionNode () {
  // console.log(secondClickedNode);
  console.log(nodes[secondClickedNode]);
  console.log(nodes[firstClickedNode]);
  // console.log(nodes[secondClickedNode].powerDefenseAttack);
  // console.log("Node-"+secondClickedNode+" has this much power "+nodes[secondClickedNode].powerDefenseAttack);
  var attackResult = nodes[secondClickedNode].powerDefenseAttack - nodes[firstClickedNode].powerDefenseAttack;
  console.log(attackResult);
  // nodes[secondClickedNode].powerDefenseAttack = attackResult;
  // console.log(nodes[secondClickedNode].powerDefenseAttack);


    if (isNodeAlly() === true) {
      //
      // var attackResult;
      // var updatePowerDefenseAttack;
      console.log("Reinforcements have arrived!");
      return attackResult;

    } else if (isNodeAlly() === false) {
      if (attackResult < 0) {
        updatePowerDefenseAttack = attackResult * -1;
        // console.log(updatePowerDefenseAttack);
        nodes[secondClickedNode].owner = nodes[firstClickedNode].owner;
        nodes[secondClickedNode].powerDefenseAttack = updatePowerDefenseAttack;
        nodes[firstClickedNode].powerDefenseAttack = 0;

        console.log("Node-"+secondClickedNode+" belongs to node-" + firstClickedNode);
        // return attackResult;

      } else {
        console.log("Node-"+secondClickedNode+" is still Node-" + secondClickedNode);
        nodes[secondClickedNode].powerDefenseAttack = attackResult;
        nodes[firstClickedNode].powerDefenseAttack = 0;
    }
  }
  console.log(nodes[secondClickedNode]);
  console.log(nodes[firstClickedNode]);
}



function drawLine (firstNode, secondNode) {
  console.log(firstNode, secondNode);
  var pos1 = $('#node' + firstNode).position();
  var pos2 = $('#node' + secondNode).position();
  var lineId = 'line' + firstNode + '-' + secondNode;

  $('#' + lineId)
    .attr('x1', pos1.left + 40)
    .attr('y1', pos1.top + 40)
    .attr('x2', pos2.left + 40)
    .attr('y2', pos2.top + 40);
}

drawLine(4, 1);
drawLine(4, 2);
drawLine(2, 3);
