function nameValue(a) {
  return a.map((str, index) => {
    const value = str
      .replace(/\s/g, "")
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);
    return value * (index + 1);
  });
}

// Example usage:
const result = nameValue(["abc", "abc abc"]);
console.log(result); // Output: [6, 24]
