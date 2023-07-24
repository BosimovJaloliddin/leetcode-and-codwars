//Power of 4

// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

// (In C# Integer means all integer Types like Int16,Int32,.....)

// Examples
// powerOf4(1024) // returns true
// powerOf4(44) // returns false
// powerOf4("not a positive integer") // returns false

//link=> https://www.codewars.com/kata/544d114f84e41094a9000439/train/javascript
//7 kyu
function powerOf4(n) {
  let res = 2;
  for (res; res <= n; res++) {
    res--;
    res = res * 4;
  }
  res--;
  return res === n ? true : false;
}
console.log(powerOf4(1024));

// function powerOf4(n) {
//   let a = n;
//   if (n === 1) {
//     return true;
//   } else if (n % 4 === 0 && typeof n === "number") {
//     a = n / 4;
//     return powerOf4(a);
//   } else return false;
// }
// console.log(powerOf4(1024));
