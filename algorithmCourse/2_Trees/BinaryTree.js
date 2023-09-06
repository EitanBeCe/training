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