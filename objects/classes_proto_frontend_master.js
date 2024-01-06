// There are multiple ways to create objects
// One way is to create them using object literals
// let empty = {}; // This is an empty object
// let point = { x: 0, y: 0 }; // An object with two properties x and y each with a value of 0
// const user1 = {
//   // This object even holds a function we call increment, these functions inside objects are called "methods"
//   name: "Will",
//   score: 3,
//   increment: function () {
//     user1.score++;
//   },
// };

// We can also create objects using Object. create(). Object.create() creates a new object, using its first argument as the prototype of that object.
// let o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y.
// console.log(o1.x + o1.y); // 3
// o1.z = 4; // We can also create and change properties using dot notation.
// console.log(o1.z); // 4

// We can also use a function to create objects
// function userCreator(name, score) {
//   const newUser = {};
//   newUser.name = name;
//   newUser.score = score;
//   newUser.increment = function () {
//     newUser.score++;
//   };
//   return newUser;
// }
// const user1 = userCreator("Will", 3);
// const user2 = userCreator("Tim", 5);
// user1.increment();

// Problems: Each time we create a new user we make space in our computer's
// memory for all our data and functions. But our functions are just copies
// Is there a better way?

// Using the prototype chain
// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionStore);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }

// const userFunctionStore = {
//   increment: function () {
//     this.score++;
//   },
//   login: function () {
//     console.log("Logged in");
//   },
// };

// const user1 = userCreator("Will", 3);
// const user2 = userCreator("Tim", 5);
// user1.increment();
// console.log(user1.__proto__);

// function userCreator(name, score) {
//   this.name = name;
//   this.score = score;
//   console.log(this);
// }

// userCreator.prototype.increment = function () {
//   this.score++;
// };
// userCreator.prototype.login = function () {
//   console.log("login");
// };

// const user1 = new userCreator("Eva", 9);
// user1.increment();

// Challenges
// 1. Create a function that has two parameters *name* and *age* and returns an object.
// Let's call this function *makePerson*. This function will:
//    1. Create an empty object
//    2. Add a *name* property to the newly created object with its value being the 'name' argument passed into the function
//    3. Add an *age* property to the newly created object with its value being the 'age' argument passed into the function .
//    4. Return the object
// function makePerson(name, age) {
//   const newObject = {};
//   newObject.name = name;
//   newObject.age = age;
//   return newObject;
// }

// const newPerson = makePerson("Jose", 30);
// console.log(newPerson);

// 2. Inside *personStore* object, create a property *greet* where the value is a function that logs "hello"
// const personStore = {
//   greet: function () {
//     console.log("hello");
//   },
// };

// personStore.greet();

// 3. Create a function *personFromPersonStore* that takes as input a *name* and an *age*. When called, the function
// will create person objects using the Object.create method on the *personStore* object.
// function personFromPersonStore(name, age) {
//   const newPerson = Object.create(personStore);
//   newPerson.name = name;
//   newPerson.age = age;
//   return newPerson;
// }
// const newNewPerson = personFromPersonStore("Alan", 28);
// console.log(newNewPerson);
// newNewPerson.greet();

// 4. Without editing the code you've already written, add an *introduce* method to the *personStore*
// object that logs "Hi, my name is [name]"

// newNewPerson.introduce = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// newNewPerson.introduce();

// 5. Create a function *PersonConstructor* that uses the *this* keyword to save a single property onto its scope called *greet*.
// *greet* should be a function that logs the string "hello"
// function PersonConstructor() {
//   this.greet = function () {
//     console.log("hello");
//   };
// }

// const person5 = new PersonConstructor();
// console.log(person5);
// person5.greet();

// 6. Create a function *personFromContructor* that takes as input *name* and an *age*.
// When called, the function will create person objects using the *new* keyword instead of the Object.create method.

// function personFromContructor(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person6 = new personFromContructor("Misael", 27);
// console.log(person6);

// 7. Without editing the code you've already written, add an *introduce* method to the *PersonConstructor function that logs "Hi, my name name is [name]"
// PersonConstructor.prototype.introduce = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// const person7 = new PersonConstructor();
// person7.name = "Noah";
// person7.introduce();

// 8. Create a class *PersonClass*. *PersonClass* should have a constructor that is passed an input of *name* and saves it to a property by the same name.
// *PersonClass* should also have a method called *greet* that logs the string "hello"
// class PersonClass {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log("hello");
//   }
// }

// const person8 = new PersonClass("Luh Homie");
// console.log(person8);
// person8.greet();

// 9. Create a class *DeveloperClass* that creates objects by extending the *PersonClass* class. In addition to having a *name* property and *greet*
// method, *DeveloperClass* should have an introduce method. When called, *introduce* should log the string "Hello world, my name is [name]"
// class DeveloperClass extends PersonClass {
//   constructor(name) {
//     super(name);
//   }
//   introduce() {
//     console.log(`Hello World, my name is ${this.name}`);
//   }
// }

// const developer = new DeveloperClass("Lucas");
// console.log(developer);
// developer.greet();
// developer.introduce();

// 10. Create an object *adminFunctionStore* that has access to all methods in the *userFunctionStore* object, without copying them over
// individually.
const userFunctionStore = {
  login: function () {
    console.log("login");
  },
  logout: function () {
    console.log("logout");
  },
};

function adminFunctionStore() {
  const admin = Object.create(userFunctionStore);
  return admin;
}

// const person10 = adminFunctionStore();
// person10.login();
// person10.logout();

// 11. Create an *adminFactory* function that creates an object with all the same data fields (and default values) as objects of the
// *userFactory* class, but without copying each data field individually
function userFactory(name, age) {
  return {
    name: name,
    age: age,
    type: "user",
  };
}

function adminFactory(name, age) {
  const user = userFactory(name, age);
  user.type = "admin";
  const adminPrototype = adminFunctionStore();
  Object.setPrototypeOf(user, adminPrototype);
  return user;
}

// const person11 = userFactory("Jose", 30);
// console.log(person11);

// 12. Then make sure the value of the 'type' field for *adminFactory* objects is 'admin' instead of 'user'
// const person12 = adminFactory("Alan", 28);
// console.log(person12);

// 13. Make sure that *adminFactory* objects have access to *adminFunctionStore* methods, without copying them over.
// const person13 = adminFactory("Misael", 27);
// console.log(person13);
// person13.login();

// 14. Create a method called *sharePublicMessage* that logs "Welcome Users!" and will be available to *adminFactory* objects, but not
// *userFactory* objects. Do not add this method directly in the *adminFactory* function.

adminFunctionStore.prototype.sharePublicMessage = function () {
  console.log("Welcome users!");
};
