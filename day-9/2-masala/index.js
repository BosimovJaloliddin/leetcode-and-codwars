// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// ==========================================
// link:https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// 5 kyu

function humanReadable(seconds) {
  let obj = {
    hour: "00",
    minut: "00",
    second: "00",
  };
  let sec = seconds;
  if (seconds >= 3600) {
    obj.hour += Math.trunc(seconds / 3600);
    sec = seconds % 3600;
  }
  if (60 <= sec < 3600) {
    obj.minut += Math.trunc(sec / 60);
    sec = sec % 60;
  }
  if (sec < 60) {
    obj.second += sec;
  }
  console.log(obj);
  return `${obj.hour.slice(
    obj.hour.length - 2,
    obj.hour.length
  )}:${obj.minut.slice(
    obj.minut.length - 2,
    obj.minut.length
  )}:${obj.second.slice(obj.second.length - 2, obj.second.length)}`;
}

console.log(humanReadable(35999932));
