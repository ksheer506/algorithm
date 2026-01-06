function solution(order) {
  const stack = []
  let current = 1
  let i = 0
  let count = 0
  
  while (current <= order.length || stack[stack.length - 1] <= order[i]) {
    const targetN = order[i]
    
    if (current === targetN) {
      count += 1
      i += 1
      current += 1
      continue
    } 
    const top = stack[stack.length - 1]
    
    if (top === targetN) {
      stack.pop()
      count += 1
      i += 1
    } else {
      stack.push(current)
      current += 1
    }
  }
  
  return count
}

/**
 * 1. order의 i = 0의 값부터 current(1부터 시작)를 비교해서
 * 
 * 2-1. current === order[i]: count++, i++, current++
 * 2-2. current !== order[i]
 * 스택의 맨 앞에 있는 값 top과 order[i]를 비교 
 * -> top === order[i]이면 스택을 pop한 후에 count++, 
 * -> top !== order[i]이면 current를 스택에 추가하고 current++ 
 * 3. 2과정 반복
 * 
 * - current를 끝까지 순회했더라도 스택에는 뺄 수 있는 값이 있기 때문에 스택도 while 조건에 추가해줘야 함
 * - top이 order[i]보다 작은 경우에는 스택에서 값을 절대 뺄 수 없으므로 이 외의 경우에도 while 루프를 돌 수 있도록 조건 추가
 */

const order = [5, 4, 3, 1, 2] // 2
console.log(solution(order))