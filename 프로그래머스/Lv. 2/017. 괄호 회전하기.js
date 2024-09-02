const LEFT = ['[', '{', '(']

const RIGHT = [']', '}', ')']

function solution(s) {
 const L = s.length
  let validCount = 0
  
  for (let i = 0; i < L; i++) {
    let current = ''
    for (let j = i; j < L + i; j++) {
      current += s[j % L]
    }
    validCount += +isBracketValid(current)
  }
  return validCount
}

/*
온전한 괄호 세트인지 확인
2. RIGHT 원소(닫는 괄호)이면
 - stack의 가장 마지막 원소를 꺼내서 현재 괄호와 짝이 맞는지 확인
 - 맞으면
*/
const isBracketValid = (b) => {
  const stack= []
  
  for (let i = 0; i < b.length; i++) {
    const c = b[i]
    // 1. LEFT 원소
    if (LEFT.includes(c)) {
      stack.push(c)
    } else {
      // 2. RIGHT 원소
      const last = stack.pop()
      const closeIndex = RIGHT.findIndex((b) => b === c)
      const openIndex = LEFT.findIndex((b) => b === last)
      
      if (openIndex !== closeIndex) {
        return false
      }
    }
  }
  return stack.length < 1
}

const s = "}]()[{";
console.log(isBracketValid(s))
console.log(solution(s));
