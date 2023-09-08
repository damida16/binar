const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  }

  return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
};

// Pengujian dengan contoh-contoh yang diberikan
console.log(checkTypeNumber(10)); // Output yang diharapkan: "GENAP"
console.log(checkTypeNumber(3)); // Output yang diharapkan: "GANJIL"
console.log(checkTypeNumber("3")); // Output yang diharapkan: "Error: Invalid data type"
console.log(checkTypeNumber({})); // Output yang diharapkan: "Error: Invalid data type"
console.log(checkTypeNumber([])); // Output yang diharapkan: "Error: Invalid data type"
console.log(checkTypeNumber()); // Output yang diharapkan: "Error: Invalid data type"
