//------>String Conversion
//String conversion happens when we need the string form of a value.

 

//We can  call the String(value) function to convert a value to a string:

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"

//Numeric Conversion
//Numeric conversion in mathematical functions and expressions happens automatically.

//For example, when division / is applied to non-numbers:

alert( "6" / "2" ); // 3, strings are converted to numbers

//We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number



//If the string is not a valid number, the result of such a conversion is NaN. For instance:

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

//Numeric conversion rules:


// Value |  Becomes…
//undefined	| NaN
//  null |	0
//true and false |1 and 0
// string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
// Examples:

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0



// ------>Boolean Conversion
 

// It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.


alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

// Note: Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)