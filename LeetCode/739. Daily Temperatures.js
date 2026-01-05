// https://leetcode.com/problems/daily-temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const stack = [0]
  const res = Array(temperatures.length).fill(0)
  let cursor = 1

  while (cursor < temperatures.length) {
    const current = temperatures[cursor]
    const topIndex = stack[stack.length - 1]

    if (current > temperatures[topIndex]) {
      res[topIndex] = cursor - topIndex
      stack.pop()
    } else {
      stack.push(cursor)
      cursor++
    }
  }

  return res
};

const temperatures = [30,60,90];
console.log(dailyTemperatures(temperatures));