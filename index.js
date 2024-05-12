let num1 = 1000;
let num2 = 500;
let num3 = 100;

const result = (num1 * num2) / num3;
console.log(result);

const string1 = "Vasyan";
const string2 = "Molodec!";
const string3 = "NeMolodec!";
console.log(string1 + " " + string2);

console.log(string1 + " " + undefined);

console.log(string1 + true);

console.log(null - undefined);

console.log(10 - undefined);

let vasyan = "Vasyan";
let isVasyanWon = null;

if (isVasyanWon) {
  vasyan = vasyan + string2;
} else if (isVasyanWon === null) {
  vasyan = vasyan + string3;
} else {
  vasyan = vasyan + vasyan;
}
console.log(vasyan);
const pivo = num1 * num2;
console.log(pivo);
function square(x) {
  return x * x;
}
var demo = square(3);
console.log(square);
