import { expect, test } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

test("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  });
});

test("should generate a token value using promises", () => {
  const testUserEmail = "test@test.com";
  // need return for promise, so runner can wait
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

test("should generate a token value using async/await", async () => {
  const testUserEmail = "test@test.com";
  const token = await generateTokenPromise(testUserEmail);
  expect(token).toBeDefined();
});
