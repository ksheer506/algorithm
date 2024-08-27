function solution(s) {
  let iteration = 0
  let removed = 0
  let ones = 0
  
  while (s !== '1') {
    for (let  i = 0; i < s.length; i++) {
      if (s[i] === '0') {
        removed += 1
      } else {
        ones += 1
      }
    }
    s = ones.toString(2)
    ones = 0
    iteration += 1
  }
  return [iteration, removed];
}

const s = '110010101001'
console.log(solution(s))