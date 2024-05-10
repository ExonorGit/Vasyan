console.log(visible, "undef"); // undefined
// console.log(invisible); // error

let invisible = 4321;
var visible = 1234;

// var = function (хоистинг)

const a = 10;
const b = 15;

// var let const

console.log(a, b, "global"); // 10 15

console.log(sum(), "no error"); // no error

function sum() {
  //обычная функция, синтаксис до ES6
  const a = 3;
  const b = 4;

  console.log(a, b, "func"); // 3 4

  return a + b;

  //
}

{
  const a = 228;
  const b = 322;

  console.log(a, b, "scope"); // 228 322
}

{
  console.log(a, b, "scope2"); // 10 15
}

const res = sum();

console.log(sum()); // 7

console.log(sum1()); // error

const sum1 = () => {
  //стрелочная функция, синтаксис ES6
  const a = 3;
  const b = 4;

  return a + b;
};

console.log(sum1());
