// “this” in methods
// It’s common that an object method needs to access the information stored in the object to do its job.

// For instance, the code inside user.sayHi() may need the name of the user.

// To access the object, a method can use the this keyword.

// The value of this is the object “before dot”, the one used to call the method.

// For instance:

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John
// Here during the execution of user.sayHi(), the value of this will be user.

// Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

let user1 = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user1.name); // "user" instead of "this"
  }

};
// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

//<---------------------------------------------------->

// “this” is not bound
// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.

// There’s no syntax error in the following example:

function sayHi() {
  alert( this.name );
}
// The value of this is evaluated during the run-time, depending on the context.

// For instance, here the same function is assigned to two different objects and has different “this” in the calls:

let user3 = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user3.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user3.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

// The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.

//<=================================================================>
//<----..................--------------------------------->

// Calling without an object: this == undefined
// We can even call the function without an object at all:

function sayHi() {
  alert(this);
}

sayHi(); // undefined

// In this case this is undefined in strict mode. If we try to access this.name, there will be an error.

// In non-strict mode the value of this in such case will be the global object (window in a browser,  
// Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.

// In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

//The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.



//<--------------------------------------------->

// Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// For instance, here arrow() uses this from the outer user.sayHi() method:

let user5 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user5.sayHi(); // Ilya


//Summary
// Functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.