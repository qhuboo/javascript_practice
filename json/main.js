//JSON: JavaScript Object Notation
// JSON is used to send and receive data.
// JSON is a text format that is completely language independent.
// Meaning JSON is used to send and receive data in many languages not just Javascript.

// Basics of JS Objects
const myObj = {
  name: "Jose",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

// Convert an object to a JSON string
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON); // This outputs string
console.log(sendJSON.name); // This outputs undefined since sendJSON is a string and thus anything contained cannot be accessed like an object property (dot notation)

// Convert back into an object
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
console.log(receiveJSON.name);
