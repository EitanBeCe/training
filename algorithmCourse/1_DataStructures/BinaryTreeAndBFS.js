class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//           9
//     4          20
//   1   6     15    170

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

    remove(value) {
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
                    if (parentNode === null) {
                        // I didn't understand this condition
                        this.root = currentNode.left;
                    } else {
                        // If parent > current, make left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                        // If parent < current, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                // 2 Right child doesn't have a left child
                } else if (currentNode.right.left === null) {
                    if (parentNode === null) {
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
                    // Find right's child left most child
                    let leftmost = currentNode.right.left,
                        leftmostParent = currentNode.right;

                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }

                return true
            }
        }

    }

    // Need to recieve queue with 9 4 20 1 6 15 170
    breadthFirstSearch() {
        let currentNode = this.root,
            list = [],
            queue = [];

        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            console.log(currentNode.value);
            list.push(currentNode.value);
            
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return list;
    }

    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length) {
            return list;
        }

        let currentNode = queue.shift()
        list.push(currentNode.value)

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        return this.breadthFirstSearchRecursive(queue, list);
    }

    // depthFirstSearch() {
        // Types:
        // 1 InOrder - 1 4 6 9 15 20 170
        // 2 Preorder - 9 4 1 6 20 15 170  (useful to recreate a tree)
        // 3 PostOrder - 1 6 4 15 170 20 9
    // }

    DPSInorder() {
        return traverseInorder(this.root, []);
    }

    DPSPostorder() {
        return traversePostorder(this.root, []);
    }

    DPSPreorder() {
        return traversePreorder(this.root, []);
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

console.log(
    // tree.breadthFirstSearch()
    tree.breadthFirstSearchRecursive([tree.root], [])
);

// tree.remove(170); // 170 didnt work?
// tree.lookup(170); 
// console.log(tree.lookup(170));
// console.log(JSON.stringify(traverse(tree.root)));

//           9
//     4          20
//   1   6     15    170

function traverse(node) {
    const tree = {value: node.value};

    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
    
}