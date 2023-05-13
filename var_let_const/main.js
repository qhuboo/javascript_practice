// var, let, and const

let x = 1;
x = 20;
console.log(x);

// Global scope, doesn't depend on whether they are declared as var, let, or const
var z = 1;
let y = 2;
const p = 3;

// Local Scope
// Block scope
// Let and const declared variables are block scoped
if (true) {
  let num = 5; // This variable num that was declared with the let keyword is only accessible within the curly
  // braces that define the if statement
  console.log(num); // This will successfully run and printout 5
}
// console.log(num); // This will return a ReferenceError: num is not defined since the scope of the variable is inside the curly braces and we
// are trying to access it outside them

// Function Scope
// Varibles declared using the var keyword are function scoped and are hoisted to the top of their containing functions
function hello() {
  var func_num = 20;
  console.log(number); // Although the variable number is hoisted and can be accessed before it is declared it is initialized to undefined, so this would print out undefined
  if (true) {
    var number = 18;
  }
  console.log(number); // This will print out 18 since var declared variables are function scoped and not block scoped it doesn't matter
  // that number was declared and initialized inside the if block, it will be accessible anywhere inside the function hello
  console.log(x); // This will print out 20 since the variable x was declared outside any block of function it has a global scope and can be
  // accessed anywhere after the declarartion
  if (true) {
    let x = 80;
    console.log(x); // In this case 80 will be printed out since the console.log function will use the local variable x instead of the glogal one
  }
  if (true) {
    console.log(x); // Here 20 will be printed out since the x varible directly above this was declared with the let keyword and thus block scoped.
    // Hence this console.log used the global variable x = 20
  }
  if (true) {
    var func_num = 100;
    console.log(func_num); // This will print out 100 since varibles declared with the var keyword are function scoped even if there is another
    // variable declaration using the same name (identifier) with the var keyword this would override it since redeclaration is allowed when using
    // the var keyword
  }
  console.log(func_num); // Since the var keyword instatiates a function scoped variable and it was redeclared and reinitialized in the block directly
  // above this the change is permanent and this should print out 100 instead of 20 (the original initialization)
}

hello();
