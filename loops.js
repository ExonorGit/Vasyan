const arr = [1, 12, 123, 1234];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], i);
}

console.log();

const arr2 = ["aboba", "ziliboba", "abobik", "abobus"];

for (let i = 0; i < 10; i++) {
  if (!arr2[i]) {
    break;
  }

  console.log(arr2[i]);
}

console.log();

let num = 0;

while (num < 0) {
  ++num;
  console.log(num);

  if (num === 190) {
    break;
  }
}

let num1 = 0;

do {
  console.log("hello");
  ++num1;
} while (num1 < 10);

console.log();

const fruits = ["banana", "apple", "orange", "mandarin"];

const func = (value) => {
  console.log(value);
};

func("abobik abobus");

fruits.forEach(func);
