function solution(k, m, score) {
  const L = score.length;

  return score.sort().reduceRight((a, c, i) => {
    if (((L - 1) - i) % m === m - 1) {
      return a + c * m
    }
    return a
  }, 0)
}

const k = 3
const m = 4
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]
console.log(solution(k, m, score));
