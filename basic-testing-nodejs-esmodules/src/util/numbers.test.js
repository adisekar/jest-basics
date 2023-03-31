import { transformToNumber } from "./numbers";
import { test, expect } from "vitest";

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
