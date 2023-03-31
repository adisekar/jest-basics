import { test, expect, describe, vi, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "Test title";
const testContent = "Test Content";

let testFormData = {
  title: testTitle,
  content: testContent,
  get(identifier) {
    return this[identifier];
  },
};

describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });
  test("should extract title and content from provided form data", () => {
    const { title, content } = extractPostData(testFormData);
    expect(title).toBe(testTitle);
    expect(content).toBe(testContent);
  });

  test("should have empty title and content", () => {
    testFormData.title = "";
    testFormData.content = "";

    const validateFn = () => {
      extractPostData(testFormData);
    };
    expect(validateFn).toThrowError("A title must be provided.");
  });

  test("should have empty content", () => {
    testFormData.content = "";

    const validateFn = () => {
      extractPostData(testFormData);
    };
    expect(validateFn).toThrowError("Content must not be empty!");
  });
});
