// Reviewed AI-generated code with configuration and naming fixes.

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL || "http://localhost:8080";

function calculateSum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function doubleValue(value) {
  return value * 2;
}

function fetchData() {
  console.log("fetching from " + API_URL + " with key " + API_KEY);
  return { ok: true };
}

module.exports = { calculateSum, doubleValue, fetchData };