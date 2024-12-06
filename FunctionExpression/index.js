

let sayHi = function() {
    alert( "Hello" );
};
// Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.

// As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

// Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.

// Here we immediately assign it to the variable, so the meaning of these code samples is the same: “create a function and put it into the variable sayHi”.

// In more advanced situations,  a function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous.




// a function is a special value, in the sense that we can call it like sayHi().

// But it’s still a value. So we can work with it like with other kinds of values.

// We can copy a function to another variable:

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)


//Here’s what happens above in detail:

// The Function Declaration (1) creates the function and puts it into the variable named sayHi.
// Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
// Now the function can be called as both sayHi() and func().


// <-------------------------------------------->

// We could also have used a Function Expression to declare sayHi.

let sayHi = function() { // (1) create
  alert( "Hello" );
};

let func1 = sayHi;
// ...



//<=============================>



//     Callback functions
// Let’s look at more examples of passing functions as values and using function expressions.

// We’ll write a function ask(question, yes, no) with three parameters:

// question
// Text of the question
// yes
// Function to run if the answer is “Yes”
// no
// Function to run if the answer is “No”
// The function should ask the question and, depending on the user’s answer, call yes() or no():

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
 
// The arguments showOk and showCancel of ask are called callback functions or just callbacks.

// The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

// We can use Function Expressions to write an equivalent, shorter function:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

// Here, functions are declared right inside the ask(...) call.
// They have no name, and so are called anonymous. 
//Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.



//<---------------------------------------------->

// Function Expression vs Function Declaration
// Let’s formulate the key differences between Function Declarations and Expressions.

// First, the syntax: how to differentiate between them in the code.

// Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
  return a + b;
}
// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum = function(a, b) {
  return a + b;
};
// The more subtle difference is when a function is created by the JavaScript engine.

// A Function Expression is created when the execution reaches it and is usable only from that moment.

// Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

// Function Declarations are different.

// A Function Declaration can be called earlier than it is defined.

// For example, a global Function Declaration is visible in the whole script, no matter where it is.

// That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

// And after all Function Declarations are processed, the code is executed. So it has access to these functions.

// For example, this works:

sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
// The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

// …If it were a Function Expression, then it wouldn’t work:

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
// Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

// Another special feature of Function Declarations is their block scope.




// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

//For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.

//If we use Function Declaration, it won’t work as intended:

let age1 = prompt("What is your age?", 18);

// conditionally declare a function
if (age1 < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined


//That’s because a Function Declaration is only visible inside the code block in which it resides.

//Here’s another example:

let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined



//<--------------------------------------->


// What can we do to make welcome visible outside of if?

// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

// This code works as intended:

let age3 = prompt("What is your age?", 18);

let welcome;

if (age3 < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now
//Or we could simplify it even further using a question mark operator ?:

let age2 = prompt("What is your age?", 18);

let welcome = (age2 < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now


// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.