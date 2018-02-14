class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	append(data) {
		if (this.head === null) {
			this.head = new Node(data);
			return;
		}
		const current = this.head;
		while (current.next !== null) {
			current = current.next;
		}
		current.next = new Node(data);
	}

	prepend(data) {
		if (this.head === null) {
			this.head = new Node(data);
			return;
		}
		const currentHead = this.head;
		this.head = new Node(data);
		this.head.next = currentHead;
	}

	deleteWithValue(data) {
		if (this.head === null) return;
		if (this.head.data === data) {
			this.head = this.head.next;
		}
		const current = this.head;
		while (current.data !== null) {
			if (current.next.data === data) {
				current.next = current.next.next;
				return;
			}
			current = current.next;
		}
	}
}
