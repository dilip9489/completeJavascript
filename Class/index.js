//The “class” syntax
// The basic syntax is:

class MyClass {
  // class methods
  //   constructor() { ... }
  //   method1() { ... }
  //   method2() { ... }
  //   method3() { ... }
}
// Then use new MyClass() to create a new object with all the listed methods.

// The constructor() method is called automatically by new, so we can initialize the object there.

// For example:

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

// Usage:
let user = new User("John");
user.sayHi();
// When new User("John") is called:

// A new object is created.
// The constructor runs with the given argument and assigns it to this.name.
// …Then we can call object methods, such as user.sayHi().

//<-------------------------------------------------->

// What class User {...} construct really does is:

// Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
// Stores class methods, such as sayHi, in User.prototype.
// After new User object is created, when we call its method, it’s taken from the prototype. So the object has access to class methods.

// Here’s the code to introspect it:

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
