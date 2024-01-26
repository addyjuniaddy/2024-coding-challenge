// function order(words) {
//     // ...
//   if (words === "") {
//     return "";
//   }

//   const word = words.split(" ");
//   const sortedWords = word.sort((a, b) => {
//     const numA = parseInt(a.match(/\d/)[0]);
//     const numB = parseInt(b.match(/\d/)[0]);
//     return numA - numB;
//   });

//   return sortedWords.join(" ");
// }

// function order(words) {
//   return words
//     .split(" ")
//     .sort(function (a, b) {
//       return a.match(/\d/) - b.match(/\d/);
//     })
//     .join(" ");
// }    

// function order(words) {
//   var array = words.split(" ");
//   var sortedArray = [];
//   for (i = 0; i <= array.length; i++) {
//     for (j = 0; j < array.length; j++) {
//       if (array[j].indexOf(i) >= 0) {
//         sortedArray.push(array[j]);
//       }
//     }
//   }
//   return sortedArray.join(" ");
// }

var reg = /\d/;

function order(words) {
  return words.split(" ").sort(comparator).join(" ");
}

function comparator(word, nextWord) {
  return +word.match(reg) - +nextWord.match(reg);
}
// Example usage:
const result1 = order("is2 Thi1s T4est 3a");
console.log(result1); // Output: "Thi1s is2 3a T4est"

const result2 = order("4of Fo1r pe6ople g3ood th5e the2");
console.log(result2); // Output: "Fo1r the2 g3ood 4of th5e pe6ople"

const result3 = order("");
console.log(result3); // Output: ""
