//1. print odd numbers in an array
// anonymous function
let a = [1, 2, 3, 4];
function odd(arr) {
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      final.push(arr[i]);
    }
  }
  return final;
}
console.log(odd(a));

// arrow function
let final = [];
let final1 = [];
let odder = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 !== 0 ? final.push(arr[i]) : final1.push(arr[i]);
  }
  return final;
};
console.log(odder(a));

// 2.Convert all the strings to title caps in a string array
// anonymous function
let b = ["hi", "hello", "world", "karthi"];
let titleCaps = function (arr) {
  let title = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i].split("");
    x.splice(0, 1, x[0].toUpperCase());
    title.push(x.join(""));
  }
  return title;
};
console.log(titleCaps(b));

// arrow function
let titleCaps1 = (arr) => {
  let title = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i].split("");
    x.splice(0, 1, x[0].toUpperCase());
    title.push(x.join(""));
  }
  return title;
};
console.log(titleCaps1(b));

// 3.Sum of all numbers in an array
// anonymous function
let no = [5, 1, 2, 5, 5];
function addNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(addNumbers(no));

// arrow function
let addNumbers1 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(addNumbers1(no));

// 4.Return all the prime numbers in an array
// anonymous function
let no1 = [
  1, 2, 3, 5, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
  64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
  83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];
function primeNumbers(arr) {
  let final = [2, 3, 5, 7];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] % 1 === 0 &&
      arr[i] % arr[i] === 0 &&
      arr[i] > 1 &&
      arr[i] % 2 !== 0 &&
      arr[i] % 3 !== 0 &&
      arr[i] % 5 !== 0 &&
      arr[i] % 7 !== 0
    ) {
      final.push(arr[i]);
    }
  }
  console.log(final);
}
primeNumbers(no1);

// arrow function
let primeNumbers1 = (arr) => {
  let final = [2, 3, 5, 7];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] % 1 === 0 &&
      arr[i] % arr[i] === 0 &&
      arr[i] > 1 &&
      arr[i] % 2 !== 0 &&
      arr[i] % 3 !== 0 &&
      arr[i] % 5 !== 0 &&
      arr[i] % 7 !== 0
    ) {
      final.push(arr[i]);
    }
  }
  console.log(final);
};
primeNumbers1(no1);

// 5.Return all the palindromes in an array
// anonymous function
let array = ["racecar", "aba", "abc", "car", "ada", "cool"];
function palindromes(arr) {
  let xxx = [];
  for (let i = 0; i < arr.length; i++) {
    let final = [];
    let x = arr[i].split("");
    for (let j = 0; j < x.length; j++) {
      let x1 = x.indexOf(x[j]);
      let x2 = x.lastIndexOf(x[j]);
      if (x1 !== x2) {
        final.push(1);
      }
    }
    if (final.length == x.length - 1) {
      xxx.push(arr[i]);
    }
  }
  return xxx;
}
console.log(palindromes(array));

// arrow function
let palindromes1 = (arr) => {
  let xxx = [];
  for (let i = 0; i < arr.length; i++) {
    let final = [];
    let x = arr[i].split("");
    for (let j = 0; j < x.length; j++) {
      let x1 = x.indexOf(x[j]);
      let x2 = x.lastIndexOf(x[j]);
      if (x1 !== x2) {
        final.push(1);
      }
    }
    if (final.length == x.length - 1) {
      xxx.push(arr[i]);
    }
  }
  return xxx;
};
console.log(palindromes1(array));

//6. Return median of two sorted arrays of the same size.
let NumberOfArrays1 = [1, 26, 15, 12, 38];
let NumberOfArrays2 = [30, 13, 17, 2, 45];
function sortedArray(a, b) {
  let ab = a.concat(b);
  ab.sort((a, b) => {
    return a - b;
  });
  let len = ab.length / 2;
  let x = ab[len];
  let y = ab[len - 1];
  let xy = (x + y) / 2;
  return xy;
}
console.log(sortedArray(NumberOfArrays1, NumberOfArrays2));

// 7.Remove duplicates from an array
let NumberOfArr1 = [1, 1, 15, 2, 2];
function duplicates(x) {
  let final = [];
  for (let i = 0; i < x.length; i++) {
    let x1 = x.indexOf(x[i]);
    let x2 = x.lastIndexOf(x[i]);
    if (x1 === x2) {
      final.push(x[i]);
    }
  }
  console.log(...final);
}
duplicates(NumberOfArr1);

//8 Rotate an array by k times
let a2 = [1, 2, 3, 4, 5, 6, 7, 8];
let k1 = 4;
function rotate(arr) {
  let a = arr.splice(k1, arr.length);
  for (let i = 0; i < k1; i++) {
    a.push(arr[i]);
  }
  console.log(a);
}
rotate(a2);
