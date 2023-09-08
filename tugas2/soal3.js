function getAngkaTerbesarKedua(personName) {
  const uniqueNumbers = Array.from(new Set(personName));
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);
  return sortedNumbers[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka)); // Output yang diharapkan: 8

console.log(getAngkaTerbesarKedua(0));
// ini error karna tipe parameternya bukan array

console.log(getAngkaTerbesarKedua());
// ini error karna nilai parameternya kosong
