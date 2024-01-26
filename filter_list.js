// function filter_list(l) {
//   // Return a new array with the strings filtered out
//       return l.filter((item) => typeof item === "number");
// }

function filter_list(l) {
  var res = [];
  for (var item = 0; item < l.length; item++) {
    if (typeof l[item] === "number") {
      res.push(l[item]);
    }
  }
  return res;
}

const result1 = filter_list([1, 2, 'a', 'b']);
console.log(result1);  // Output: [1, 2]

const result2 = filter_list([1, "a", "b", 0, 15]);
console.log(result2);  // Output: [1, 0, 15]

const result3 = filter_list([1, 2, "aasf", "1", "123", 456]);
console.log(result3);  // Output: [1, 2, 123]