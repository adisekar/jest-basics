import { cleanNumbers, transformToNumber } from "./numbers";
import { describe, test, expect } from "vitest";

describe("transformToNumber()", () => {
  test("should transform a string to a type number", () => {
    const input = "1";
    const result = transformToNumber(input);
    expect(result).toBeTypeOf("number");
  });

  test("should yield NaN for invalid numbers", () => {
    const input = "invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  test("should return an array of number values if aarray of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toBeTypeOf("number");
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  test("should throw an error if an array with atleast one empty string is provided", () => {
    const numberValues = ["", 1];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrowError();
  });
});
