function solution(str1, str2) {
  const subset1 = createJaccardSubset(str1)
  const subset2 = createJaccardSubset(str2)
  
  const union = [...getJaccardUnion(subset1, subset2).entries()].reduce((a, [, n]) => a + n, 0)
  const intersection = [...getJaccardIntersection(subset1, subset2).entries()].reduce((a, [, n]) => a + n, 0)
  
  if (subset1.length === 0 && subset2.length === 0) {
    return 65536
  }
  if (union === 0) {
    return 65536
  }
  return Math.floor(intersection / union * 65536)
}

/** 중복을 허용하는 집합이기 때문에 Set, Map 사용할 필요없이 Array를 사용하면 됐음 */
const createJaccardSubset = (str) => [...str].reduce((a, c, i) => {
  const candidate = `${c}${str[i+1]}`.toLowerCase()
  
  if (i <= str.length - 2 && /^[a-zA-Z][a-zA-Z]$/.test(candidate)) {
    a.set(candidate, (a.get(candidate) ?? 0) + 1)
  }
  return a
}, new Map())

const getJaccardUnion = (s1, s2) => {
  const allKeys = [...new Set([...s1.keys(), ...s2.keys()])]
  const union = new Map()
  
  for (const k of allKeys) {
    const n1 = s1.get(k) ?? 0
    const n2 = s2.get(k) ?? 0
    
    union.set(k, Math.max(n1, n2))
  }
  return union
}

const getJaccardIntersection = (s1, s2) => {
  const allKeys = [...new Set([...s1.keys(), ...s2.keys()])]
  const intersection = new Map()
  
  for (const k of allKeys) {
    const n1 = s1.get(k) ?? 0
    const n2 = s2.get(k) ?? 0
    
    if (n1 > 0 && n2 > 0) {
      intersection.set(k, Math.min(n1, n2))
    }
  }
  return intersection
}
/**
 * 1. str1, str2를 순회하면서 L=2인 부분집합 생성
 * - 그 부분집합에 영문자가 아닌게 있다면 버림
 * 2. 합집합, 교집합을 구함(**단순 집합이 아닌 중복이 허용되는 집합**)
*/
const str1 = "E=M*C^2"	
const str2 = "e=m*c^2"

console.log(solution(str1, str2))
console.log(...createJaccardSubset(str1))
console.log(...createJaccardSubset(str2))

console.log(...getJaccardUnion(
  createJaccardSubset(str1),
  createJaccardSubset(str2)
))