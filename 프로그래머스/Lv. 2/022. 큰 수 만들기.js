function solution(number, k) {
  let removed = 0
  const L = number.length
  const stack = [number[0]]
  
  for (let i = 1; i < L; i++) {
    const current = stack.at(-1)
    const candidate = number[i]

    console.log({i, current, candidate, removed, stack: stack.join('')})
    
    if (removed >= k) {
      stack.push(candidate)
      continue
    }
    if (current < candidate) {
      stack.pop()
      stack.push(candidate)
      removed += 1
    } else if (current === candidate) {
       stack.push(candidate)
    } else {
      removed += 1
    }
  }
  
  return stack.join('')
}

const number = '4177252841' // 실패 case
const k = 4

console.log(solution(number, k));

/* 
1. 처음 숫자부터 시작해 다음 숫자와 비교
2-1. 처음 >= 다음: 처음 숫자는 보관. 다음 숫자를 제거
2-2. 처음 < 다음: 처음 숫자를 제거. 다음 숫자를 보관.
3. 다음 숫자와 다다음 숫자에 다해 2 과정을 반복

- 중간에 있는 숫자들을 제거할 수는 있지만 숫자들의 위치는 바꿀 수 없음 → 

*/
