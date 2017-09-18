/**
 * Simple Emitter class
 */

function Emmitter() {
	let subscriptions = {};

	this.subscribe = (eventName, callback) => {
		subscriptions[eventName] = callback;
	};

	this.release = (eventName = null) => {
		if (eventName) {
			delete subscriptions[eventName];
		} else {
			subscriptions = {};
		}
	};

	this.emit = (eventName, ...args) => {
		subscriptions[eventName].call(this, ...args);
	};
}
