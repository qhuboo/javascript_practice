// Closures, Scope, and Execution Context

// Because Javascript is a lexically scoped language functions are executed using the variable scope that in effect when they were defined, not the variable scope
// that is in effect when they are invoked. In order to implememnt lexical scoping, the internal state of a Javascript function object must include not only the code
// of the function but also a reference to the scope in which the function definition appears. This combination of a function object and a scope (a set of variable bindinds)
// in which the function's variables are resolved is called a closure in the computer science literature. Technically, all Javascript function are closures, but because
// most functions are invoked from the same scope that they were defined in, it normally doesn't really matter that there is a closure involved. Closures befome intersting
// when they are invoked from a different scope than the one they were defined in.

// Challenges
// 1. Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello."
function createFunction() {
  function hello() {
    console.log("hello");
  }
  return hello;
}

const newFunction = createFunction();
newFunction();

2. Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input
that was used when the function was created.