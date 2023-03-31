import { test, expect, describe, vi, beforeEach } from "vitest";
import { showError } from "./dom";
import { Window } from "happy-dom";
import fs from "fs";
import path from "path";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

// reset document before every test. empty it and set it
beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent);
});

test("should add an error paragraph to id='errors' element", () => {
  showError("Test");

  const errorsEl = document.getElementById("errors");
  const errorsParagraph = errorsEl.firstElementChild;

  expect(errorsParagraph).not.toBeNull();
});

test("should not contain an error paragraph initially", () => {
  const errorsEl = document.getElementById("errors");
  const errorsParagraph = errorsEl.firstElementChild;

  expect(errorsParagraph).toBeNull();
});

test("should output the provided message in error paragraph", () => {
  const testErrorMessage = "Test";
  showError(testErrorMessage);

  const errorsEl = document.getElementById("errors");
  const errorsParagraph = errorsEl.firstElementChild;

  expect(errorsParagraph.textContent).toBe(testErrorMessage);
});
