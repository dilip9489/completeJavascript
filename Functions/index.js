//Function Declaration
//To create a function we can use a function declaration.

function name(parameter1, parameter2, ... parameterN) {
    // body
   }
   //----->The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated

   function showMessage() {
    alert( 'Hello everyone!' );
  }
  
  showMessage();
  showMessage();


  //The call showMessage() executes the code of the function. Here we will see the message two times.

// This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.

// If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.



//---->Local variables
// A variable declared inside a function is only visible inside that function.

 
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function



// Outer variables
//A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John

//  <--------->

//The function has full access to the outer variable. It can modify it as well.

//For instance:

let userName1= 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName1;
  alert(message);
}

alert( userName1 ); // John before the function call

showMessage();

alert( userName1 ); // Bob, the value was modified by the function


// <------------------------------------>

//The outer variable is only used if there’s no local one.

//If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

let userName2 = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage(); // Hello, Bob

alert( userName2); // John, unchanged, the function did not access the outer variable


//we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:

function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer
  
    alert( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  alert( from ); // Ann

  //Default values

// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

// For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage("Ann");

// That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.

// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:


function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
// Now if the text parameter is not passed, it will get the value "no text given".

// The default value also jumps in if the parameter exists, but strictly equals undefined, like this:

showMessage("Ann", undefined); // Ann: no text given


// other use cases 
function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
  }



//A function with an empty return or without it returns undefined
//If a function does not return a value, it is the same as if it returns undefined:


function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true
// An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
//It is possible to use return without a value. That causes the function to exit immediately.

//For example:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
//In the code above if checkAge(age) returns false, then showMovie won’t proceed to the alert.

// Note: For a long expression in return, it might be tempting to put it on a separate line, like this:

return
(some + long + expression + or + whatever * f(a) + f(b))
//That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

return;
(some + long + expression + or + whatever * f(a) + f(b))