// masala shartiga link:https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript
// 6 kyu

function arraysSimilar(arr1, arr2) {
  let sort1 = arr1.sort((a, b) => a - b);
  let sort2 = arr2.sort((a, b) => a - b);
  let sum = 0;
  sort1.forEach((v, i) => {
    sort2.forEach((e, idx) => {
      if (v === e && i == idx) sum++;
    });
  });
  return sum == sort1.length && sum == sort2.length ? true : false;
}
console.log(arraysSimilar([1, 2, 2, 3, 4, 3], [2, 1, 2, 4, 3]));
