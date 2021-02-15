// Array implementation.
//   Not ideal as it needs to reindex everything. Also unshift() and pop() pair can be used.
// let q = [];
// q.push(1);
// q.push(2);
// console.log(q);
// console.log(q.shift());

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        let newNode = new Node(value);
        let temp = this.first;
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
            this.size++;
        } else {
            this.last.next = newNode;
            this.last = newNode;
            this.size++;
        }
        return this.size;
    }
    dequeue() {
        if (!this.first) return null;
        let dequeuedNode = this.first;
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.size--;
        return dequeuedNode.value;
    }
}

let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue)
console.log(queue.dequeue())
console.log(queue)