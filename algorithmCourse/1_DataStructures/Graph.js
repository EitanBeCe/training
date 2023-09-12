// // Edge list. Just recording all connections one by one
// const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// // Adjacent list. Graph item on index 0 is connected to 2, 1 to [2, 3] etc
// const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// // Adjacent matrix. '1' == true, has connection
// const graph3 = [
//     [0, 0, 1, 0], // node 0 has connection to 2
//     [0, 0, 1, 1], // 1 to 2 and 3
//     [0, 1, 0, 1],
//     [0, 1, 1, 0]
// ];

// // same
// const graph4 = {
//     0: [0, 0, 1, 0], // node 0 has connection to 2
//     1: [0, 0, 1, 1], // 1 to 2 and 3
//     2: [0, 1, 0, 1],
//     3: [0, 1, 1, 0]
// };



class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    // Add node
    addVertex(node) {
        // if (this.adjacentList[node] !== undefined) {
        //     return
        // }

        // Add key
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        // Undirected Graph
        // duplicate node
        // if (this.adjacentList[node1] === undefined) {
        //     return
        // }

        // this.addVertex(node2)
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1)
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;

            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }

            console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');
myGraph.showConnections();
  //Answer:
  // 0-->1 2 
  // 1-->3 2 0 
  // 2-->4 1 0 
  // 3-->1 4 
  // 4-->3 2 5 
  // 5-->4 6 
  // 6-->5