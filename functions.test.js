const {
  sumOfArray,
  reverseString,
  isPalindrome,
  findMax,
} = require("./functions");

//sum array tests
test("sums numbers", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
});

test("sums positive and negative", () => {
  expect(sumOfArray([-1, 5, -3])).toBe(1);
});

//reverse string test
test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
//palindrome test
test("identifies a valid palindrome", () => {
  expect(isPalindrome("Racecar")).toBe(true);
});

test("returns false if not", () => {
  expect(isPalindrome("hello")).toBe(false);
});

//find max test
test("returns the largest number", () => {
  expect(findMax([1, 5, 2, 8, 3])).toBe(8);
});

test("handles negative numbers", () => {
  expect(findMax([-10, -5, -20])).toBe(-5);
});
//error throw test
test("sumOfArray throws on non-array", () => {
  expect(() => sumOfArray("not an array")).toThrow("Input must be an array");
});
test("reverseString throws on non-string input", () => {
  expect(() => reverseString(123)).toThrow("Input must be a string");
});
test("isPalindrome throws on non-string input", () => {
  expect(() => isPalindrome(456)).toThrow("Input must be a string");
});
test("findMax throws on non-array input", () => {
  expect(() => findMax(999)).toThrow("Input must be an array");
});
