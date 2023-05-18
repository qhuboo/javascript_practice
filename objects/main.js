// Objects
// Key-value pairs in curly braces
// const myObj = { name: "Jose" };
// console.log(myObj.name);

// const anotherObj = {
//   alive: true,
//   answer: 42,
//   hobbies: ["Eat", "Sleep", "Code"],
//   beverage: {
//     morning: "Coffee",
//     afternoon: "Iced Tea",
//   },
//   action: function () {
//     return `Time for ${this.beverage.morning}`;
//   },
// };
// console.log(anotherObj["beverage"]["afternoon"]);
// console.log(anotherObj.action());

// Inheritance
const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroomm!";
  },
};

// const truck = Object.create(vehicle);
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels);
// console.log(truck.engine());

// console.log("Car Object:");
// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function () {
//   return "Whooosh!";
// };
// console.log(car);
// console.log(car.engine());
// console.log(car.wheels);

// // Now let's create a new object with the car object as the prototype
// console.log("Tesla Object:");
// const tesla = Object.create(car);
// console.log(tesla.wheels);
// console.log(tesla.engine());

// Band Object
console.log("Band Object:");
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};
// console.log(band);
// console.log(Object.keys(band));
// console.log(Object.values(band));

// band.keyboard = "Jose Lopez Renteria";
// console.log(band.hasOwnProperty("keyboard"));
// delete band.keyboard;
// console.log(band.hasOwnProperty("keyboard"));
// for (let job in band) {
//   console.log(`${job}: ${band[job]}`);
// }

// Destructuring Objects
// const { guitar: myVariable, vocals: myVariable2 } = band;
// console.log(myVariable);
// console.log(myVariable2);

// Another way
// const { drums, bass, guitar, vocals } = band;
// console.log(vocals);
// console.log(guitar);
// console.log(bass);
// console.log(drums);

// Destructuring Objects as function parameters
function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
