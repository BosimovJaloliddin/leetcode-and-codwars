// masala shartig link:https://www.codewars.com/kata/584c7b1e2cb5e1a727000047/train/javascript
// 7 kyu

const helloWorld = () => {
  let a = String(/Hello, World!/);
  a = a.substring(1, a.length - 1);
  return a;
};
console.log(helloWorld());
