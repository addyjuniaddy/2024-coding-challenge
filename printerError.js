// function printerError(s) {
//   const validColors = "abcdefghijklm";
//   const errorCount = s.split("").filter((color) => !validColors.includes(color)).length;

//   return `${errorCount}/${s.length}`;
// }

function printerError(s) {
  // your code
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count + "/" + s.length;
}

// Example usage:
const s1 = "aaabbbbhaijjjm";
console.log(printerError(s1)); // Output: "0/14"

const s2 = "aaaxbbbbyyhwawiwjjjwwm";
console.log(printerError(s2)); // Output: "8/22"
