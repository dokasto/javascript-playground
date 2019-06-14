class UnionFind {
	constructor(elements) {
		this.idMap = new Map();
		for(let i=0; i<elements.length; i++) {
			this.idMap.set(element, i);
		}
	}

	getRoot(element) {
		while(element !== this.idMap.get(element)) {
			element = this.idMap.get(element);
		}

		return element;
	}

	union(u, v) {
		const uRoot = this.getRoot(u);
		const vRoot = this.getRoot(v);

		this.idMap.set(uRoot, vRoot);
	}

	isConnected(u, v) {
		return this.getRoot(u) === this.getRoot(v);
	}
}
