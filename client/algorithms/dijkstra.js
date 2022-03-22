import { node } from "prop-types";

const dijkstra = (board, startNodeID, destNodeID) => {
  const visitedNodesInOrder = [];
//   console.log(`START: ${startNodeID}`)
  const unvisitedNodes = getAllNodes(board);    
  for (const node of unvisitedNodes) {
      if (node.key === startNodeID) {
        node.distThrough = 0;
        // console.log(`START NODE DIST: ${node.distThrough}`)
      }
  }
  while (!!unvisitedNodes.length) {    
      sortNodesByDistance(unvisitedNodes);  
      while (unvisitedNodes[0].isWall) unvisitedNodes.shift();
      const closestNode = unvisitedNodes.shift();  
    //   console.log(`CLOSEST NODE: ${closestNode.key}, DIST: ${closestNode.distThrough}`)
      closestNode.visited = true;
      visitedNodesInOrder.push(closestNode);
      if (closestNode.key === destNodeID) {
        //   console.log(`FOUND IT: ${closestNode.key}, DISTANCE: ${closestNode.distThrough}`)
          return visitedNodesInOrder; 
      }
      updateUnvisitedNeighbors(closestNode, unvisitedNodes);
  }
}

const getAllNodes = (board) => {
    const nodes = [];
    for (const row of board) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
}


const sortNodesByDistance = (unvisitedNodes) => {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distThrough - nodeB.distThrough);
}

const updateUnvisitedNeighbors = (node, unvisitedNodes) => {
    const unvisitedNeighborIDs = node.neighbors;
    console.log()
      for (let neighborID of unvisitedNeighborIDs) {
          for (let otherNode of unvisitedNodes) {
              if (neighborID === otherNode.key) {
                otherNode.distThrough = Math.min(otherNode.distThrough, node.distThrough + 1);
                otherNode.previousNode = node;
              }
          }
      }
        // console.log(`UPDATED: DISTTHROUGH ${otherNode.distThrough}, PREV-NODE: ${otherNode.previousNode}`)
}

export default dijkstra;