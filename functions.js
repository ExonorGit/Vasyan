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

//console.log(sum1()); // error

const sum1 = () => {
  //стрелочная функция, синтаксис ES6
  const a = 3;
  const b = 4;

  return a + b;
};

console.log(sum1());

function calculate(a = 15, b = 10, operation = "addition") {
  if (operation === "divide") {
    return a / b;
  }
  if (operation === "addition") {
    return a + b;
  }
  if (operation === "subtraction") {
    return a - b;
  }
  if (operation === "multiplication") {
    return a * b;
  }
  return null;
  //Параметры: a -первое число, b - второе число, operation - операция в виде строки (Деление,умножение,вычитание,сложение)
}
console.log(calculate(30, 20, ""));
const calcRef = calculate; //Ссылка на функцию

function pow(init, power, number = init) {
  if (power === 1) {
    return number;
  }
  number *= init;
  return pow(init, --power, number);
}
console.log(pow(5, 10));

function sin(x, termCount) {
  //termCount КОЛИЧЕСТВО СЛОГАЕМЫХ
  let isPlus = true;
  let result = x;
  let power = 1;
  for (let i = 0; i < termCount; i++) {
    if (isPlus) {
      result += pow(x, power) / getFactorial(power);
    } else {
      result -= pow(x, power) / getFactorial(power);
    }
    isPlus = !isPlus;
    power = power + 2;
  }
  return result;
}
function getFactorial(number) {
  let result = 1;
  while (number > 1) {
    result = result * number;
    --number;
  }
  return result;
}
console.log(sin(0.2, 2));
