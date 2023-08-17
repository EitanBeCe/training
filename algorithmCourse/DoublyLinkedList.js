// Dan said that it's a tree, not a linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
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
        //     next: null,
        //     prev: null
        // }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = this.tail.next;

        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        this.length++;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);

        const leader = this.traverseToIndex(index-1); 
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;
    }

    remove (index) {
        if (index >= this.length) {
            return;
        }

        // Check if index == length need to make tail--

        const leader = this.traverseToIndex(index-1);
        const deletingNode = leader.next;
        const last = deletingNode.next;
        last.prev = leader;
        leader.next = last;

        this.length--;
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
    
    let myLinkedList = new DoublyLinkedList(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(1);
    myLinkedList.insert(2, 92);
    myLinkedList.insert(3, 93);
    myLinkedList.remove(3)

    console.log(myLinkedList.printList());