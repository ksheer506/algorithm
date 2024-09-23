function solution(s) {
  const res = []
  const tupleSet = s
    .replace(/\{\{|\}\}/g, '')
    .split('},{')
    .map((s) => new Set(s.split(',')))
    .sort((a, b) => a.size - b.size)
    
  for (let i = 0; i < tupleSet.length; i++) {
    res.push(...tupleSet[i])
  }
  return [...new Set(res)]
}

const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}"
const s1 = "{{1,2,3},{2,1},{1,2,4,3},{2}}" 
const s2 = "{{4,2,3},{3},{2,3,4,1},{2,3}}"
const s3 = "{{123}}"

console.log(solution(s1))