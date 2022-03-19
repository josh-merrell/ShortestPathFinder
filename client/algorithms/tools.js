export default function defaultState() {
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
        end: '',
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
                visited: false,
                distThrough: Infinity,
                isWall: false,
                neighbors: getNeighbors(r, c)
            }
            row.push(node);
        }
        nodes.push(row)
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