//Once again, if the element doesn’t exist, we’ll get an error accessing .innerHTML property of null. And in some cases, when the absence of the element is normal, we’d like to avoid the error and just accept html = null as the result.

// How can we do this?

// The obvious solution would be to check the value using if or the conditional operator ?, before accessing its property, like this:

let user = {};

alert(user.address ? user.address.street : undefined);

// It works, there’s no error… But it’s quite inelegant. As you can see, the "user.address" appears twice in the code.
//For more deeply nested properties, it becomes even uglier, as more repetitions are required.

// E.g. let’s get user.address.street.name in a similar fashion.

// let user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);



// Optional chaining
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

// In other words, value?.prop:

// works as value.prop, if value exists,
// otherwise (when value is undefined/null) it returns undefined.

// Here’s the safe way to access user.address.street using ?.:

// let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

//For example, if according to our code logic user object must exist, but address is optional, then we should write user.address?.street, but not user?.address?.street.



// ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.

// So, if there are any further function calls or operations to the right of ?., they won’t be made.

// For instance:

let user4 = null;
let x = 0;

user4?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented

// Other variants: ?.(), ?.[]
// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

// For example, ?.() is used to call a function that may not exist.

// In the code below, some of our users have admin method, and some don’t:

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)
// Here, in both lines we first use the dot (userAdmin.admin) to get admin property, because we assume that the user object exists, so it’s safe read from it.

// Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest) the evaluation stops without errors.

// The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
// Also we can use ?. with delete:

delete user?.name; // delete user.name if user exists


// The optional chaining ?. syntax has three forms:

// obj?.prop – returns obj.prop if obj exists, otherwise undefined.
// obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
// obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.