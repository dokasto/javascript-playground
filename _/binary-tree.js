class BinarySearchTree {
	constructor(data = 'root') {
		this.left = null;
		this.right = null;
		this.value = data;
	}

	add(item, ...remainder) {
		if (this.value === 'root') {
			this.value = item;
			this.size++;
		} else {
			if (item <= this.value) {
				if (this.left === null) {
					this.left = new BinarySearchTree(item);
				} else {
					this.left.add(item);
				}
			} else {
				if (this.right === null) {
					this.right = new BinarySearchTree(item);
				} else {
					this.right.add(item);
				}
			}
		}
		if (remainder && remainder.length) this.add(...remainder);
	}

	has(item) {
		if (item === this.value) {
			return true;
		} else if (item < this.value) {
			if (this.left === null) {
				return false;
			} else {
				return this.left.has(item);
			}
		} else {
			if (this.right === null) {
				return false;
			} else {
				return this.right.has(item);
			}
		}
	}
}
