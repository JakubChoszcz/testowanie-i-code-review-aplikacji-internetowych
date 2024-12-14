// Klasa reprezentująca osobę z różnymi typami danych
class Person {
  constructor(id, name, age, salary, isStudent) {
    this.id = id; // liczba całkowita (int) - unikalny identyfikator
    this.name = name; // tekst (string) - imię osoby
    this.age = age; // liczba całkowita (int) - wiek osoby
    this.salary = salary; // liczba zmiennoprzecinkowa (float) - zarobki osoby
    this.isStudent = isStudent; // wartość logiczna (boolean) - czy osoba jest studentem
  }
}

// Funkcja generująca pojedynczą osobę z losowymi danymi
function generateRandomPerson(id) {
  const names = [
    "Anna",
    "Jan",
    "Maria",
    "Piotr",
    "Ewa",
    "Tomasz",
    "Kasia",
    "Michał",
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomAge = Math.floor(Math.random() * 50) + 18;
  const randomSalary = parseFloat((Math.random() * 10000 + 3000).toFixed(2));
  const randomIsStudent = Math.random() < 0.5;

  return new Person(id, randomName, randomAge, randomSalary, randomIsStudent);
}

// Funkcja generująca tablicę osób o zadanej liczebności
function generatePeople(count) {
  const people = [];
  for (let i = 1; i <= count; i++) {
    people.push(generateRandomPerson(i));
  }
  return people;
}

module.exports = {
  Person,
  generateRandomPerson,
  generatePeople,
};
