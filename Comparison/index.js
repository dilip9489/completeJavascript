//Comparison of different types
//When comparing values of different types, JavaScript converts the values to numbers.

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1


//--->For boolean values, true becomes 1 and false becomes 0.

//For example:

alert( true == 1 ); // true
alert( false == 0 ); // true


// It is possible that at the same time:

// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.
// For example:

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

//An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.


// Strict equality
//A regular equality check == has a problem. It cannot differentiate 0 from false:

alert( 0 == false ); // true

// The same thing happens with an empty string:

alert( '' == false ); // true
// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.



// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

 

alert( 0 === false ); // false, because the types are different


// For a non-strict check ==
// There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

alert( null == undefined ); // true


// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.


//-------->

// Strange result: null vs 0
// Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.



//........>

// The value undefined shouldn’t be compared to other values:

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
 

// We get these results because:

// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.

// The equality check (3) returns false because undefined only equals null, undefined, and no other value.


//String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

// For example:

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
// The algorithm to compare two strings is simple:

// Compare the first character of both strings.
// If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// Repeat until the end of either string.
// If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
// In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

// The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

// G is the same as G.
// l is the same as l.
// o is greater than e. Stop here. The first string is greater.


//What will be the result for these expressions?

5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"


// solution

5 > 4  // → true
"apple" > "pineapple" //→ false
"2" > "12" // → true
undefined == null // → true
undefined === null //  → false
null == "\n0\n" // → false
null === +"\n0\n" // → false


// Some of the reasons:

// Obviously, true.
// Dictionary comparison, hence false. "a" is smaller than "p".
// Again, dictionary comparison, first char "2" is greater than the first char "1".
// Values null and undefined equal each other only.
// Strict equality is strict. Different types from both sides lead to false.
// Similar to (4), null only equals undefined.
// Strict equality of different types.