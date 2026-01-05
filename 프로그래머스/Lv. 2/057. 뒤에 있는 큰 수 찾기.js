function solution(numbers) {
  const stack = [0]
  const res = []
  let cursor = 1

  while (cursor < numbers.length) {
    const current = numbers[cursor]
    const top = numbers[stack[stack.length - 1]]

    if (current > top) {
      res[stack.pop()] = current
      continue
    }
    stack.push(cursor)
    cursor++
  }

  /* 다음 큰 수를 찾지 못한 수의 index에 -1 삽입 */
  for (let i = 0; i < stack.length; i++) {
    res[stack[i]] = -1
  }
  return res
}

/**
 * 1. 배열에서 첫번째 원소부터 순회할 때, `valueStack`에 넣으면서 해당 값의 인덱스도 `indexStack`에 같이 넣음
 * 2. n번째 원소 K를 스택에 넣을 때 스택의 최상단 원소 M와 비교
 *   - K > M이면, M과 index_M를 pop하고 결과 배열의 index_M에 K를 넣음
 *   - K <= M이면, K와 index_K의 인덱스를 스택에 넣음
 * 3. 모든 원소를 순회한 후, 스택에 남아있는 값은 결과 배열에 해당하는 인덱스 위치에 -1을 넣음 
 * 
 * 왜 스택을 이용해야 할까?
 * - 가장 나중의 미해결 원소 꺼내기
 * - 비교 후 여러 개 연속으로 결정하기
 * 
 * TIP. 미래(다음 원소)에 의해 과거(이전 원소)가 결정되는 구조 -> 스택
 */

const numbers = [2, 3, 3, 5]
console.log(solution(numbers));
