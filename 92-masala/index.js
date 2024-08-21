// leetcode
// 1684. Count the Number of Consistent Strings
var countConsistentStrings = function (allowed, words) {
  let res = 0;
  for (const element of words) {
    if (test(allowed, element).every((v) => v)) {
      res++;
    }
  }
  return res;
};

function test(allowed, word) {
  return Array.from(word, (v) => allowed.includes(v));
}

console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
