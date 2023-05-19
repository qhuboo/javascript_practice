// Javascript Classes
// class Pizza {
//   constructor(pizzaType, pizzaSize) {
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = "original";
//     this.toppings = [];
//   }
//   get pizzaCrust() {
//     return this.crust;
//   }
//   set pizzaCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   getToppings() {
//     return this.toppings;
//   }
//   setToppings(topping) {
//     this.toppings.push(topping);
//   }
//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
//     );
//   }
// }
// const myPizza = new Pizza("pepperoni", "small");
// myPizza.pizzaCrust = "thin";
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());

// We will now reduce our Pizza class to use a parent(super) class
// Super Class
class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "original";
  }
  get pizzaCrust() {
    return this.crust;
  }
  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}
// Instance(child) of the super class
// class specialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//   }
// }

// const mySpecialty = new specialtyPizza("medium");
// mySpecialty.slice();
