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
  var answer = -1;
  return answer;
}


const k = 80
const dungeons = [[80,20],[50,40],[30,10]]

console.log(solution(k, dungeons))

console.log(permutation([1, 2, 3, 4], 4).flat())