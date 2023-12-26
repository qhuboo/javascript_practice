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
function createOnceFunction(callback) {
  let counter = 0;
  let first = 0;
  function once(input) {
    if (counter == 0) {
      first = callback(input);
      console.log(`Run ${counter + 1}`, first);
      counter++;
      return first;
    } else {
      console.log(`Run ${counter + 1}`, first);
      counter++;
      return first;
    }
  }
  return once;
}

const onceFunction = createOnceFunction((input) => input * 2);
onceFunction(25);
onceFunction(3);
onceFunction(23);

// 5. Write a function *after* that takes the number of times the callback needs to be called before being executed as the first parameter
// and the callback as the second parameter.
