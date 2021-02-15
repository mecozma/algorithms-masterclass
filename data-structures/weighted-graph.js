class WeightedGraph {
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

    addEdge(vertex1, vertex2, weight) {
        // if (!(vertex1 in this.adjacencyList[vertex2]) || !(vertex2 in this.adjacencyList[vertex1])) {
        //   return undefined;
        // }
        this.adjacencyList[vertex1].push({ node: vertex2, weight }); // Object property value shorthand ES6
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
}

let graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("E", "D", 3)
graph.addEdge("E", "F", 1)
graph.addEdge("F", "D", 1)
console.log(graph.adjacencyList)