class MaxBinaryHeap {
    constructor() {
        //this.values = [41,39,33,18,27,12];
        this.values = [55, 39, 41, 18, 27, 12, 33]
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        console.log(this.values);
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    extractMax() {
        let maxValue = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return maxValue;
    }
    sinkDown() {
        let index = 0;
        let length = this.values.length;
        let element = this.values[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
                if (rightChildIndex < length) {
                    rightChild = this.values[rightChildIndex];
                    if (
                        (swap === null && righChild > element) ||
                        (swap !== null && rightChild > leftChild)
                    ) {
                        swap = rightChildIndex;
                    }
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
// heap.insert(55)
// heap.insert(8)
// heap.insert(100)
console.log(heap.extractMax())
console.log(heap.values)