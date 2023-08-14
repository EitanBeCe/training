// Dan said that it's a tree, not a linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        // const newNode = {
        //     value,
        //     next: null
        // }

        this.tail.next = newNode;
        this.tail = this.tail.next;

        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }
}
    
    let myLinkedList = new LinkedList(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(1);
    console.log(myLinkedList);
    console.log(myLinkedList.head.next); 