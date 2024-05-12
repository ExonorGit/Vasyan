// Object

const axe = {
  hp: 1000,
  damage: 50,
  name: "Axe",
  type: "strength",
  isMelee: true,
};

const invoker = {
  hp: 800,
  damage: 30,
  name: "Karl",
  type: "intelligence",
  isMelee: false,
  abilities: {
    q: "quas",
    w: "wex",
    e: "exort",
  },
};

console.log(axe, invoker);
console.log(axe.name, invoker.name);
console.log(axe.moveSpeed);
console.log(invoker.abilities.q);

invoker.abilities.q = "govno";

console.log(invoker.abilities.q);

const cars = ["Toyota", "BMW", "Cadillac"];
cars.push("Mercedes"); //norm
//cars = []; // error

console.log(cars);
console.log(cars[2]);

const invoker1 = {
  hp: 123,
};

const invoker2 = invoker1;
console.log(invoker2.hp); //123

invoker2.hp = 679;

console.log(invoker1.hp); //679

let num1 = 15;
let num2 = num1;

num2 = 30;

console.log("aboba".split("").join("bar"));

console.log(num1); // 15
