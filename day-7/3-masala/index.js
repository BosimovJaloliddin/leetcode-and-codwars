// masala shartiga link:https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript

var lastDigit = function (str1, str2) {
  if (str2 == 0) return 1;
  let str = str1.slice(str1.length - 1, str1.length);

  if (str == 0 || str == 1 || str == 5 || str == 6) {
    return +str;
  } else if (str == 4 || str == 9) {
    if (str2 % 2 == 0) {
      let res1 = Math.pow(str, 2).toString();
      return +res1.slice(res1.length - 1, res1.length);
    } else return str;
  } else if (str == 2 || str == 3 || str == 7 || str == 8) {
    if (str2 % 4 == 0) {
      let res2 = Math.pow(str, 4).toString();
      return +res2.slice(res2.length - 1, res2.length);
    } else if (str2 % 4 == 2) {
      let res3 = Math.pow(str, 2).toString();
      return +res3.slice(res3.length - 1, res3.length);
    } else if (str2 % 4 == 3) {
      let res4 = Math.pow(str, 3).toString();
      return +res4.slice(res4.length - 1, res4.length);
    } else return str;
  }
};
console.log(lastDigit("10", "10000000000"));
