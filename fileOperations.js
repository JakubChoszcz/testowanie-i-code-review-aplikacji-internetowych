const fs = require("fs");

// Funkcja zapisująca tablicę osób do pliku CSV
function savePeopleToCSV(people, filename) {
  const headers = Object.keys(people[0]);
  const csvLines = [headers.join(",")];

  people.forEach((person) => {
    const values = Object.values(person);
    csvLines.push(values.join(","));
  });

  fs.writeFileSync(filename, csvLines.join("\n"));
}

// Funkcja wprowadzająca błędne dane do pliku CSV
function saveInvalidDataToCSV(filename) {
  const invalidData = [
    "id,name,age,salary,isStudent",
    "abc,123,tekst,true,1.23",
  ];

  fs.writeFileSync(filename, invalidData.join("\n"));
}

module.exports = {
  savePeopleToCSV,
  saveInvalidDataToCSV,
};
