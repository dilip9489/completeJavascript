//To create a new Date object call new Date() with one of the following arguments:

new Date()
//Without arguments – create a Date object for the current date and time:

let now = new Date();
alert( now ); // shows current date/time



// new Date(milliseconds)
//Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

// An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
//It’s a lightweight numeric representation of a date. We can always create a date from a timestamp using new Date(timestamp) and convert the existing Date object to a timestamp using the date.getTime()

// new Date(datestring)
//If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse  

let date = new Date("2017-01-26");
alert(date);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in



// new Date(year, month, date, hours, minutes, seconds, ms)
// Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

// The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
// For instance:

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default



//There are methods to access the year, month and so on from the Date object:

// getFullYear()
// Get the year (4 digits)
// getMonth()
// Get the month, from 0 to 11.
// getDate()
// Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()

// getDay()
//Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.

//getTime()
//Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

//The important side effect: dates can be subtracted, the result is their difference in ms.

//That can be used for time measurements:

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

alert( `The loop took ${end - start} ms` );

//

Date.now()
// If we only want to measure time, we don’t need the Date object.

// There’s a special method Date.now() that returns the current timestamp.

// It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.

// It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.

// So this is probably better:

let start1 = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end1 = Date.now(); // done

alert( `The loop took ${end1 - start1} ms` ); // subtract numbers, not dates



// For instance, let’s measure two functions that calculate the difference between two dates: which one is faster?

// Such performance measurements are often called “benchmarks”.

// we have date1 and date2, which function faster returns their difference in ms?
// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// // or
// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
// These two do exactly the same thing, but one of them uses an explicit date.getTime() to get the date in ms, and the other one relies on a date-to-number transform. Their result is always the same.

// So, which one is faster?

// The first idea may be to run them many times in a row and measure the time difference. For our case, functions are very simple, so we have to do it at least 100000 times.

//<------------------------------------------------------->


function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
  alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );