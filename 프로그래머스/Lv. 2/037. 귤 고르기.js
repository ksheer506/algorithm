function solution(k, tangerine) {
  const countMap = new Map()
  
  tangerine.forEach((s) => {
    countMap.set(s, (countMap.get(s) ?? 0) + 1)
  })
  
  return [...countMap]
    .sort((a, b) => a[1] - b[1])
    .reduceRight((a, [t, c]) => {
      if (k > 0) {
        k -= c
        return a + 1
      }
      return a
    }, 0)
}

const k = 2
const tangerine = [1, 1, 1, 1, 2, 2, 2, 3]

console.log(solution(k, tangerine))