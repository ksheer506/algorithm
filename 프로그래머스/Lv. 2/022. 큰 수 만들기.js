function solution0(number, k) {
  let removed = 0
  const L = number.length
  const stack = [number[0]]
  
  for (let i = 1; i < L; i++) {
    const current = stack.at(-1)
    const candidate = number[i]

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

console.log(solution0(number, k));

/* 
[solution0]
1. 처음 숫자부터 시작해 다음 숫자와 비교. 숫자의 순서는 바꿀 수 없고 앞에서 부터 비교해야 하므로 스택으로 처리.
2-1. 이전 >= 현재: 이전 숫자는 보관. 현재 숫자를 제거
2-2. 이전 < 현재: 이전 숫자를 제거. 현재 숫자를 보관.
3. 다음 숫자와 다다음 숫자에 다해 2 과정을 반복

-> '7252'처럼 5를 넣으려고 하면 7보다 작기 때문에 5도 빠지는 문제가 있음. 이 방식은 가장 큰 숫자가 들어왔다면 그 이후부터는 두번째로 큰 숫자라도 집어넣지 못함.
-> 스택에 들어있는 숫자들 중에서 현재 숫자보다 작은 걸 모두 빼내는 작업을 마친 후에, 현재 숫자가 몇 번째로 큰 숫자일지는 모르기 때문에 현재 숫자도 집어넣어줘야 함.


Q. 이전 숫자(ex. "745")들이 현재 숫자(ex. "1")보다 모두 커도 스택에 넣어야 하나? 
A. 이전 숫자 중에서 현재 숫자보다 작은 것들을 모두 제거하면 최종적으로 가장 큰 숫자를 선택할 수 있게 됨. 하지만 다음 숫자가 현재 숫자보다 작을지 클지, 현재 숫자가 가장 작은 숫자일지는 아무도 모르기 때문에 현재 숫자도 일단은 스택에 넣어야 함.
*/
function solution1(number, k) {
  const stack = []

  for (const num of number) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop()
      k--
    }
    stack.push(num)
  }
  if (k > 0) {
    stack.splice(-k)
  }
  
  return stack.join('')
}