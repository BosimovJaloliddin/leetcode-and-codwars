var subtractProductAndSum = function (n) {
  let a = `${n}`.split("");
  return eval(a.join("*")) - eval(a.join("+"));
};

console.log(subtractProductAndSum(4421));
