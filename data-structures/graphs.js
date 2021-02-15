class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            console.log(`The vertex "${vertex}" has been added.`)
        } else {
            console.log("The vertex already exists!")
        }
        return this.adjacencyList;
    }

    addEdge(vertex1, vertex2) {
        // if (!(vertex1 in this.adjacencyList[vertex2]) || !(vertex2 in this.adjacencyList[vertex1])) {
        //   return undefined;
        // }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        // if (!(vertex1 in this.adjacencyList) || !(vertex2 in this.adjacencyList)) {
        //   return undefined;
        // }
        this.adjacencyList[vertex1] = this.this.adjacencyList[vertex1].filter(v => v != vertex2);
        this.adjacencyList[vertex2] = this.this.adjacencyList[vertex2].filter(v => v != vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }

    DFTRecursive(start) {
        let result = [];
        let visitedVertices = {};
        let adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex) return null;
            visitedVertices[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visitedVertices[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);
        return result;
    }

    DFTIterative(start) {
        let stack = [];
        let result = [];
        let visitedVertices = {};
        let currentVertex;
        stack.push(start);
        visitedVertices[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visitedVertices[neighbor]) {
                    visitedVertices[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    breathFirst(start) {
        let currentVertix;
        let queue = [];
        queue.push(start);
        let visitedVertices = {};
        let result = [];
        visitedVertices[start] = true;
        while (queue.length) {
            currentVertix = queue.shift();
            result.push(currentVertix);
            this.adjacencyList[currentVertix].forEach(neighbor => {
                if (!visitedVertices[neighbor]) {
                    visitedVertices[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
console.log(graph)
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
console.log(graph)
console.log(graph.DFTRecursive("A"))
console.log(graph.DFTIterative("A"))
console.log(graph.breathFirst("A"))