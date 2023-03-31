import { test, expect, vi } from "vitest";
import { validateNotEmpty } from "./validation";

test("should throw an error if empty string is provided", () => {
  const testInput = "";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrowError();
});

test("should throw an error if empty string with spaces is provided", () => {
  const testInput = "   ";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrowError();
});

test("should throw an error with provided error message", () => {
  const testInput = "";
  const testErrorMessage = "Input is empty";

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrowError(testErrorMessage);
});
