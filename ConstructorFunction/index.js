// Constructor, operator "new"
// The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

// That can be done using constructor functions and the "new" operator.

// Constructor function
// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.
// For instance:

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.


// In other words, new User(...) does something like:

function User(name) {
    // this = {};  (implicitly)
  
    // add properties to this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implicitly)
  }



  // So let user = new User("Jack") gives the same result as:

let user1 = {
    name: "Jack",
    isAdmin: false
  };


//Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read.

// That’s the main purpose of constructors – to implement reusable object creation code.

//<----------------------------------------------------->


//new function() { … }
// If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:

// create a function and immediately call it with new
let user2 = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};
// 

//<------------------------------------------->

// Methods in constructor
// Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

// Of course, we can add to this not only properties, but methods as well.

// For instance, new User(name) below creates an object with the given name and the method sayHi:

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/