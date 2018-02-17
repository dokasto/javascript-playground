const debounce = (fn, delay) => {
	let last = { time: null, timerId: null };

	return () => {
		let time = new Date().now();

		if (last.time && last.time - time < delay) {
			clearTimeout(last.timerId);
		}

		last = {
			time,
			timerId: setTimeout(fn, delay)
		};
	};
};
