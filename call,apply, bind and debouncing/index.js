function slow(x) {
    // there can be a heavy CPU-intensive job here
    alert(`Called with ${x}`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {    // if there's such key in cache
        return cache.get(x); // read the result from it
      }
  
      let result = func(x);  // otherwise call func
  
      cache.set(x, result);  // and cache (remember) the result
      return result;
    };
  }
  
  slow = cachingDecorator(slow);
  
  alert( slow(1) ); // slow(1) is cached and the result returned
  alert( "Again: " + slow(1) ); // slow(1) result returned from cache
  
  alert( slow(2) ); // slow(2) is cached and the result returned
  alert( "Again: " + slow(2) ); // slow(2) result returned from cache
//   In the code above cachingDecorator is a decorator: a special function that takes another function and alters its behavior.
  
//   The idea is that we can call cachingDecorator for any function, and it will return the caching wrapper. That’s great, because we can have many functions that could use such a feature, and all we need to do is to apply cachingDecorator to them.
  
//   By separating caching from the main function code we also keep the main code simpler.
  
//   The result of cachingDecorator(func) is a “wrapper”: function(x) that “wraps” the call of func(x) into caching logic:
  
  
  //<------------------------------------------------------->

// Using “func.call” for the context
// The caching decorator mentioned above is not suited to work with object methods.

// For instance, in the code below worker.slow() stops working after the decoration:

// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}

alert( worker.slow(1) ); // the original method works

worker.slow = cachingDecorator(worker.slow); // now make it caching

alert( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined


// The error occurs in the line (*) that tries to access this.someMethod and fails. Can you see why?

//The reason is that the wrapper calls the original function as func(x) in the line (**). And, when called like that, the function gets this = undefined.




// There’s a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this.

// The syntax is:

// func.call(context, arg1, arg2, ...)
// It runs func providing the first argument as this, and the next as the arguments.

// To put it simply, these two calls do almost the same:

func(1, 2, 3);
func.call(obj, 1, 2, 3)

// They both call func with arguments 1, 2 and 3. The only difference is that func.call also sets this to obj.

 
//As an example, in the code below we call sayHi in the context of different objects: sayHi.call(user) runs sayHi providing this=user, and the next line sets this=admin:

function sayHi() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHi.call( user ); // John
sayHi.call( admin ); // Admin


// function say(phrase) {
//   alert(this.name + ': ' + phrase);
// }

// let user = { name: "John" };

// // user becomes this, and "Hello" becomes the first argument
// say.call( user, "Hello" ); // John: Hello




// let worker = {
//     someMethod() {
//       return 1;
//     },
  
//     slow(x) {
//       alert("Called with " + x);
//       return x * this.someMethod(); // (*)
//     }
//   };
  
//   function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//       if (cache.has(x)) {
//         return cache.get(x);
//       }
//       let result = func.call(this, x); // "this" is passed correctly now
//       cache.set(x, result);
//       return result;
//     };
//   }
  
//   worker.slow = cachingDecorator(worker.slow); // now make it caching
  
//   alert( worker.slow(2) ); // works
//   alert( worker.slow(2) ); // works, doesn't call the original (cached)
//   Now everything is fine.
  
//   To make it all clear, let’s see more deeply how this is passed along:
  
//   After the decoration worker.slow is now the wrapper function (x) { ... }.
//   So when worker.slow(2) is executed, the wrapper gets 2 as an argument and this=worker (it’s the object before dot).
//   Inside the wrapper, assuming the result is not yet cached, func.call(this, x) passes the current this (=worker) and the current argument (=2) to the original method.



//func.apply
// Instead of func.call(this, ...arguments) we could use func.apply(this, arguments).

// The syntax of built-in method func.apply is:

// func.apply(context, args)
// It runs the func setting this=context and using an array-like object args as the list of arguments.

// The only syntax difference between call and apply is that call expects a list of arguments, while apply takes an array-like object with them.


// Debounce decorator
 
// The result of debounce(f, ms) decorator is a wrapper that suspends calls to f until there’s ms milliseconds of inactivity (no calls, “cooldown period”), then invokes f once with the latest arguments.

// In other words, debounce is like a secretary that accepts “phone calls”, and waits until there’s ms milliseconds of being quiet. And only then it transfers the latest call information to “the boss” (calls the actual f).

// For instance, we had a function f and replaced it with f = debounce(f, 1000).

// For instance, we had a function f and replaced it with f = debounce(f, 1000).

//Then if the wrapped function is called at 0ms, 200ms and 500ms, and then there are no calls, then the actual f will be only called once, at 1500ms. That is: after the cooldown period of 1000ms from the last call.


// And it will get the arguments of the very last call, other calls are ignored.

//Here’s the code for it (uses the debounce decorator from the Lodash library):

let f = _.debounce(alert, 1000);

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);
// debounced function waits 1000ms after the last call and then runs: alert("c")


