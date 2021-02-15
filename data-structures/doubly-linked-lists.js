class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        //     Add a new node at the end of the list.
        let newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let poppedNode = this.tail;
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous = null
        }
        this.length--;
        return poppedNode

    }
    shift() {
        let shiftedNode = this.head;
        if (this.head === null) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next
            this.head.previous = null;
            shiftedNode.next = null
        }
        this.length--;
        return shiftedNode;
    }
    unshift(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index < this.length / 2) {
            console.log("Iterating from the head.");
            let count = 0;
            let current = this.head;
            while (count != index) {
                count++;
                current = current.next;
            }
            return current;
        } else {
            console.log("Iterating from the tail.");
            let count = this.length - 1;
            let current = this.tail;
            while (count != index) {
                count--;
                current = current.previous;
            }
            return current;
        }
    }
    set(index, value) {
        let replacedNode = this.get(index);
        if (replacedNode) {
            replacedNode.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        let newNode = new Node(value);
        if (index < 0 || index >= this.length) return false;
        if (index == 0) return !!this.unshift(value);
        if (index == this.length) return !!this.push(value);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        afterNode.previous = newNode;
        newNode.previous = beforeNode;
        newNode.next = afterNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop()
        let removedNode = this.get(index);
        let beforeNode = removedNode.previous;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.previous = beforeNode;
        removedNode.next = null;
        removedNode.previous = null;
        this.length--;
        return removedNode;
    }
    reverse() {
        if (this.length < 0) return undefined;
        if (this.length === 1) return this;
        let currentNode = this.head;
        let previousNode = null;
        let nextNode;
        this.head = this.tail;
        this.tail = currentNode;

        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            currentNode.previous = nextNode;
            previousNode = currentNode;
            currentNode = nextNode;

        }
        return this;
    }
}


let test3 = new DoublyLinkedList()
test3.push(new Node("first"))
test3.push(new Node("second"))
test3.push(new Node("third"))
test3.push(new Node("fourth"))
test3.push(new Node("fifth"))
console.log(test3)
// console.log("shift",test3.shift())
// console.log(test3.set(9, "replaced"))

console.log(test3.tail.value)
console.log(test3.reverse())
console.log(test3.tail.value)