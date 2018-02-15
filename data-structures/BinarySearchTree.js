
class BinarySearchTree {

	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			(this.left ? this.left.insert(value) : this.left = new BinarySearchTree(value));
		} else if ( value > this.value) {
			(this.right ? this.right.insert(value) : this.right = new BinarySearchTree(value));
		}
	}

	contains(value) {
		if (value === this.value) return true;
		if (value < this.value) {
			return !!this.left && this.left.contains(value);
		} else if (value > this.value) {
			return !!this.right && this.right.contains(value);
		}
		return false;
	}

	traverseDepthFirstInOrder(fn) {
		if (this.left) this.left.traverseDepthFirstInOrder(fn);
		fn(this.value);
		if (this.right) this.right.traverseDepthFirstInOrder(fn);
	}

	traverseDepthFirstPreOrder(fn) {
		fn(this.value);
		if (this.left) this.left.traverseDepthFirstPreOrder(fn);
		if (this.right) this.right.traverseDepthFirstPreOrder(fn);
	}

	traverseDepthFirstPostOrder(fn) {
		if (this.left) this.left.traverseDepthFirstPostOrder(fn);
		if (this.right) this.right.traverseDepthFirstPostOrder(fn);
		fn(this.value);
	}

	deleteMin() {
		if (this.left) {
			if (this.left.left) {
				this.left.deleteMin();
			} else {
				if (this.left.right) {
					this.left.right = null;
				} else {
					this.left = null;
				}
			}
		}
	}

	deleteMax() {
		if (this.right) {
			if (this.right.right) {
				this.right.deleteMax();
			} else {
				if(this.right.left) {
					this.right.left = null;
				} else {
					this.right = null;
				}
			}
		}
	}

	leftMostValue() {
		if (!this.left) return this.value;
		let current = this.left;
		while(current) {
			current = current.left;
		}
		return current.value;
	}

	deleteNode(value) {
		if(value === this.value) {

			// If node is a leaf
			if(!this.left && !this.right) this = null;	

			// If it has only one node at the left
			if(this.left && !this.right) {
				this = this.left;
			}

			// If it has only one node at the right
			if(!this.left && this.right) {
				this = this.right;
			}

			// If it has two child nodes
			if(this.left && this.right) {
				const leftMostValue = this.right.leftMostValue();
				this.value = leftMostValue;
				this.right.deleteNode(leftMostValue);
			}

		} else if (value < this.value) {
			if (this.left) this.left.deleteNode(value);
		} else if (value > this.value) {
			if (this.right) this.right.deleteNode(value);
		}
	}

	validate() {
		
	}

	checkIfFull() {

	}

	checkIfBalanced() {

	}

}