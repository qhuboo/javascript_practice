// function printHello() {
//   console.log("Hello");
// }

// console.log(setTimeout(printHello, 1000));
// console.log("Me first!");

// We're interacting with a world outside of Javascript now - so we need rules
// function printHello() {
//   console.log("Hello");
// }
// function blockFor1Sec() {
//   // Blocks in the javascript thread for one second
//   let sum = [];
//   for (let i = 0; i < 100000000; i++) {
//     sum.push(i);
//   }
// }
// setTimeout(printHello, 0);
// blockFor1Sec();
// console.log("Me first");

// Start of the exercises
// 1. Thinking point(no writing code for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out?
// *Howdy* first or *Partnah* first?
// function sayHowdy() {
//   console.log("Howdy");
// }
// function testMe() {
//   setTimeout(sayHowdy, 0);
//   console.log("Partnah");
// }

// testMe();

// I think it's 'Partnah' first and then 'Howdy' - CORRECT

// 2. Create a function *delayedGreet* that console logs *welcome* after 3 seconds
// function delayedGreet() {
//   setTimeout(() => console.log("welcome"), 3000);
// }

// delayedGreet();

// 3. Create a function *helloGoodbye* that console logs *hello* right away, and *goodbye* after 2 seconds
// function helloGoodbye() {
//   console.log("hello");
//   setTimeout(() => {
//     console.log("goodbye");
//   }, 2000);
// }

// helloGoodbye();

// 4. Create a function *brokenRecord* that console logs *hi again* every second. Use ctrl + c when you are satisfied that it is working.
// function brokenRecord() {
//   setInterval(() => console.log("hi again"), 1000);
// }

// brokenRecord();

// 5. Create a function *limitedRepeater* that console logs *hi for now* every second, but only for 5 seconds. Research how to use *clearInterval* if you are not sure
// how to do this.
// function limitedRepeater() {
//   return setInterval(() => console.log("hi for now"), 1000);
// }

// const someId = limitedRepeater();
// setTimeout(() => clearInterval(someId), 5000);

// 6. Write a function called *everyXsecsForYsecs* that will accept three arguments: a function *func*, a number *interval*, and another number *duration*.
// *everyXsecsForYsecs* will execute the given function every *interval* number of milliseconds, but then automatically stop after *duration* millseconds.
// Then pass the below *sayHi* function into an invocation of *everyXsecsForYsecs* with 1000ms interval time and 5000ms duration time.
// function everyXsecsForYsecs(func, interval, duration) {
//   const someId = setInterval(func, interval);
//   setTimeout(() => clearInterval(someId), duration);
// }

// function sayHi() {
//   console.log("hi");
// }

// everyXsecsForYsecs(sayHi, 1000, 5000);

// 7. Write a function *delayCounter* that accepts a number(called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and
// returns a function.
// When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
// function delayCounter(target, wait) {
//   let counter = 1;
//   return function () {
//     let someId = setInterval(() => {
//       if (counter <= target) {
//         console.log(counter);
//         counter++;
//       } else {
//         clearInterval(someId);
//       }
//     }, wait);
//   };
// }

// const newFunc = delayCounter(8, 2000);
// newFunc();

// 8. Write a function, *promised*, that takes in a value. This function will return a promise that will resolve after 2 seconds.
// Hint: Take a look at the Promise object docs on MDN
function promised(input) {
  return new Promise((resolve) => {
    setTimeout(resolve(input), 2000);
  });
}

console.log(promised("Hello"));
