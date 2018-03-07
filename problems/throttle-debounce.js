
const debounce = (fn, delay) => {
  let timeout = null;
  
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};


const throttle = (fn, delay) => {
	let timeout = null;
	let lastTime = null;

	return (...args) => {
		const now = new Date().now();
		const later = () => fn.apply(this, args);

		if (lastTime && now - lastTime > delay) {
			clearTimeout(timeout);
			lastTime = new Date().now();
			timeout = setTimeout(later, delay);
		}

		if(!timeout && !lastTime) {
			lastTime = new Date().now();
			timeout = setTimeout(later, delay);
		}

	};
};