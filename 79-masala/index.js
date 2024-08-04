// leetcode
// 2621. Sleep

const timeOut = (time) => new Promise((resolve) => setTimeout(resolve, time));

async function sleep(millis) {
  return await timeOut(millis);
}

console.log(sleep(3000));
