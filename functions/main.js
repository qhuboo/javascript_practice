// Functions

// Methods = Built-in Functions!

console.log("JOSE".toLowerCase());

// Functions we define
function sum(a, b) {
  if (b === undefined) {
    return a + a;
  }
  return a + b;
}

console.log(sum(4, 9));

function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("joselukas24@gmail.com"));

// Anomymous arrow function
const nameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
};

console.log(nameFromEmail("forstuff214@gmail.com"));

// Another Example
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("jOsE"));
