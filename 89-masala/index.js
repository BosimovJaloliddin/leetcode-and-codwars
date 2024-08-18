// leetcode
// 2325. Decode the Message

var decodeMessage = function (key, message) {
  let newKey = sort(key);
  return Array.from(message, (v) => {
    if (v === " ") {
      return v;
    } else {
      let a = newKey.indexOf(v) + 97;
      return String.fromCharCode(a);
    }
  }).join("");
};

function sort(val) {
  let arr = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== " " && !arr.includes(val[i])) {
      arr.push(val[i]);
    }
  }
  return arr;
}
console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
);
