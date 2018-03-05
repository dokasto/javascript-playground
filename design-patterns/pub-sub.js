/** 
 * Publish/Subscribe pattern
*/

const PubSub = () => {
  
  let subscriptions = {};
  
  const fireOnce = new Map();
  
  const unSubscribe = (eventName, callback) => {
    
    subscriptions[eventName] = subscriptions[eventName].filter(cb => callback !== cb);
    
    if (subscriptions[eventName].length === 0) delete subscriptions[eventName];
  };
  
  
  const subscribe = (eventName, callback) => {
    
    if (typeof eventName !== 'string') throw new Error('Event name should be a string!');
    
    if (typeof callback !== 'function') throw new Error('Handler should be a function!');
    
    if (subscriptions.hasOwnProperty(eventName)) {
      subscriptions[eventName].push(callback);
    } else {
      subscriptions[eventName] = [callback];
    }
    
    return {
      release() {
        
        return unSubscribe(eventName, callback);
    
      }
    };
  };
  
  const subscribeOnce = (eventName, callback) => {
    
    fireOnce.set(eventName, callback);
    
    return subscribe(eventName, callback);
  };
  
  const emit = (eventName, ...args) => {
    
    if (typeof eventName !== 'string') throw new Error('Event name should be a string!');
    
    if (subscriptions.hasOwnProperty(eventName)) {
      
      subscriptions[eventName].forEach((callback) => {
        
        callback.apply(null, args);
        
        if (fireOnce.has(eventName)) {
          
          unSubscribe(eventName, fireOnce.get(eventName));
          
          fireOnce.delete(eventName);
        }
        
      });
      
    } else {
      console.warn(`${eventName} has not been subcribed to.`); 
    }
  };
  
  return {subscribe, subscribeOnce, emit};
};

