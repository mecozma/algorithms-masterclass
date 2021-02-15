class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        //     Check if there is no root and if not then set the newNode as root.
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value === currentNode.value) {
                    this.count++;
                    return value;
                }
                if (value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        let currentNode = this.root;
        let isTrue = false;
        while (currentNode && !isTrue) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                isTrue = true;
            }
        }
        if (!isTrue) return undefined;
        return currentNode.value;
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(7)
tree.insert(7)
console.log(tree.find(99))
console.log(tree)


  //       10
  //   5       13
  // 2   7   11    16