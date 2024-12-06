//Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.
// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
//let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith

// gnore elements using commas
//Unwanted elements of the array can also be thrown away via an extra comma:

// second element is not needed
//let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul

//In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items are also skipped (as there are no variables for them).



//<---------------------------------------------------->

//Works with any iterable on the right-side
//…Actually, we can use it with any iterable, not only arrays:

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
//That works, because internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.



// Assign to anything at the left-side
// We can use any “assignables” on the left side.

// For instance, an object property:

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith

// Object.entries(obj) method.

//We can use it with destructuring to loop over the keys-and-values of an object:

let user1 = {
  name: "John",
  age: 30
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user1)) {
  alert(`${key}:${value}`); // name:John, then age:30
}



// Swap variables trick
//There’s a well-known trick for swapping values of two variables using a destructuring assignment:

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)


// Usually, if the array is longer than the list at the left, the “extra” items are omitted.

//For example, here only two items are taken, and the rest is just ignored:

//let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Further items aren't assigned anywhere

// If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
//The value of rest is the array of the remaining array elements.

//We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment
// let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// now titles = ["Consul", "of the Roman Republic"]

//Default values
//If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined:

let [firstName1, surname] = [];

alert(firstName1); // undefined
alert(surname); // undefined

// If we want a “default” value to replace the missing one, we can provide it using =:

// default values
let [name3 = "Guest", surname3 = "Anonymous"] = ["Julius"];

alert(name3);    // Julius (from array)
alert(surname3); // Anonymous (default used)


//Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.

//For instance, here we use the prompt function for two defaults:

// runs only prompt for surname
let [name$ = prompt('name?'), surname$ = prompt('surname?')] = ["Julius"];

alert(name$);    // Julius (from array)
alert(surname$); // whatever prompt gets
// note: the prompt will run only for the missing value (surname).


//<-------------------------^^^^^^^^^^^^^^^^^^^^^^^^^^^^^------------------>

//Object destructuring
// The destructuring assignment also works with objects.

// The basic syntax is:

//let {var1, var2} = {var1:…, var2:…}
//We should have an existing object on the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.



let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  //Properties options.title, options.width and options.height are assigned to the corresponding variables.

  // If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:

let options1 = {
    title1: "Menu",
    width: 100,
    height: 200
  };
  
  // { sourceProperty: targetVariable }
  let {width: w, height: h, title1} = options;
  
  // width -> w
  // height -> h
  // title -> title
  
  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200


  // For potentially missing properties we can set default values using "=", like this:

// let options = {
//     title: "Menu"
//   };
  
//   let {width = 100, height = 200, title} = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200
//   Just like with arrays or function parameters, default values can be any expressions or even function calls. They will be evaluated if the value is not provided.
  
//   In the code below prompt asks for width, but not for title:
  
//   let options = {
//     title: "Menu"
//   };
  
//   let {width = prompt("width?"), title = prompt("title?")} = options;
  
//   alert(title);  // Menu
//   alert(width);  // (whatever the result of prompt is)
//   We also can combine both the colon and equality:
  
//   let options = {
//     title: "Menu"
//   };
  
//   let {width: w = 100, height: h = 200, title} = options;
  
//   alert(title);  // Menu
//   alert(w);      // 100
//   alert(h);      // 200



//<-------------------------------------------------------->

// What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?

//We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.

// It looks like this:

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100
// };

// // title = property named title
// // rest = object with the rest of properties
// let {title, ...rest} = options;

// // now title="Menu", rest={height: 200, width: 100}
// alert(rest.height);  // 200
// alert(rest.width);   // 100


//Nested destructuring
// If an object or an array contains other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

// In the code below options has another object in the property size and an array in the property items. The pattern on the left side of the assignment has the same structure to extract values from them:

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// destructuring assignment split in multiple lines for clarity
// let {
//   size: { // put size here
//     width,
//     height
//   },
//   items: [item1, item2], // assign items here
//   title = "Menu" // not present in the object (default value is used)
// } = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
// All properties of options object except extra which is absent in the left part, are assigned to corresponding variables:


// Finally, we have width, height, item1, item2 and title from the default value.

// Note that there are no variables for size and items, as we take their content instead.

//<....................................>

// There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }