class HashMap {
	constructor() {
		this.storage = {};
	}

	_generateHash(str) {
		return str.split('').reduce((a, b) => (a << 5) + a + b.charCodeAt(a), 5381);
	}

	set(key, value) {
		let hash = this._generateHash(key);
		this.storage[hash] = value;
	}

	get(key) {
		let hash = this._generateHash(key);
		return this.storage[hash] ? this.storage[hash] : null;
	}
}
