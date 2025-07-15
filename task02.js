"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "NaN";
// Try changing to "hello", 10, null, NaN

if (!isNaN(Number(userInput))) {
  console.log("It's a number");
} else {
  console.log("Not a number");
}

