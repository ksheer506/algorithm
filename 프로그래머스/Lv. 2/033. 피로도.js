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

function solution(k, dungeons) {
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

const k = 80
const dungeons = [[80,20],[50,40],[30,10]]

console.log(solution(k, dungeons))
