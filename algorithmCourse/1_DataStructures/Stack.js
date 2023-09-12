// Stack as a browser history. Action with last element only. Using array, because push is O(1). LIFO last in first out. Like plates in top of one another.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// With Linked list
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() { // To see top element
        console.log(this.top);
    }

    push(value) { // Add to the top of the stack (next: null have to be on bottom)
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = this.bottom = newNode;
            this.length++;
            return;
        }

        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
        this.length++
    }

    pop() { // Remove from top
        if (this.length === 0) { // || (!this.top) - same condition
            return;
        }

        if (this.length === 1) { // || (this.top === this.bottom)
            this.bottom = null;
            this.length--;
            return;
        }

        this.top = this.top.next;
        this.length--;
    }
}


// With Array
class StackArr {
    constructor() {
        this.array = [];
    }

    peek() { // To see top element
        console.log(this.array[this.array.length-1]);
    }

    push(value) { // Add to the top of the stack (next: null have to be on bottom)
        this.array.push(value)
    }

    pop() { // Remove from top
        this.array.pop()
    }
}

// const myStack = new Stack();
const myStack = new StackArr()
myStack.push(1);
myStack.push(2);
myStack.push(3);
// myStack.peek();
myStack.pop()
console.log(myStack);