// Primitive DataTypes--->Values which cannot be changed--->Number, string, boolean
var age = 20; // <----- initialization
age = 40; // <----- Reassignment




var temp //<-----Declaration
temp='hello' //<-----Assignment
console.log(temp)
temp=10; //<----Reassignment
console.log(temp)

var temp = 'hello, world!' //<---------This is called as re-declaration of variable. 



// Note: JS allows you to store a number (10) in a variable which had a string (“hello”) → Dynamically Typed
//------->“dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

//!---------What if we have a variable whose value should not change during the execution of the program.

// Declaring a variable using const keyword instead of var creates a variable whose value can’t be changed.
// const means constant i.e. whose value can not be changed.

const str = "hello"



//Keyword  |  Allows re-declaration |  Allows re-assignment?

  //var    |      ✅                |    ✅

  // let   |      ❌                |    ✅
 
 // const  |      ❌                |    ❌



 //Note:

 //------>Values are stored in the memory, and variables are the labels pointing to the memory address where the value is stored. 
// ------>When we assign a value to a variable either directly (e.g. b = 20;) or from one variable to another 
// (e.g. b = a;), a new copy of that value is created and stored in the memory and the variable points to it.


//DataTypes---->Number

let n = 123;
n = 12.345;

//NOTE:  The number type represents both integer and floating point numbers.

//Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

//Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

alert( 1 / 0 ); // Infinity


//Or just reference it directly:

alert( Infinity ); // Infinity



//NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

alert( "not a number" / 2 ); // NaN, such division is erroneous


//NaN is sticky. Any further mathematical operation on NaN returns NaN:

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN


// Execption:----> So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

//--->In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.

//BigInt type was recently added to the language to represent integers of arbitrary length.

//A BigInt value is created by appending n to the end of an integer:

const bigInt = 1234567890123456789012345678901234567890n;



// String
// A string in JavaScript must be surrounded by quotes.

let str1 = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str1}`;

// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:



let myName = "John";

// embed a variable
alert( `Hello, ${myName}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3



//The “null” value
//The special null value does not belong to any of the types described above.

let age = null;

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.



// The “undefined” value
// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined:

let age;

alert(age); // shows "undefined"


// Technically, it is possible to explicitly assign undefined to a variable:

let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"



// The typeof operator
// The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.
//typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  

typeof null // 

typeof alert // "function"  

 
 

