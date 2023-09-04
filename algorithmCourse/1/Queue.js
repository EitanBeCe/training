// Only with linked list. Unshift Shift in array is O(n). LIFO last in first out

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// With Linked list
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() { // show first
        console.log(this.first);
    }

    enqueue(value) { // add
        const newNode = new Node(value)
        
        if (this.length === 0) {
            this.last = this.first = newNode
            this.length++
            return
        }

        this.last.next = newNode
        this.last = newNode
        this.length++
    }

    dequeue() {
        if (this.length === 0) {
            return
        }
        if (this.length === 1) {
            this.last = null
        }

        this.first = this.first.next
        this.length--
    }
}

const myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue)