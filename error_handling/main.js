// Javascript Errors
"use strict";
// let variable = "Jose";
// console.log(variable);

// Object..create();

// const name = "Dave";
// name = "Joe";

// const makeError = () => {
//   try {
//     const name = "Jose";
//     name = "Alan";
//   } catch (error) {
//     console.warn(error);
//   }
// };

// makeError();

// Custom Errors
// function customError(message) {
//   this.message = message;
//   this.name = "Custom Error";
//   this.stack = `${this.name}: ${this.message}`;
// }
// // Using the custom error

// const makeError = () => {
//   try {
//     throw new customError("This is a customer error!");
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//   }
// };

// makeError();

// Using the generic built-in error constructor
// const makeError = () => {
//   try {
//     throw new Error("This is an error!"); // here we use the generic Error(message) function instead of customError(message)
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//   }
// };
// makeError();

// The finally block can be added to the end of a try-catch block and it runs no matter what
const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }
      console.log("Even number!");
    } catch (error) {
      console.log(error.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};
makeError();

// This is the output
// (1)Error: Odd number!
// at makeError (/Users/lucas/Documents/github_repos/javascript_practice/error_handling/main.js:60:15)
// at Object.<anonymous> (/Users/lucas/Documents/github_repos/javascript_practice/error_handling/main.js:71:1)
// at Module._compile (node:internal/modules/cjs/loader:1254:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
// at Module.load (node:internal/modules/cjs/loader:1117:32)
// at Module._load (node:internal/modules/cjs/loader:958:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:23:47
// ...finally
// (2)Even number!
// ...finally
// (3)Error: Odd number!
// at makeError (/Users/lucas/Documents/github_repos/javascript_practice/error_handling/main.js:60:15)
// at Object.<anonymous> (/Users/lucas/Documents/github_repos/javascript_practice/error_handling/main.js:71:1)
// at Module._compile (node:internal/modules/cjs/loader:1254:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
// at Module.load (node:internal/modules/cjs/loader:1117:32)
// at Module._load (node:internal/modules/cjs/loader:958:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:23:47
// ...finally
// (4)Even number!
// ...finally
// (5)Error: Odd number!
// at makeError (/Users/lucas/Documents/github_repos/javascript_practice/error_handling/main.js:60:15)
// at Object.<anonymous> (/Users/lucas/Documents/github_repos/javascript_practice/error_handling/main.js:71:1)
// at Module._compile (node:internal/modules/cjs/loader:1254:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
// at Module.load (node:internal/modules/cjs/loader:1117:32)
// at Module._load (node:internal/modules/cjs/loader:958:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:23:47
// ...finally
