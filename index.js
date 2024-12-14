// Importujemy moduły
const { Person, generatePeople } = require("./person");
const { savePeopleToCSV, saveInvalidDataToCSV } = require("./fileOperations");
const { verifyCSVFile } = require("./validator");

// Główna funkcja programu
function main() {
  try {
    const numberOfPeople = 5;
    const filename = "people.csv";

    // Użytkownik może wybrać czy chce wygenerować poprawne czy niepoprawne dane
    const shouldGenerateError = true; // Ustawiamy na true, aby zasymulować błąd

    if (shouldGenerateError) {
      console.log(
        "\nGenerowanie nieprawidłowych danych do testowania obsługi błędów..."
      );
      saveInvalidDataToCSV(filename);
    } else {
      console.log("\nGenerowanie prawidłowych danych...");
      const people = generatePeople(numberOfPeople);
      savePeopleToCSV(people, filename);
    }

    console.log("Dane zostały zapisane do pliku CSV.");
    console.log("\nSprawdzanie poprawności danych...");

    // Przeprowadzamy testy weryfikacyjne
    verifyCSVFile(filename, shouldGenerateError ? 1 : numberOfPeople);

    // Ten kod się nie wykona, jeśli wystąpi błąd w verifyCSVFile
    console.log("Test zakończony sukcesem! Wszystkie asercje przeszły:");
    console.log("- Plik nie jest pusty");
    console.log(`- Plik zawiera odpowiednią liczbę linijek`);
    console.log("- Typy danych w każdej linijce są poprawne:");
    console.log("  * id: liczba całkowita");
    console.log("  * name: tekst");
    console.log("  * age: liczba całkowita");
    console.log("  * salary: liczba zmiennoprzecinkowa");
    console.log("  * isStudent: wartość logiczna");
  } catch (error) {
    // Wyświetlamy szczegółowe informacje o błędzie
    console.error("\n❌ Wykryto błąd w danych!");
    console.error("Szczegóły błędu:", error.message);
    console.error("\nProgram został zatrzymany z powodu błędnych danych.");
  }
}

// Uruchamiamy program
main();
