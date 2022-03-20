export const defaultState = () => {
    return {
        gameover: false,
        placeWalls: false,
        placeStart: false,
        placeDest: false,
        distance: 0,
        grid: gridDefault(),
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

export const gridUpdate = (nodeID, changer, currentNode, existingNodes) => {
   const grid = {
       board: boardUpdate(nodeID, changer, currentNode, existingNodes),
       start: '',
       dest: '',
   }
   return grid;
}

const boardDefault = () => {
    const rows = 20
    const cols = 20
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
                neighbors: getNeighbors(r, c),
                isStart: false,
                isDest: false,
            }
            row.push(node);
        }
        nodes.push(row)
    }
    return nodes;
}

export const boardUpdate = (nodeID, changer, currentNode, existingNodes) => {
    let nodes = existingNodes;
    for (let row of nodes) {
        for (let i = 0; i < row.length; i++) {
            let nodeObj = row[i];
            if (nodeObj.key === nodeID) {
              const changeProp = Object.keys(changer)[0];
              let node = currentNode;
              node[changeProp] = changer[changeProp];
              console.log(`AFTER UPDATE, NODE PROP: ${node[changeProp]}`)
              row.splice(i, 1, node);
            }
        }
    }
    return nodes;    
}



const getNeighbors = (nodeRow, nodeCol) => {
    const neighbors = [];
    if (nodeRow - 1 > 0) {
        for (let c = nodeCol - 1; c <= nodeCol + 1; c++) {
            if (c > 0 && c <= 20) {
                // neighbors.push({r: nodeRow-1, c: c});
                neighbors.push(`${nodeRow-1}-${c}`)
            }
        }
    }
    if (nodeRow + 1 <= 20) {
        for (let c = nodeCol - 1; c <= nodeCol + 1; c++) {
            if (c > 0 && c <= 20) {
                // neighbors.push({r: nodeRow+1, c: c});
                neighbors.push(`${nodeRow + 1}-${c}`)
            }
        }

    }
    // if (nodeCol - 1 > 0) neighbors.push({r: nodeRow, c: nodeCol - 1})
    if (nodeCol - 1 > 0) neighbors.push(`${nodeRow}-${nodeCol-1}`)
    // if (nodeCol + 1 <= 20) neighbors.push({r: nodeRow, c: nodeCol + 1})
    if (nodeCol + 1 <= 20) neighbors.push(`${nodeRow}-${nodeCol+1}`)
    return neighbors
}