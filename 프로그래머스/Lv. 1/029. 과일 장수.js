const countingSort = (arr) => {
  const counts = Array.from({ length: 10 }, (e) => 0)
  const sorted = []

  arr.forEach((e) => {
    counts[e] += 1
  })

  for (let i = 0; i < counts.length; i++) {
    const appearance = counts[i]

    if (appearance > 0) {
      sorted.push(...Array(appearance).fill(i))
    }
  }

  return sorted
}

function solution(k, m, score) {
  const L = score.length;
  const sorted = countingSort(score)

  return sorted.reduceRight((a, c, i) => {
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
