export const defaultState = () => {
    return {
        gameover: false,
        isRunning: false,
        placeWalls: false,
        placeStart: false,
        placeDest: false,
        distance: 0,
        mouseIsPressed: false,
        grid: gridDefault(),
        resultArr: [],
        storedMaps: [],
    }
}

const gridDefault = () => {
    const grid = {
        board: boardDefault(),
        start: '',
        dest: '',
    }
    return grid;
}

export const gridUpdate = (nodeID, changer, currentNode, existingGridState) => {
   let newStart;
   let newDest;
   if (Object.keys(changer)[0] === 'isStart') newStart = currentNode.key;
   if (Object.keys(changer)[0] === 'isDest') newDest = currentNode.key;
   const grid = {
       board: boardUpdate(nodeID, changer, currentNode, existingGridState),
       start: newStart ? newStart : existingGridState.start,
       dest: newDest ? newDest : existingGridState.dest,
   }
   return grid;
}

const boardDefault = () => {
    const rows = 18
    const cols = 18
    const nodes = []
    for (let r = 1; r <= rows; r++) {
        const row = []
        for (let c = 1; c <= cols; c++) {
            const node = {
                r: r,
                c: c,
                key: `${r}-${c}`,
                visited: false,
                distThrough: Infinity,
                isWall: false,
                previousNode: null,
                isStart: false,
                isDest: false,
                isVisited: false,
                isInPath: false,
                neighbors: getNeighbors(r, c),
            }
            row.push(node);
        }
        nodes.push(row)
    }
    return nodes;
}

export const boardUpdate = (nodeID, changer, currentNode, existingGridState) => {
    let nodes = existingGridState.board;
    for (let row of nodes) {
        for (let i = 0; i < row.length; i++) {
            let nodeObj = row[i];
            if (nodeObj.key === nodeID) {
              const changeProp = Object.keys(changer)[0];
              let node = currentNode;
              node[changeProp] = changer[changeProp];
              row.splice(i, 1, node);
            }
        }
    }
    return nodes;    
}


const getNeighbors = (nodeRow, nodeCol) => {
    const neighbors = [];
    if (nodeRow - 1 > 0) neighbors.push(`${nodeRow-1}-${nodeCol}`);
    if (nodeRow + 1 <= 18) neighbors.push(`${nodeRow + 1}-${nodeCol}`)
    if (nodeCol - 1 > 0) neighbors.push(`${nodeRow}-${nodeCol-1}`)
    if (nodeCol + 1 <= 18) neighbors.push(`${nodeRow}-${nodeCol+1}`)
    return neighbors
}