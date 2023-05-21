// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

// Callbacks
// Callbacks are functions that are arguments to other function, for example we may have a function called firstFunction that has
// some parameters and a function called callback as another. Now this function does some other stuff and then in addition will call
// the callback function
// function firstFunction(parameters, callback) {
//   // do stuff
//   callback();
// }

// // The problem with using callbacks
// // AKA "callback hell"
// firstFunction(parameter, function () {
//   // do stuff
//   secondFunction(parameter, function () {
//     // do stuff
//     thirdFunction(parameter, function () {
//       // do stuff
//     });
//   });
// });

// Promises
// 3 states of promises: Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! Resolved the promise!");
//   } else {
//     reject("No! Rejected the promise!");
//   }
// });

// console.log(myPromise); // This outputs Promise { 'Yes! Resolved the promise!' } but not in the way we would hope, that is, we want it to log the value of the function

// To get at the value we use thenables as follows
// myPromise.then((value) => {
//   console.log(value);
// });
// This prints out what we wanted, "Yes! Resolved the promise!"

// Like callbacks we can chain thenables as we did callback functions as so:
// myPromise
//   .then((value) => {
//     return value + " Add something";
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// This chains the first result and adds " Add something" and passes it to the second thenable to print out

// In this promise we have set a timeout of 3 seconds (3000ms) until the callback function is activated
// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resolved!");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then(function (value) {
//   console.log(value);
// });
// Even though we have called myNextPromise before myPromise we will see that myPromise resolves before myNextPromise due to the setTimeout function
// This illustrates that Javascript does not automatically work with asynchronous code so we need to manually set timeouts for there to be a delay.

// The point of timeouts is to give the client time to execute a request to a server and receive the response before it does anything with such a respose.
// The fetch API helps us with that
// const users = fetch("https://jsonplaceholder.typicode.com/users");
// pending
// console.log(users); // The output of this is Promise {<pending>}, meaning we used the users variable before the data was received

// We can resolve this with thenables
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// So does this mean we can save this data to a variable like we did with const users = fetch("https://jsonplaceholder.typicode.com/users")?
// Let's see
// const newUsers = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     return data;
//   });

// console.log(newUsers);
// We run into the same problem as before, namely, that the output is Promise{<pending>} since we executed console.log(newUsers) *before* we ran the fetch request
// because Javascript doesn't wait for that request to be resolved before it runs console.log(newUsers)

// All this is fixed with async and await in around 2017
// Async/Await
// const myUsers = {
//   userList: [],
// };

// async function myCoolFunction() {
//   const respose = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await respose.json();
//   return data;
// }
// myCoolFunction();

// const anotherFunction = async () => {
//   const data = await myCoolFunction();
//   myUsers.userList = data;
//   return myUsers.userList;
// };

//Example 1: Retrieving User Data
// let getAllUserEmails = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   let userEmailArray = data.map((user) => {
//     return user.email;
//   });
//   postToWebPage(userEmailArray);
// };

// // Since this function is called within the getAllUserEmails function and that function is an async function then postToWebPage need not be an async function
// let postToWebPage = (data) => {
//   console.log("This is the user data");
//   console.log(data);
// };

// getAllUserEmails();

// Example 2: Second parameter for fetch is an object
// async function getDadJoke() {
//   let response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: { Accept: "application/json" },
//   });
//   let data = await response.json();
//   console.log(data);
// }

// getDadJoke();

// Example 3: Posting data
// let jokeObject = {
//   id: "VvP7U0D5TCd",
//   joke: 'I was at the library and asked if they have any books on "paranoia", the librarian replied, "yes, they are right behind you"',
// };

// async function postData(jokeObj) {
//   let response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(jokeObj),
//   });
//   let data = await response.json();
//   console.log("Response:");
//   console.log(response.headers);
//   console.log("Data:");
//   console.log(data.headers);
// }

// postData(jokeObject);

// Example 4: Retrieving data with URL parameters
// No longer works
let requestJoke = async (firstName, lastName) => {
  let response = await fetch(
    `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  );
  let data = await response.json();
  console.log(data.value);
};

requestJoke("Chuck", "Norris");

// Abstract into functions
// Maybe from a form
const getDataFromForm = () => {
  const requestObject = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObject;
};

const buildRequestURL = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJk = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const joke = data.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// Call all functions
// Procedural workflow function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestURL = buildRequestURL(requestData);
  await requestJk(requestURL);
  console.log("Finished!");
};

processJokeRequest();
