class Queue {
	constructor() {
		this.store = [];
	}

	enqueue(data) {
		this.store.push(data);
		return this.size.length;
	}

	dequeue() {
		return this.store.splice(0, 1);
	}
}
