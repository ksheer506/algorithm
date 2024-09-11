const permutation = (arr, L) => {
  const res = []
  
  const permutate = (a = []) => {
    if (a.length >= L) {
      return res.push(a)
    }
    arr.forEach((e) => {
      if (!a.includes(e)) {
        permutate([...a, e])
      }
    })
  }
  permutate()
  
  return res
}

/* 1. 순열을 이용한 풀이 */
function solutionWithPermutation(k, dungeons) {
  const L = dungeons.length
  const cases = permutation(dungeons, L)
  let max = 0

  for (let i = 0; i < cases.length; i++) {
    const route = cases[i]
    let health = k
    let count = 0

    for (let j = 0; j < L; j++) {
      const [required, consumption] = route[j]
      
      if (health < required) {
        break
      }
      health -= consumption
      count += 1
    }
    max = Math.max(max, count)
  }
  return max
}

/* 2. DFS를 이용한 풀이 */
/* 1번 풀이와는 달리 순열을 모두 구한 후에 계산하는 방식이 아니라 더 빠름 */
function solutionWithDFS(k, dungeons) {
  const L = dungeons.length
  let max = 0
  
  const dfs = (arr, health) => {
    const [required, consumption] = arr.at(-1) ?? [0, 0]
    const canContinue = health >= required
    const count = arr.length - (canContinue ? 0 : 1)
    
    max = Math.max(max, count)

    if (arr.length >= L || max >= L) {
      return
    }
    dungeons.forEach((d, i) => {
      if (canContinue && !arr.includes(d)) {
        dfs([...arr, d], health - consumption)
      }
    })
  }
  dfs([], k)
  
  return max
}

const k = 80
const dungeons = [[80,20],[50,40],[30,10]]

console.log(solutionWithDFS(k, dungeons))
