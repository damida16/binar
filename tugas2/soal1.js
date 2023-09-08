const changeWord = (selectedText, changedText, text) => {
  const words = text.split(selectedText);
  const newText = words.join(changedText);

  return newText;
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

// Pengujian dengan kalimat1
console.log(changeWord("mencintai", "membenci", kalimat1));
// Output yang diharapkan: "Andini sangat membenci kamu selamanya"

// Pengujian dengan kalimat2
console.log(changeWord("bromo", "semeru", kalimat2));
// Output yang diharapkan: "Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu"
