//Задание 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }
    let result = func(...args);
    cache.push({
      hash,
      value: result
    });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;

  }
  return wrapper;
}

//Задание 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let called = false;     
  let lastArgs = null;
  let lastThis = null;

  function wrapper(...args) {
    wrapper.allCount++;       
    lastArgs = args;
    lastThis = this;

    if (!timeoutId) {
      func.apply(this, args); 
      wrapper.count++;
      called = true;

      timeoutId = setTimeout(() => {
        if (called && lastArgs) {  
          func.apply(lastThis, lastArgs);
          wrapper.count++;
        }
        called = false;             
        timeoutId = null;           
        lastArgs = null;
        lastThis = null;
      }, delay);
    }
  }

  wrapper.count = 0;     
  wrapper.allCount = 0;  

  return wrapper;
}
