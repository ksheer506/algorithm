const WORDS = ['A', 'E', 'I', 'O', 'U']

const getAllCases = (arr) => {
  const L = arr.length
  const res = []
  
  const permutation = (a, l) => {
    if (a.length === l) {
      res.push(a)
      return
    }
    for (const e of arr) {
      permutation(`${a}${e}`, l)
    }
  }
  
  for (let i = 1; i <= L; i++) {
    permutation('', i)
  }
  return res
}

const DICTIONARY = getAllCases(WORDS).sort()

function solution(word) {
  return DICTIONARY.findIndex((e) => e === word) + 1
}

const word = "EIO"
console.log(solution(word))

/*
첫번째 자리 'A', 'E', 'I', 'O', 'U'
두번째 자리부터 '', A', 'E', 'I', 'O', 'U'

"AAAE" 10
1*2*2
*/