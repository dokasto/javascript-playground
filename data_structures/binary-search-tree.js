/**
 * Binary search tree implemenation
 */
var BST = function() {

  /**
   * Internal Node Class
   */
  this.Node = function(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function() {
      return this.data;
    }
  };

  this.root = null;
};

/**
 * Insert data in the binary tree
 */
BST.prototype.insert = function(data) {
  var n = new this.Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

var inOrderResult = [];
var preOrderResult = [];
var postOrderResult = [];

/**
 * inOrdr traversal
 */
BST.prototype.inOrder = function(node) {
  if (node !== null) {
    this.inOrder(node.left);
    inOrderResult.push(node.show());
    this.inOrder(node.right);
  }
  return inOrderResult;
};

/**
 * Preorder traversal
 */
BST.prototype.preOrder = function(node) {
  if (node !== null) {
    preOrderResult.push(node.show());
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  return preOrderResult;
};

/**
 * Postorder traversal
 */
BST.prototype.postOrder = function(node) {
  if (node !== null) {
    this.postOrder(node.left);
    this.postOrder(node.right);
    postOrderResult.push(node.show());
  }
  return postOrderResult;
};

/**
 * Get the minimum value in the tree
 */
BST.prototype.getMin = function() {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
};

BST.prototype.getMax = function() {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
};

/**
 * Search for a value in BST
 */
BST.prototype.find = function(data) {
  var current = this.root;
  while (current.data !== data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
};

/**
 * Tests Here
 */
describe('Should test Binary Tree', function() {
  var nums = new BST();
  nums.insert(23);
  nums.insert(45);
  nums.insert(16);
  nums.insert(37);
  nums.insert(3);
  nums.insert(99);
  nums.insert(22);

  it('InOrder traversal', function() {
    expect(nums.inOrder(nums.root)).toEqual([3, 16, 22, 23, 37, 45, 99]);
  });

  it('PreOrder traversal', function() {
    expect(nums.preOrder(nums.root)).toEqual([23, 16, 3, 22, 45, 37, 99]);
  });

  it('PostOrder traversal', function() {
    expect(nums.postOrder(nums.root)).toEqual([3, 22, 16, 37, 99, 45, 23]);
  });

  it('minimum should return 3', function() {
    expect(nums.getMin()).toEqual(3);
  });

  it('maximum should return 99', function() {
    expect(nums.getMax()).toEqual(99);
  });
});
