function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;

  this.countAllNodes = countAllNodes;
  this.countAllEdges = countAllEdges;

  this.min = min;
  this.max = max;
}

function insert(data) {
  var n = new Node(data, null, null);
  // root가 없을 때, 자신이 root가 된다.
  if (this.root === null) {
    this.root = n;
  } else {
    // root가 있기 때문에,
    // 어느 위치에 Node를 삽입해야할 지 결정해야한다.

    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (!(node === null)) {
    inOrder(node.left);
    console.log(`${node.show()} `);
    inOrder(node.right);
  }
}

function countAllNodes() {
  var counter = 0;
  var current = this.root;
  function inOrder(current) {
    if (!(current === null)) {
      counter++;
      inOrder(current.left);
      inOrder(current.right);
    }
  }
  inOrder(current);
  return counter;
}

function countAllEdges() {
  var counter = 0;
  var current = this.root;
  function inOrder(current) {
    if (!(current === null)) {
      if (current.left) counter++;
      if (current.right) counter++;
      inOrder(current.left);
      inOrder(current.right);
    }
  }
  inOrder(current);
  return counter;
}

function min() {
  var current = this.root;
  while (!(current.left === null)) {
    current = current.left;
  }
  return current.data;
}

function max() {
  var current = this.root;
  while (!(current.right === null)) {
    current = current.right;
  }
  return current.data;
}

var nums = new BST();

nums.insert(22);
nums.insert(56);
nums.insert(10);
nums.insert(30);
nums.insert(81);
nums.insert(77);
nums.insert(92);
nums.insert(100);
nums.insert(1);
