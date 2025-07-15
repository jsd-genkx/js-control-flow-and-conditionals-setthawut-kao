"use strict";

// TODO: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const number = 15;

if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
} else if (number % 3 === 0) {
  console.log("Fizz");
} else if (number % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("Not divisible by 3 or 5");
}

// task04 solution only if
let result = "";
if (num % 3 === 0) {
  result += "Fizz";
}
if (num % 5 === 0) {
  result += "Buzz";
}
if (result === "") {
  result = "Not divisible by 3 or 5";
}
console.log(result);