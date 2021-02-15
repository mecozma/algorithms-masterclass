// Queue implementation.

// The Node class.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//The Queue class.
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // The enqueue method will ad a new node behind the existing node(s).
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.last;
    }
    // The dequeue will remove the first node in the queue.
    dequeue() {
        let firstNode = this.first;
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return firstNode.value;
    }
}

//q = new Queue()
//q.enqueue(1)
//q.enqueue(2)
//q.enqueue(3)
//q.enqueue(4)
//q.enqueue(5)
//console.log(q.dequeue())
//console.log(q)

// The Three implementation.
// Class TreeNode creates a new node.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//BynarySearchTree class definition.
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //  The insert method inserts a new node to the tree.
    insert(value) {
        let newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (value == current.value) undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS() {
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        var data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

//let tree = new BinarySearchTree()
//tree.insert(10)
//tree.insert(5)
//tree.insert(13)
//tree.insert(2)
//tree.insert(7)
//tree.insert(11)
//tree.insert(16)
//console.log("tree",tree)
//console.log("finf", tree.find(5))


//      10 
//   5     13
// 2  7  11  16


//BFS implementation starts here
let bfsTree = new BinarySearchTree();

bfsTree.insert(10)
bfsTree.insert(6)
bfsTree.insert(3)
bfsTree.insert(8)
bfsTree.insert(15)
bfsTree.insert(20)
console.log("Breath First Search", bfsTree.BFS())
console.log("Deep first Search PreOrder", bfsTree.DFSPreOrder())
  //      10
  //   6      15
  // 3   8      20

