// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'

// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// ===================================
// link:https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// 6 kyu

function expandedForm(num) {
  let str = ``;
  Array.from(`${num}`, (v, i) => {
    Array.from(`${num}`, (e, idx) => {
      if (+v) {
        if (i === idx) str += v;
        else if (i < idx) str += 0;
      }
    });
    if (`${num}`[i + 1] != 0 && `${num}`[i + 1]) str += " + ";
  });
  return str;
}
console.log(expandedForm(1203003200));
