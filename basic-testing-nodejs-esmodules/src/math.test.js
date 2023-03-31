import { add } from "./math";
import { test, expect } from "vitest";

test("should add 1 + 2 + 3 to equal 6", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

test("should yield NaN if one invalid number is provided", () => {
  // Arrange
  const numbers = [1, "abc", 3];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBeNaN();
});

test("should work if numeric strings are provided", () => {
  const numbers = ["1", "2", "3"];
  const expectedResult = numbers.reduce((acc, curr) => {
    // +curr means convert if string to number
    return acc + +curr;
  }, 0);
  const result = add(numbers);

  expect(result).toBe(expectedResult);
});

test("should throw an error if no value is passed", () => {
  // to get error use a wrapper fn which would call our function. we dont call fn manually
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrowError(/ is not iterable/);
});

test("should throw an error if provided with multiple arguments instead of array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrowError(/ is not iterable/);
});
