// leetcode
// 2114. Maximum Number of Words Found in Sentences

var mostWordsFound = function (sentences) {
  return Math.max(...sentences.map((v) => v.split(" ").length));
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
