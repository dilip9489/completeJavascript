//Object references and copying
// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// That’s easy to understand if we look a bit under the hood of what happens when we copy a value.

// Let’s start with a primitive, such as a string.

// Here we put a copy of message into phrase:

let message = "Hello!";
let phrase = message;
// As a result we have two independent variables, each one storing the string "Hello!".


// Note:<--------------------------------------------------------->

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.



let user = {
    name: "John"
  };


 // And here’s how it’s actually stored in memory:
  
  
//   The object is stored somewhere in memory , while the user variable  has a “reference” to it.
  
//   We may think of an object variable, such as user, like a sheet of paper with the address of the object on it.
  
//   When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.
  
//   Now here’s why it’s important.
  
//   When an object variable is copied, the reference is copied, but the object itself is not duplicated.
  
//   For instance:

let user1 = { name: "John" };

let admin = user1; // copy the reference

// Now we have two variables, each storing a reference to the same object:

//We can use either variable to access the object and modify its contents:

let user2 = { name: 'John' };

let admin2 = user;

admin2.name = 'Pete'; // changed by the "admin" reference

alert(user2.name); // 'Pete', changes are seen from the "user" reference

//Comparison by reference
//Two objects are equal only if they are the same object.

//For instance, here a and b reference the same object, thus they are equal:

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true


//here two independent objects are not equal, even though they look alike (both are empty):

let x = {};
let y = {}; // two independent objects

alert( x == y ); // false

// An important side effect of storing objects as references is that an object declared as const can be modified.

//For instance:

const User = {
  name: "John"
};

User.name = "Pete"; // (*)

alert(User.name); // Pete

// It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.

//In other words, the const user gives an error only if we try to set user=... as a whole.



//<..............................................................>

// Cloning and merging, Object.assign

// So, copying an object variable creates one more reference to the same object.

// But what if we need to duplicate an object?

// We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.


let user4 = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user4) {
    clone[key] = user4[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user4.name ); // still John in the original object

  //We can also use the method Object.assign.

// The syntax is:

Object.assign(dest, ...sources)
// The first argument dest is a target object.
// Further arguments is a list of source objects.
// It copies the properties of all source objects into the target dest, and then returns it as the result.

 

let user5 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user5, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user5.name); // John
alert(user5.canView); // true
alert(user5.canEdit); // true
//If the copied property name already exists, it gets overwritten:

let user6 = { name: "John" };

Object.assign(user6, { name: "Pete" });

alert(user6.name); // now user = { name: "Pete" }

// We also can use Object.assign to perform a simple object cloning:

let user8 = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user8);

alert(clone.name); // John
alert(clone.age); // 30



//<------------------------------------------------------>

//Nested cloning
//Until now we assumed that all properties of user are primitive. But properties can be references to other objects.

//Like this:

let newUser = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( newUser.sizes.height ); // 182

//Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:

let user9 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user9.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user9.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one

// To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning.

let user10 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user10);
  
  alert( user10.sizes === clone.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user10.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related


  // Although, there are cases when structuredClone fails.
  //For instance, when an object has a function property:

// error
structuredClone({
  f: function() {}
});