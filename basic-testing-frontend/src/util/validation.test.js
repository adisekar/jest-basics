import { validateStringNotEmpty, validateNumber } from "./validation";
import { test, expect, describe } from "vitest";

describe("validateStringNotEmpty", () => {
  test("should throw error for empty string", () => {
    const input = "";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).toThrowError(/must not be empty/);
  });

  test("should not throw error for valid values", () => {
    const input = "abc";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).not.toThrowError();
  });
});

describe("validateNumber", () => {
  test("should throw errror if number is not valid", () => {
    const input = "invalid";
    const resultFn = () => {
      validateNumber(input);
    };
    expect(resultFn).toThrowError(/Invalid number input/);
  });

  test("should not throw error for valid number", () => {
    const input = 5;
    const resultFn = () => {
      validateNumber(input);
    };
    expect(resultFn).not.toThrowError();
  });

  test("should throw error for string numeric values", () => {
    const input = "5";
    const resultFn = () => {
      validateNumber(input);
    };
    expect(resultFn).toThrowError();
  });
});
