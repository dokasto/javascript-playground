class Stack {
	constructor() {
		this.store = [];
	}

	push(data) {
		this.store.push(data);
		return this.store.length;
	}

	pop() {
		return this.store.pop();
	}

	peek() {
		return this.store[0];
	}

	size() {
		return this.store.length;
	}
}
