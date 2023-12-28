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
// function dateStamp(callback) {
//   let inputDb = {};
//   function func(input) {
//     const result = callback(input);
//     const now = new Date();
//     inputDb[now] = result;
//     return inputDb;
//   }
//   return func;
// }

// const newFunction = dateStamp((input) => input * 2);
// setTimeout(() => console.log(newFunction(4)), 1000);
// setTimeout(() => console.log(newFunction(2)), 2000);
// setTimeout(() => console.log(newFunction(98)), 3000);
// setTimeout(() => console.log(newFunction(74)), 4000);
// I used setTimeout because if I run the functions they execute at nominally at the same time so each result replaces the other.

// 12. Create a function *censor* that accepts no arguments. *censor* will return a function that will accept either two strings, or one string. When two strings
// are given, the returned function will hold onto the strings as a pair, for future use. When on string is given, the returned function will return the same
// string, except all instances of first strings(of saved pairs) will be replaced with their corresponding second strings(of those saved pairs).
// function censor() {
//   let strings = {};
//   function func(firstString, secondString) {
//     if (firstString && secondString) {
//       strings[firstString] = secondString;
//     } else if (firstString) {
//       let words = firstString.split(/\s+/);
//       let censored = words.map((word) => {
//         if (strings[word]) {
//           return strings[word];
//         }
//         return word;
//       });
//       return censored.join(" ");
//     } else {
//       console.log("Please provided either one string or two");
//     }
//   }
//   return func;
// }

// const myFunction = censor();
// myFunction("Jose", "Cucas");
// myFunction("Alan", "Becho");
// myFunction("Misael", "Michi");
// console.log(myFunction("I miss the homie Misael"));

// 13. There's no such thing as private properties on a Javascript object! But, maybe there are? Implement a function createSecretHolder(secret)
// which acccepts any value as a secret and returns an object with ONLY two methods. getSecret() which returns the secret and setSecret() which sets the secret
// function createSecretHolder(secret) {
//   let secretObject = {
//     secret: secret,
//     getSecret: function getSecret() {
//       return this.secret;
//     },
//     setSecret: function setSecret(newSecret) {
//       this.secret = newSecret;
//     },
//   };
//   return secretObject;
// }

// let someSecret = createSecretHolder("Jose");
// console.log(someSecret.getSecret());
// someSecret.setSecret("Alan");
// console.log(someSecret.secret);
// Although this implementation works it misses the point of the exercise which is to keep the secret property private and inaccessible from the
// object itself. We want this secret property to be captured by the closure of the function createSecretHolder. Here is a correct implementation
// function createSecretHolder(secret) {
//   return {
//     getSecret: function () {
//       return secret;
//     },
//     setSecret: function (newSecret) {
//       secret = newSecret;
//     },
//   };
// }

// const someOtherSecret = createSecretHolder("Misael");
// console.log(someOtherSecret.getSecret());
// someOtherSecret.setSecret("Alan");
// console.log(someOtherSecret.getSecret());
// In this implementation, unlike our first attempt, we don't have access to the secret property directly. We cannot retrieve the secret using the usual
// someOtherSecret.secret. The property is rendered private and can only be accessed through the method getSecret() and set through the setSecret() method.

// 14. Write a function, *callTimes*, that returns a function. The new function should return the number of times it's been called.
// function callTimes() {
//   let counter = 0;
//   function func() {
//     counter++;
//     return counter;
//   }
//   return func;
// }

// const myFunction = callTimes();
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// console.log(myFunction());

// 15. Create a function *roulette* that accepts a number (let us call it n), and returns a function. The returned function will take no arguments,
// and will return the string 'spin' the first *n-1* number of times it is invoked. On the very next invocation (the nth invocation), the returned
// function will the string 'win'. On every invocation after that, the returned function returns the string 'pick a number to play again'
// function roulette(number) {
//   let i = 0;
//   return function () {
//     i++;
//     if (i <= number - 1) {
//       return "spin";
//     } else if (i == number) {
//       return "win";
//     } else {
//       return "pick a number to play again";
//     }
//   };
// }

// const letsPlay = roulette(3);
// console.log(letsPlay());
// console.log(letsPlay());
// console.log(letsPlay());
// console.log(letsPlay());
// console.log(letsPlay());
// console.log(letsPlay());
// console.log(letsPlay());
// console.log(letsPlay());

