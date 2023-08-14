class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node();

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertnode(this.root, newNode);
    }
  }
  insertnode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.right === null) node.right = newNode;
      else this.insertnode(node.right, newNode);
    } else {
      if (node.left === null) node.left = newNode;
      else this.insertnode(node.left, newNode);
    }
  }
  remove(data) {
    this.root = this.removenode(this.root, data);
  }
  removenode(node, key) {
    if (node === null) return null;
    else if (key < node.data) {
      node.left = this.removenode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removenode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      var temp = this.minnode(node.right);
      node.data = temp.data;

      node.right = this.removenode(node.right, temp.data);
      return node;
    }
  }
  inorder(node) {
    if (!node == null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (!node == null) {
      console.log(node.data);
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }
  postorder(node) {
    if (!node == null) {
      this.inorder(node.left);
      this.inorder(node.right);
      console.log(node.data);
    }
  }
  minnode(node) {
    if (node.left === null) return null;
    else return this.minnode(node.left);
  }
  search(node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.search(node.left, data);
    else if (node.data > data) return this.search(node.right, data);
    else return node;
  }
  findroot() {
    return this.root;
  }
}
// driver code
// driver code
var obj = new BST();
obj.insert(8);
obj.insert(3);
obj.insert(10);
obj.insert(1);
obj.insert(6);
obj.insert(14);
obj.insert(4);
obj.insert(7);
var root = obj.findroot();
console.log("in order");
obj.inorder(root);
obj.remove(6);
console.log("in order");
obj.inorder(root);
obj.remove(7);
console.log("in order");
obj.inorder(root);
console.log("post order");
obj.postorder(root);
console.log("pre order");
obj.preorder(root);
