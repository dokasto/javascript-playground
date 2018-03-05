/**
 * Observer design pattern
 */

const Observer = () => {
  
  let observers = [];
  
  const subscribe = fn => {
    if (typeof fn !== 'function') {
      throw new Error('Handler must be a function');
    } else {
      observers.push(fn);
    }
  };
  
  const unsubscribe = fn => {
    if (typeof fn !== 'function') {
      throw new Error('Handler must be a function');
    } else {
      observers = observers.filter(each => each !== fn);
    }
  };
  
  const fire = (...args) => {
    observers.forEach(cb => cb.apply(null, args));
  };
  
  return { subscribe, unsubscribe, fire};
};