// 16. Create a function *average* that accepts no arguments, and returns a function(that wil accept either a number as its lone argument, or no arguments at all).
// When the returned function is invoked with a number, the output should be the average of all the numbers that have been passed into that function(duplicate
// numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function
// is invoked with no arguments before any numbers are passed in, then it should return 0.
// function average() {
//   const numbers = [];
//   let sum = 0;
//   return function (number) {
//     if (numbers.length == 0 && !number) {
//       return 0;
//     } else if (number) {
//       numbers.push(number);
//       sum += number;
//       return sum / numbers.length;
//     } else {
//       return sum / numbers.length;
//     }
//   };
// }

// const myAverageFunction = average();
// console.log(myAverageFunction());
// console.log(myAverageFunction(2));
// console.log(myAverageFunction(3));
// console.log(myAverageFunction());
// console.log(myAverageFunction(29));

// 17. Create a function *makeFuncTester* that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The
// returned function should return *true* if the first elements(of each sub-array) being passed into the callback all yields the corresponding second elements
// (of the same sub-array). Otherwise, the returned function should return false.
// function makeFuncTester(array) {
//   return function (callback) {
//     for (let i = 0; i < array[0].length - 1; i++) {
//       if (
//         callback(array[0][i]) != array[0][i + 1] &&
//         callback(array[1][i]) != array[1][i + 1]
//       ) {
//         return false;
//       }
//       return true;
//     }
//   };
// }

// const checkDouble = makeFuncTester([
//   [1, 2],
//   [3, 6],
// ]);

// console.log(checkDouble((input) => input * 2));

// 18. Create a function *makeHistory* that accepts a number (which will serve as a limit), and returns a function (that will accept a string).
// The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per inovcation only).
// Every time a string is passed into the function, the function should return that same string with the word 'done' after it(separated by a space).
// However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted
// string with the wored 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the
// function should return a string 'nothing to do'
// function makeHistory(number) {
//   const stringHistory = [];
//   return function (string) {
//     if (stringHistory.length == 0 && string == "undo") {
//       return "nothing to do";
//     } else if (string && string != "undo") {
//       stringHistory.push(string);
//       return string + " done";
//     } else {
//       let last = stringHistory[stringHistory.length - 1];
//       stringHistory.pop();
//       return last + " undone";
//     }
//   };
// }

// const stringFunction = makeHistory(3);
// console.log(stringFunction("undo"));
// console.log(stringFunction("First"));
// console.log(stringFunction("undo"));
// console.log(stringFunction("undo"));
// console.log(stringFunction("Second"));
// console.log(stringFunction("Third"));
// console.log(stringFunction("undo"));
// console.log(stringFunction("undo"));
// console.log(stringFunction("undo"));

// 19. Inspect the commented out test cases carefully if you need help to understand these intructions.
// Create a funciton *blackjack* that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function.
// The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
// On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed to the DEALER function.
// On the SECOND invocation of the PLAYER function, it will return either:
// 1. The first number in the array that was passed into the *blackjack* PLUS the sume of the two numbers passed in as arguments into the DEALER function,
// IF that sum is 21 or below, OR
// 2. The string 'bust' if that sum is over 21.
// If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!'(but unlike 'bust', the 'you are done!' output
// will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:
// 1. The most recent sum plus the next number in the array(a new sum) if that sum is 21 or less, OR
// 2. The string 'bust' if the new sum is over 21.
// And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue
// on to give the next sume with the next number in the array, and so forth.
// You may assume that the given array is long enough to give a 'bust' before running out of numbers.
// BONUS: Implement *blackjack* so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array
// after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.
function blackjack(array) {
  let playerCounter = 0;
  return function DEALER(numberOne, numberTwo) {
    let isBust = false;
    let currentSum = numberOne + numberTwo;
    return function PLAYER() {
      if (playerCounter == 0) {
        playerCounter++;
        return currentSum;
      } else {
        if (!isBust) {
          currentSum += array[playerCounter - 1];
          playerCounter++;
          if (currentSum <= 21) {
            return currentSum;
          } else {
            isBust = true;
            return "bust";
          }
        } else {
          return "You are done!";
        }
      }
    };
  };
}
const dealerFunction = blackjack([1, 4, 2, 8, 5, 3, 9]);
const playerFunction = dealerFunction(1, 1);
console.log(playerFunction());
console.log(playerFunction());
console.log(playerFunction());
console.log(playerFunction());
console.log(playerFunction());
console.log(playerFunction());
console.log(playerFunction());
