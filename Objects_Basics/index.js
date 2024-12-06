// primitive”, because their values contain only a single thing (be it a string or a number or whatever).

//In contrast, objects are used to store keyed collections of various data and more complex entities.


//An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.


//An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

// We can immediately put some properties into {...} as “key: value” pairs:

let user3 = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };
//   A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.
  
//   In the user3 object, there are two properties:
  
//   The first property has the name "name" and the value "John".
//   The second one has the name "age" and the value 30.

//Note: Property values are accessible using the dot notation:

// get property values of the object:
alert( user3.name ); // John
alert( user3.age ); // 30

// the value can be of any type. Let’s add a boolean one:

user3.isAdmin = true;
console.log(user3)

//To remove a property, we can use the delete operator:

delete user3.age;


//We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

// Note
//Square brackets
//For multiword properties, the dot access doesn’t work:

// this would give a syntax error
//--------> user.likes birds = true

//The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).

//There’s an alternative “square bracket notation” that works with any string:
 

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

//Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

//The dot notation cannot be used in a similar way:

let user = {
  name: "John",
  age: 30
};

let key1 = "name";
alert( user.key1 ) // undefined


// Computed properties
//We can use square brackets in an object literal, when creating an object. That’s called computed properties.

//For instance:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// We can use more complex expressions inside square brackets:

let fruit1 = 'apple';
let bag1 = {
  [fruit1 + 'Computers']: 5 // bag.appleComputers = 5
};


// Property value shorthand
//In real code, we often use existing variables as values for property names.

//For instance:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
//In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

//Instead of name:name we can just write name, like this:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
//We can use both normal properties and shorthands in the same object:

let user = {
  name,  // same as name:name
  age: 30
};


// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

//But for an object property, there’s no such restriction:

// these properties are all right
let obj1= {
  for: 1,
  let: 2,
  return: 3
};

alert( obj1.for + obj1.let + obj1.return );  // 6
//In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).

//Other types are automatically converted to strings.

//For instance, a number 0 becomes a string "0" when used as a property key:

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

// There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj2 = {};
obj2.__proto__ = 5; // assign a number
alert(obj2.__proto__); // [object Object] - the value is an object, didn't work as intended

//<----------------------------------------------------->


//Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"
//There’s also a special operator "in" for that.

//The syntax is:

//"key" in object
//For instance:

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist


// Why does the in operator exist? Isn’t it enough to compare against undefined?

// Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.

// It’s when an object property exists, but stores undefined:

let obj3 = {
  test: undefined
};

alert( obj3.test ); // it's undefined, so - no such property?

alert( "test" in obj3 ); // true, the property does exist!
// In the code above, the property obj.test technically exists. So the in operator works right.

// Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. 


//<.................................................................>

// For in loop

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }

  //
  //Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

 

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }

//<---------------------------------->
  let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.


 
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390