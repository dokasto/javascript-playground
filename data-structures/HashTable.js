
const privateHashingMethod = Symbol('privateHashingMethod');

class HashTable {
	constructor() {
		this.storage = [];
	}

	[privateHashingMethod] (key) {
		const ascii = key.split('').map(char => char.charCodeAt(0)).join('');
		return ascii.toString('base64');
	}

	set(key, value) {
		const hash = this[privateHashingMethod](key);
		if(this.storage[hash]) {
			this.storage[hash].push({ key: value });
		} else {
			this.storage[hash] = [];
			this.storage[hash].push({ key: value });
		}
	}

	get(key) {
		const hash = this[privateHashingMethod](key);
		if (this.storage[hash]) {
			const result = this.storage[hash].filter(each => each.key === key);
			return result[key];
		}
		return null;
	}

}