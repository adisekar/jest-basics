import writeData from "./io";
import { test, expect, vi } from "vitest";
import { promises as fs } from "fs";

// spies -> wrappers around fns or empty replacements that track if and how a fn was called
// mocks -> replacement for an api, that provide test specific behavior

// hoised and applies for entire file
vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => args[args.length - 1],
    },
  };
});

// No need to test nodejs fs.writeFile method, should use mock,
// as side effect writes to file system or database
test("should execute writeFile method", () => {
  const data = "Test";
  const testFileName = "test.txt";

  const promise = writeData(data, testFileName);
  expect(promise).resolves.toBeUndefined();

  // Actual fs.writeFile wont be called, only mock will be called, but we can test using real fn if called
  //   expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFileName, data);
});
