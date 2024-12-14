const fs = require("fs");
const assert = require("assert");

// Funkcja sprawdzająca, czy wartość jest odpowiedniego typu
function checkDataType(value, expectedType) {
  switch (expectedType) {
    case "int":
      return Number.isInteger(Number(value));
    case "float":
      return !Number.isInteger(Number(value)) && !isNaN(Number(value));
    case "string":
      return typeof value === "string" && value.length > 0;
    case "boolean":
      return value === "true" || value === "false";
    default:
      return false;
  }
}

// Funkcja weryfikująca poprawność pliku CSV
function verifyCSVFile(filename, expectedCount) {
  const expectedTypes = {
    id: "int",
    name: "string",
    age: "int",
    salary: "float",
    isStudent: "boolean",
  };

  const fileContent = fs.readFileSync(filename, "utf-8");
  assert.notStrictEqual(fileContent.length, 0, "Plik nie może być pusty");

  const lines = fileContent.trim().split("\n");
  const expectedLineCount = expectedCount + 1;

  assert.strictEqual(
    lines.length,
    expectedLineCount,
    `Plik powinien zawierać ${expectedLineCount} linijek (1 nagłówek + ${expectedCount} linijek danych)`
  );

  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");

    headers.forEach((header, index) => {
      const value = values[index];
      const expectedType = expectedTypes[header];
      assert.strictEqual(
        checkDataType(value, expectedType),
        true,
        `Błąd typu danych w linijce ${i} dla pola ${header}: oczekiwano ${expectedType}, otrzymano wartość ${value}`
      );
    });
  }
}

module.exports = {
  checkDataType,
  verifyCSVFile,
};
