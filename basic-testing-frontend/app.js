import { calculateResult } from "./src/math.js";
import { outputResult, generateResultText } from "./src/output.js";
import { extractEnteredNumberValues } from "./src/parser.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = extractEnteredNumberValues(form);

  const result = calculateResult(numberInputs);
  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
