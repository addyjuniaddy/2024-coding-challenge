const fourSquares = function (number) {
  let result = [];

  for (let a = 0; a * a <= number; a++) {
    for (let b = a; a * a + b * b <= number; b++) {
      for (let c = b; a * a + b * b + c * c <= number; c++) {
        let d = Math.sqrt(number - a * a - b * b - c * c);
        if (d === Math.floor(d)) {
          result.push([a, b, c, d]);
          return result;
        }
      }
    }
  }
  return null; // No decomposition found
};

function decomposeIntoFourSquares(number) {
  let result = [];

  for (let a = 0n; a * a <= number; a++) {
    for (let b = a; a * a + b * b <= number; b++) {
      for (let c = b; a * a + b * b + c * c <= number; c++) {
        let dSquared = BigInt(number - a * a - b * b - c * c);
        let d = BigInt(Math.sqrt(Number(dSquared))); // Explicit conversion for Math.sqrt
        if (d * d === dSquared) {
          result.push([a, b, c, d]);
          return result;
        }
      }
    }
  }

  return null; // No decomposition found
}

console.log(fourSquares(333));
console.log(decomposeIntoFourSquares(333));