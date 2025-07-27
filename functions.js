function sumOfArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== "number") {
      throw new Error("One of the values is not a number");
    }
    sum += value;
  }

  return sum;
}

function reverseString(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalized === normalized.split("").reverse().join("");
}

function findMax(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  if (arr.length === 0) throw new Error("Array cannot be empty");
  arr.forEach((val) => {
    if (typeof val !== "number")
      throw new Error("All elements must be numbers");
  });
  return Math.max(...arr);
}

module.exports = {
  sumOfArray,
  reverseString,
  isPalindrome,
  findMax,
};
