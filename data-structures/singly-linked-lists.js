// Piece of data -val
// Reference to next node -next

class Node {
    //   Class Node definition.
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    //   Class SinglyLinkedList definition.
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        //     The push method add a new node to the end of the list.
        //     Create a new node.
        let pushValue = new Node(val);
        //     If the list is empty - it has no nead.
        if (!this.head) {
            //       Set the head and the tail to the new node.
            this.head = pushValue;
            this.tail = this.head;
        } else {
            //       Else, if the list is not empty, set the .next method on the tail and assign it to the new node.
            this.tail.next = pushValue;
            //       Assign the tail to the new node.
            this.tail = pushValue;
        }
        //     Increment the length of the list.
        this.length++;
        //     Return the list.
        return this;
    }
    pop() {
        //     Pop the last value of the list.
        //     If the length of the list is 0 return undefined.
        if (!this.length) return undefined;
        //       Two pointers to the head and the tail of the list.
        let current = this.head;
        let newTail = current;
        //       Iterate over the nodes.
        while (current.next) {
            //         For each iteration set a newTail and increment the current
            newTail = current;
            current = current.next;
        }
        // console.log("current val", current.val);
        // console.log("newTail val", newTail.val);
        //       Set the tail to the current value;
        this.tail = newTail;
        //       Set the next value to null;
        this.tail.next = null;
        //       Decrement the list's length.
        this.length--;
        //       If the length of the list is 0 set the head and the tail to null.
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        //       Return the popped node.
        return current;
    }
    shift() {
        //     Shift first node of the list.
        //     If no nodes in the list, return undefined
        if (!this.head) return undefined;
        //     Pointer to the head of the list;
        let currentHead = this.head;
        //     Set the head of the list to be the next node.
        this.head = currentHead.next;
        //     Decrement the list's length.
        this.length--;
        // If the length of the list is 0 set the tail to null.
        if (this.length === 0) {
            this.tail = null;
        }
        //     Return the shifted node.
        return currentHead;
    }
    unshift(val) {
        // Unshift/add a value at the beginning of the list.
        //     Create a new node with the value to unshift.
        let newNode = new Node(val);
        //     If the list is empty, make the new node the head and the tail of the list.
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //       Set the next value of the new node to be the curent head of the list.
            newNode.next = this.head;
            //       Set the current head of the list to be the new node.
            this.head = newNode;
        }
        //       Increment the list's length.
        this.length++;
        //     Return the list.
        return this;
    }
    get(index) {
        //     Get the node of the list at the passed index.
        //     If the index is smaller than 0, equal or larger than the length of the list return null;
        if (index < 0 || index >= this.length) return null;
        //     Pointer to the head of the list.
        let unknown = this.head;
        //     Iterate over the list's nodes.
        for (let i = 0; i < index; i++) {
            //       Point the unknown variable to the next value with each iteration.
            unknown = unknown.next;
        }
        //     Return the value at the passed index.
        return unknown;
    }
    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        //     Insert a new node in the list at a speciffic index.
        //     If the index is smaller than 0 and bigger than the length of the list return false.
        if (index < 0 || index > this.length) return false;
        //     If the index is equal with the list's length, push the value at the end of the list.
        if (index === this.length) return !!this.push(value);
        //     If the index is equal with 0, unshift the value at the beginning of the list.
        if (index === 0) return !!this.unshift(value);
        //     Create a new node.
        let newNode = new Node(value);
        //     Declare the previousNode variable and assigne it to the previous node using the .get() method.
        let previousNode = this.get(index - 1);
        //     Declare a variable and assign it to the next of the previous node. The current node?!?
        let temp = previousNode.next;
        //     Link the newNode with the current node.
        previousNode.next = newNode;
        //     Link the newNode with the temp variable. The curent node.
        newNode.next = temp;
        //     Increment the list's length.
        this.length++;
        //     Return true if the node had been added sucessfully.
        return true;
    }
    remove(index) {
        //     Remove a node at the passed index.
        //     If the index in smaller than 0 and bigger than the length of the list return undefined.
        if (index < 0 || index >= this.length) return undefined;
        //     If the index is equal with the length of the list - 1 pop the last value of the list.
        if (index === this.length - 1) return this.pop();
        //     If the index is 0 shift the first node of the list.
        if (index === 0) return this.shift();
        //     Get the previous node calling the .get() method.
        let previousNode = this.get(index - 1);
        //     Assign the current node to the deletedNode variable.
        let removedNode = previousNode.next;
        //     Link the previous node with the deletedNode's next node.
        previousNode.next = removedNode.next;
        //     Decrement the length of the list.
        this.length--;
        //     Return the removed node.
        return removedNode;

    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let nextNode;
        let previousNode = null;
        for (let i = 0; i < this.length; i++) {
            nextNode = node.next;
            node.next = previousNode;
            previousNode = node;
            node = nextNode;
        }
        return this;
    }
}
// ==============================
let list = new SinglyLinkedList();
list.push("head");
list.push(1);
list.push(2);
// console.log(list)
// ==============================
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// list.push("new element");
// console.log(list)
// list.unshift("newHead");



console.log(list.push(3))
console.log(list.push(4))
// console.log(list.remove(0))
// console.log(list.remove(1))
// console.log(list.remove(2))
// console.log(list.remove(3))
// console.log(list.remove(4))
console.log(list)
list.reverse()
console.log(list)