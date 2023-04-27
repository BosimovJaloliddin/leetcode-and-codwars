// Given two arrays of strings a1 and a2 return a sorted array r in
// lexicographical order of the strings of a1 which are substrings of
//  strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// ===================================

// masala shartiga link:https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
// 6 kyu

function inArray(array1, array2) {
  let res = [];
  array1.forEach((e) =>
    array2.forEach((v) => {
      if (v.includes(e) && !res.includes(e)) res.push(e);
    })
  );
  return res.sort((a, b) => a.localeCompare(b));
}
console.log(
  inArray(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
