// console.log("Testing");
function Node(powerDefenseAttack) {
    this.connectedNodes = [];
    this.powerDefenseAttack = powerDefenseAttack;
    this.owner = 0;
}

var nodes = [
		{ connectedNodes: [1, 2],    powerDefenseAttack: 0, owner: 1 },     //Node: 0
		{ connectedNodes: [0, 2, 4],    powerDefenseAttack: 3, owner: null },  //Node: 1
		{ connectedNodes: [0, 1, 3], powerDefenseAttack: 8, owner: null },  //Node: 2
		{ connectedNodes: [2, 4], powerDefenseAttack: 5, owner: null },  //Node: 3
		{ connectedNodes: [1, 3],    powerDefenseAttack: 0, owner: 2 }      //Node: 4
	];

updateHtmlPowerDefenseAttack();
ResistanceAttackPowerCounter();

console.log(nodes);
var id = " ";
var firstClickedNode;
var secondClickedNode;

 $(".node").click(function(){
   id = $(this).attr('id');
   id = parseInt(id);
  //  console.log('parsedid is '+id);
  // if (firstClickedNode === (node.owner === null)) {
  //   firstClickedNode = undefined;
  // } else if(checkForFirstOrSecondClick() === true){
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
  console.log(nodes[i],i);

  // console.log(i);
  for (var x = 0; x < nodes[i].connectedNodes.length + 1; x++) {
    console.log("j is : " + j);
    console.log("It is being compared to: " + nodes[i].connectedNodes[x]);
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

var isAnAlly = function () {
  console.log("calling isAnAlly");
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
  var attackResult;
  var updatePowerDefenseAttack;
  console.log(attackResult);
  // nodes[secondClickedNode].powerDefenseAttack = attackResult;
  // console.log(nodes[secondClickedNode].powerDefenseAttack);
    if (isAnAlly() === true) {
      attackResult = nodes[secondClickedNode].powerDefenseAttack + nodes[firstClickedNode].powerDefenseAttack;
      nodes[secondClickedNode].powerDefenseAttack = attackResult;
      nodes[firstClickedNode].powerDefenseAttack = 0;
      console.log("Reinforcements have arrived!");
      return attackResult;

    } else if (isAnAlly() === false) {
      attackResult = nodes[secondClickedNode].powerDefenseAttack - nodes[firstClickedNode].powerDefenseAttack;
      nodes[secondClickedNode].powerDefenseAttack = updatePowerDefenseAttack;

      if (attackResult < 0) {
        updatePowerDefenseAttack = attackResult * -1;
        // console.log(updatePowerDefenseAttack);

// ******************************************************************************************************
// Following commands are to change the css of the  nodes that are taken over.
        if (nodes[secondClickedNode].owner == 1) {
          $('.node-' + secondClickedNode).removeClass("player-1-ring");
          $('.node-' + secondClickedNode).addClass("player-2-ring");
          // This is to change the color of the connection once a node has been taken over.


 } else if (nodes[secondClickedNode].owner == 2) {
          $('.node-' + secondClickedNode).removeClass("player-2-ring");
          $('.node-' + secondClickedNode).addClass("player-1-ring");

} else if (nodes[secondClickedNode].owner === null) {
          $('.node-' + secondClickedNode).removeClass("neutral-ring");

           } if (nodes[firstClickedNode].owner == 1) {
                  $('.node-' + secondClickedNode).addClass("player-1-ring");
      } else if (nodes[firstClickedNode].owner == 2) {
                  $('.node-' + secondClickedNode).addClass("player-2-ring");
                  }
// ******************************************************************************************************


        nodes[secondClickedNode].owner = nodes[firstClickedNode].owner;
        nodes[secondClickedNode].powerDefenseAttack = updatePowerDefenseAttack;
        nodes[firstClickedNode].powerDefenseAttack = 0;
        // updateHtmlPowerDefenseAttack();
        // console.log("Node-"+secondClickedNode+" belongs to node-" + firstClickedNode);
        // return attackResult;

      } else {
        console.log("Node-"+secondClickedNode+" is still Node-" + secondClickedNode);
        nodes[secondClickedNode].powerDefenseAttack = attackResult;
        nodes[firstClickedNode].powerDefenseAttack = 0;

    }
  }
  updateHtmlPowerDefenseAttack();
  firstClickedNode = undefined;
  secondClickedNode = undefined;
  console.log(nodes[secondClickedNode]);
  console.log(nodes[firstClickedNode]);
}

// Counter is the  health and AttackPower
var counter = 0;
function ResistanceAttackPowerCounter() {
  window.setInterval(
  function () {
    for (var x = 0; x < nodes.length; x+=1) {
      var oneNode = nodes[x];
      if (oneNode.owner === 1 || oneNode.owner === 2) {
        oneNode.powerDefenseAttack = oneNode.powerDefenseAttack + 1;
      }
    }
    updateHtmlPowerDefenseAttack();
    // console.log(nodes[0].powerDefenseAttack);
  }, 1000);
}

updateHtmlPowerDefenseAttack();
function updateHtmlPowerDefenseAttack(){
  nodes.forEach(function(node,i){
    document.getElementById("nodePower-"+i).innerHTML = nodes[i].powerDefenseAttack;
  });
}
// Need to add attackResult inside of updateHtmlPowerDefenseAttack() to actually update the powerDefenseAttack and add counter.
