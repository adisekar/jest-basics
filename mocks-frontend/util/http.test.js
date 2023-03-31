import { test, expect, describe, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
  if (typeof options.body !== "string") {
    return reject("Not valid JSON");
  }
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

describe("http test", () => {
  test("should return any available response data", () => {
    const testData = { key: "test" };
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  test("should convert provided data to JSON before sending request", async () => {
    const testData = { key: "test" };
    let errorMessage = "";

    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }
    return expect(errorMessage).not.toBe("Not valid JSON");
  });

  test("should throw an http error for non-ok responses", () => {
    testFetch.mockImplementationOnce((url, options) => {
      if (typeof options.body !== "string") {
        return reject("Not valid JSON");
      }
      return new Promise((resolve, reject) => {
        const testResponse = {
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });

    const testData = { key: "test" };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
