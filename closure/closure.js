// Closures, Scope, and Execution Context

// Because Javascript is a lexically scoped language functions are executed using the variable scope that in effect when they were defined, not the variable scope
// that is in effect when they are invoked. In order to implememnt lexical scoping, the internal state of a Javascript function object must include not only the code
// of the function but also a reference to the scope in which the function definition appears. This combination of a function object and a scope (a set of variable bindinds)
// in which the function's variables are resolved is called a closure in the computer science literature. Technically, all Javascript function are closures, but because
// most functions are invoked from the same scope that they were defined in, it normally doesn't really matter that there is a closure involved. Closures befome intersting
// when they are invoked from a different scope than the one they were defined in.

// Challenges
// 1. Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello."
// function createFunction() {
//   function hello() {
//     console.log("hello");
//   }
//   return hello;
// }

// const newFunction = createFunction();
// newFunction();

// 2. Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input
// that was used when the function was created.
// function createFunctionPrinter(input) {
//   function printInput() {
//     console.log(input);
//   }
//   return printInput;
// }

// const printer = createFunctionPrinter("Print this please");
// printer();

// 3. Examine the code for the outer function. Notice that we are returning a function and that function is using variables outside of it's scope. Uncomment those
// lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.
// function outer() {
//   let counter = 0;
//   function incrementCounter() {
//     counter++;
//     console.log("counter", counter);
//   }
//   return incrementCounter;
// }
// const willCounter = outer();
// const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before you do, guess what will be logged from each function call.
// /*** Uncomment these to check you work! ***/
// willCounter(); // 1
// willCounter(); // 2
// willCounter(); // 3

// jasCounter(); // 1
// willCounter(); // 4

// 4. Write a function once that accepts a callback as input and returns a function. When the returned function is called the first the first time,
// it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the
// output value from the first time it was called.
// function createOnceFunction(callback) {
//   let counter = 0;
//   let first = 0;
//   function once(input) {
//     if (counter == 0) {
//       first = callback(input);
//       console.log(`Run ${counter + 1}`, first);
//       counter++;
//       return first;
//     } else {
//       console.log(`Run ${counter + 1}`, first);
//       counter++;
//       return first;
//     }
//   }
//   return once;
// }

// const onceFunction = createOnceFunction((input) => input * 2);
// onceFunction(25);
// onceFunction(3);
// onceFunction(23);

// 5. Write a function *after* that takes the number of times the callback needs to be called before being executed as the first parameter
// and the callback as the second parameter.

// function after(number, callback) {
//   let counter = 0;
//   function runAfter() {
//     if (counter == number) {
//       callback();
//     } else {
//       console.log("I can't run the function at this time");
//       counter++;
//     }
//   }
//   return runAfter;
// }

// const myFunction = after(3, () => console.log("I ran!"));
// myFunction();
// myFunction();
// myFunction();
// myFunction();

// 6. Write a function *delay* that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be
// invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
// function delay(callback, delay, number) {
//   setTimeout(() => callback(number), delay);
// }

// delay((number) => console.log(number * 2), 3000, 3);

// 7. Write a function *rollCall* that accepts an array of names and returns a function. The first time the returned function is invoked,
// it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names
// have been called. Once all names have been called, it shouldl log "Everyone accounted for."
// function rollCall(nameArray) {
//   let counter = 0;
//   function func() {
//     if (counter != nameArray.length) {
//       console.log(nameArray[counter]);
//       counter++;
//     } else {
//       console.log("Everyone accounted for");
//     }
//   }
//   return func;
// }

// const myRollCall = rollCall(["Jose", "Alan", "Misael"]);
// myRollCall();
// myRollCall();
// myRollCall();
// myRollCall();

// 8. Create a function *saveOutput* that accepts a function (that will accept one argument), and a string (that will act as a password).
// saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed as the argument.
// When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.
// function saveOutput(callback, password) {
//   let inputDb = {};
//   function func(input) {
//     if (input != password) {
//       result = callback(input);
//       let propertyName = input;
//       inputDb[propertyName] = result;
//       return result;
//     } else {
//       return inputDb;
//     }
//   }
//   return func;
// }

// const newFunction = saveOutput((input) => input * 2, "jose");
// console.log(newFunction(1));
// console.log(newFunction(2));
// console.log(newFunction(3));
// console.log(newFunction(4));
// console.log(newFunction("jose"));

// 9. Create a function *cycleIterator* that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked,
// the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of
// the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and
// continue on with the second after that, and so forth.
// function cycleIterator(array) {
//   let counter = 0;
//   function func() {
//     counter++;
//     return array[(counter - 1) % array.length];
//   }
//   return func;
// }
// const myFunction = cycleIterator([1, 2, 3]);
// console.log(myFunction());
// console.log(myFunction());
// console.log(myFunction());
// console.log(myFunction());
// console.log(myFunction());
// console.log(myFunction());

// 10. Create a function *defineFirstArg* that accepts a function and an argument. Also, the function being passed in will accept at least one argument.
// *defineFirstArg* will return a new function that invokes the passed-in function with the passed-in argument as the passed-in functions first argument.
// Additional arguments needed by the passed-in function will need to be passed into the returned function.
// function defineFirstArg(passedInFunc, passedInParam) {
//   function func() {
//     return passedInFunc(passedInParam);
//   }
//   return func;
// }
// const double = defineFirstArg((input) => {
//   return input * 2;
// }, 12);
// console.log(double());

// 11. Create a function *dateStamp* that accepts a function and returns a function. The returned function will accept however many arguments the passed-in
// function accepts, and return an object with a *date* key that contains a timestamp with the time of invocation, and an *output* key that contains the
// result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects
function dateStamp(callback) {
  function func() {
    return callback();
  }
}
