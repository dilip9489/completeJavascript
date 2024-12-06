//Function binding
//When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: “losing this”.

// Once a method is passed somewhere separately from the object – this is lost.

let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); // Hello, undefined!


  //Solution 2: bind
// Functions provide a built-in method bind that allows to fix this.

// The basic syntax is:

// more complex syntax will come a little later
// let boundFunc = func.bind(context);
// The result of func.bind(context) is a special function-like “exotic object”, that is callable as function and transparently passes the call to func setting this=context.

//calling boundFunc is like func with fixed this.

// For instance, here funcUser passes a call to func with this=user:

// let user = {
//   firstName: "John"
// };

// function func() {
//   alert(this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser(); // John
// Here func.bind(user) as a “bound variant” of func, with fixed this=user.

// Now let’s try with an object method:

let user1 = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

let sayHi = user1.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};
// In the line (*) we take the method user.sayHi and bind it to user. The sayHi is a “bound” function, that can be called alone or passed to setTimeout – doesn’t matter, the context will be right.

//Convenience method: bindAll
//If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:

for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}

//
