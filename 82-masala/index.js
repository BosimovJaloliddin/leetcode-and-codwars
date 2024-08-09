// leetcode
// 1773. Count Items Matching a Rule

var countMatches = function (items, ruleKey, ruleValue) {
  let res = 0;
  items.forEach((v) => {
    if (ruleKey === "color" && v[1] === ruleValue) {
      res++;
    } else if (ruleKey === "type" && v[0] === ruleValue) {
      res++;
    } else if (ruleKey === "name" && v[2] === ruleValue) {
      res++;
    }
  });
  return res;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    (ruleKey = "type"),
    (ruleValue = "phone")
  )
);
