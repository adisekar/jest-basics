import { test, expect, describe, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  test("should execute logFn if provided", () => {
    const logger = vi.fn(); // jest.fn() empty fn -> spy
    generateReportData(logger);
    expect(logger).toBeCalledTimes(1);
  });
});
