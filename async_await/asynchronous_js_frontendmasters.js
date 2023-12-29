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
function brokenRecord() {
  setInterval(() => console.log("hi again"), 1000);
  setTimeout(() => console.log("HAAAAAAAA"), 3000);
  let sum = [];
  for (let i = 0; i < 100000000; i++) {
    sum.push(i);
  }
  console.log("Me first!!");
}

brokenRecord();
