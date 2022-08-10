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

function dfs(node) {
  const res = [];

  const traverseChildren = (n) => {
    res.push(n.value);
    if (!n.children.length) return;

    for (let i = 0; i < n.children.length; i++) {
      traverseChildren(n.children[i]);
    }
  }

  traverseChildren(node);
  return res;
};


let root = new Node(1);
let rootChild1 = root.addChild(2);
let rootChild2 = root.addChild(3);
let leaf1 = rootChild1.addChild(4);
let leaf2 = rootChild1.addChild(5);
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

leaf1.addChild(6);
rootChild2.addChild(7);
output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]