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

    // this.head = {
    //     value: 1,
    //     next: {
    //         value: 2,
    //         next: {
    //             value: 3,
    //             next: {
    //                 value: 4,
    //                 next: {
    //                     value: 5,
    //                     next: null
    //                 }
    //             }
    //         }
    //     }
    // };

    printList() {
        const array = [];
        let currNode = this.head;
        while (currNode !== null) {
            array.push(currNode.value);
            currNode = currNode.next;
        }

        return array;
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

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);

        const leader = this.traverseToIndex(index-1); 
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        // return this.printList();
    }

    remove (index) {
        if (index >= this.length) {
            return;
        }

        const leader = this.traverseToIndex(index-1);
        const deletingNode = leader.next;
        const last = deletingNode.next;
        leader.next = last;

        this.length--;
    }

    reverse () {
        if (!this.head.next) {
            return this.head
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;

            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
    }

    traverseToIndex(index) {
        // check params

        let counter = 0;
        let currentNode = this.head

        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode;
    }
}
    
    let myLinkedList = new LinkedList(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(1);
    myLinkedList.insert(2, 92);
    myLinkedList.insert(3, 93);
    myLinkedList.remove(3)
    myLinkedList.reverse()

    console.log(myLinkedList.printList());