function solution(N, stages) {
  const fail = new Map([[0, 0]]);
  const challenger = new Array(N + 1).fill(stages.length);

  for (let i = 0; i < stages.length; i++) {
    fail.set(stages[i], (fail.get(stages[i]) || 0) + 1);
  }
  for (let j = 1; j <= N; j++) {
    challenger[j] = challenger[j - 1] - (fail.get(j - 1) || 0);
  }
  for (let j = 1; j <= N; j++) {
    fail.set(j, (fail.get(j) || 0) / challenger[j]);
  }

  return new Array(N)
    .fill(0)
    .map((_, i) => i + 1)
    .sort((a, b) => {
      const diff = fail.get(b) - fail.get(a);
      if (diff) return diff;
      return a - b;
    })
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3]
console.log(solution(N, stages))
