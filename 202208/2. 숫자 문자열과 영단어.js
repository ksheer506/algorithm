const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const replacer = (match) => {
  const idx = nums.findIndex((x) => x === match);
  
  if (idx >= 0) {
    return idx;
  }
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
