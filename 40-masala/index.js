// link => https://www.codewars.com/kata/582aad136755daf91a000021

function findSequences(n) {
  let arr = [];
  let a = [];
  for (let i = 1; i < n; i++) {
    let counter = [];
    inner: for (let j = i; j < n; j++) {
      if (eval(counter.join("+")) === n) {
        arr.push(counter);
        counter = [];
        break inner;
      } else if (eval(counter.join("+")) > n) {
        counter = [];
      } else counter.push(j);
    }
  }
  console.log(arr, a);
}

findSequences(100);
