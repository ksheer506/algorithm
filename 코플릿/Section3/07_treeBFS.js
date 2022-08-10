class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        const newChild = new Node(value);
        this.children.push(newChild);

        return newChild
    }
}

function bfs(node) {
    const res = [node.value];

    const traverseChildren = (nArr) => {
        if (nArr.length < 1) return;

        const children = [];

        for (let i = 0; i < nArr.length; i++) {
            children.push(...nArr[i].children);
        }
        for (let i = 0; i < children.length; i++) {
            res.push(children[i].value);
        }
        traverseChildren(children);
    }
    traverseChildren([node]);

    return res;
}

let bfsAns = function (node) {
    let queue = [node];
    const res = [];

    while (queue.length > 0) {
        const head = queue[0];
        queue = queue.slice(1);

        res.push(head.value);

        head.children.forEach((child) => queue.push(child));
    }

    return res;
};
/* 
1
2          3
4  5       7
6 
*/

let root = new Node(1);
let rootChild1 = root.addChild(2);
let rootChild2 = root.addChild(3);
let leaf1 = rootChild1.addChild(4);
let leaf2 = rootChild1.addChild(5);
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(6);
root.addChild(7);
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]