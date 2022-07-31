const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const replacer = (match) => {
   return nums.findIndex((x) => x === match);
}

function solution(s) {
  const numStrMatch = nums.reduce((acc, x, i, arr) => {
    if (i < 1) {
      return acc += `(${x})`
    }
    return acc += `|(${x})`
  }, "")
  const reg = new RegExp(numStrMatch, 'g')

  return s.replace(reg, replacer);
}

console.log(solution('2three45sixseven'))
