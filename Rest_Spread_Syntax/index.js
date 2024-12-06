// Rest parameters ...
// A function can be called with any number of arguments, no matter how it is defined.

// Like here:

// function sum(a, b) {
//   return a + b;
// }

// alert( sum(1, 2, 3, 4, 5) );
// There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted, so the result in the code above is 3.

// The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.


function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  alert( sumAll(1) ); // 1
  alert( sumAll(1, 2) ); // 3
  alert( sumAll(1, 2, 3) ); // 6


  // We can choose to get the first parameters as variables, and gather only the rest.

//Here the first two arguments go into variables and the rest go into titles array:

function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

//Spread syntax ! It looks similar to rest parameters, also using ..., but does quite the opposite.

//When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

//For Math.max:

let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8

// let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
// then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}


