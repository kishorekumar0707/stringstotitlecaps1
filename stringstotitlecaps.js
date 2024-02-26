let strings = ["hello", "world", "javascript"];

// Anonymous Function
let titleCaps = strings.map(function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
console.log ("Anonymous Function:",titleCaps);

// IIFE
let titleCapsIIFE = (function(arr) {
  return arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
})(strings);
console.log("IIFE:",titleCapsIIFE);