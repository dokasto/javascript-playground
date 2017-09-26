/**
 * Binary search tree implemenation
 */

/**
 * Node
 */
function Node(nodeData) {
	let left = null;
	let right = null;
	let data = nodeData;

	this.insert = value => {
		if (value <= data) {
			if (left === null) {
				left = new Node(value);
			} else {
				left.insert(value);
			}
		} else {
			if (right === null) {
				right = new Node(value);
			} else {
				right.insert(value);
			}
		}
	};

	this.contains = value => {
		if (value === data) {
			return true;
		} else if (value < data) {
			if (left === null) {
				return false;
			} else {
				return left.contains(value);
			}
		} else if (value > data) {
			if (right === null) {
				return false;
			} else {
				return right.contains(value);
			}
		}
	};

	this.printInOrder = () => {
		if (left !== null) {
			left.printInOrder();
		}
		document.write(data);
		if (right !== null) {
			right.printInOrder();
		}
	};

	this.printPreOrder = () => {
		document.write(data);
		if (left !== null) {
			left.printInOrder();
		}
		if (right !== null) {
			right.printInOrder();
		}
	};

	this.postOrder = () => {
		if (left !== null) {
			left.printInOrder();
		}
		if (right !== null) {
			right.printInOrder();
		}
		document.write(data);
	};
}
