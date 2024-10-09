const WORDS = ['A', 'E', 'I', 'O', 'U']

const getAllPermutations = (arr) => {
  const L = arr.length
  const res = []
  
  const permutation = (a) => {
    if (a.length > L) {
      return
    }
    if (a.length >= 1 && a.length <= L) {
      res.push(a)
    }
    for (const e of arr) {
      permutation(`${a}${e}`)
    }
  }
  
  permutation('')
  return res
}

const DICTIONARY = getAllPermutations(WORDS).sort()

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