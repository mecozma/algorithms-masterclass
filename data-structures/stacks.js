// Array implementation 
// let stack = []
// stack.push("Google")
// stack.push("Instagram")
// stack.push("Youtube")
// console.log(stack)
// console.log(stack.pop())

// Stack implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
            this.size++;
        } else {
            let currentNode = this.first;
            this.first = newNode;
            this.first.next = currentNode;
            this.size++;
        }
        return this.size;
    }
    pop() {
        if (!this.first) return null;
        var poppedNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.side--;
        return poppedNode.value;

    }
}

let newStack = new Stack();
newStack.push(1)
newStack.push(2)
newStack.push(3)
console.log(newStack)
console.log(newStack.pop())
console.log(newStack.pop())
console.log(newStack.pop())
