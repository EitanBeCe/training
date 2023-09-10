class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true) {
                if (value < currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return;
                    }
                    
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return;
                    }

                    currentNode = currentNode.right;
                }
            }
        }
    }

    // made ifelse and while my way, didnt rewrite on his solution
    lookup(value) {
        if (this.root === null) {
            return;
        } 

        let currentNode = this.root;

        while(true) {
            if (currentNode.value === value) {
                return currentNode;
            }

            if (value > currentNode.value) {
                if (currentNode.right === null) {
                    return 'Node not found';
                }

                currentNode = currentNode.right;
            } else {
                if (currentNode.left === null) {
                    return 'Node not found';
                }

                currentNode = currentNode.left;
            }
        }
    }

    remove() {
        if (!this.root) {
            return;
        }

        let currentNode = this.root,
            parentNode = null;

        // To remove we need to go to right child(1), then its left(2) and make it a parent of 1.
        while (currentNode) {
            if (value < currentNode.right) {
                parentNode = currentNode;
                currentNode = parentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = parentNode.right;
            } else if (value === currentNode.value) {
                // We found a Node

                // 1 No right child:
                if (currentNode.right === null) {
                    if (parentNode = null) {
                        // I didn't understand this condition
                        this.root = currentNode.left;
                    } else {
                        // If parent > current, make left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                        // If parent < current, make left child a right child of parent
                        } else if (currentNode.value > currentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                // 2 Right child doesn't have a left child
                } else if (currentNode.right.left === null) {
                    if (parentNode = null) {
                        // I didn't understand this condition
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        // If parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                        // If parent < current, make right child a right child of a parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                // 3 Right child that has left child
                } else {
                    
                }
            }
        }

    }
}

const tree = new BinarySearchTree(); 
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.lookup(170);
console.log(tree.lookup(9));
console.log(JSON.stringify(traverse(tree.root)));

//           9
//     4          20
//   1   6     15    170

function traverse(node) {
    const tree = {value: node.value};

    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
    
}