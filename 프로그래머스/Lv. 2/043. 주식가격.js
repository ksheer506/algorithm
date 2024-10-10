function solution(prices) {
  const L = prices.length
  const result = Array(L).fill(0)
  const stack = [{ time: 0, price: prices[0] }]
  let time = 1
  
  while (true) {
    const last = stack.at(-1)
    const current = prices[time]
    
    // 1. last가 없고, current도 없을 때
    if (!last && !current) {
      break
    }
    const shouldInsert = (!last && current) || (last && current && current >= last.price)
    
    // price 삽입
    // 2-1. last가 없고, current만 있을 때
    // 2-2. last, current 모두 있고, current가 last.price보다 크거나 같을 때
    if (shouldInsert) {
      stack.push({ time, price: current })
      time += 1
    } else {
      result[last.time] = Math.min(time, L - 1) - last.time
      stack.pop()
    }
  }
  
  return result
}


const prices = [1, 2, 3, 2, 3]
console.log(solution(prices))

/*
1  prices에서 { time, price }를 스택에 하나하나씩 집어넣음
2. 스택에 새로 넣을 값 n과 이미 있던 값 p를 비교
3-1. n >= p라면 꺼냈던 n을 스택에 넣고 다음 price로 넘어감
3-2. n < p라면 result[p.time]에 n.time - p.time을 넣고, p를 pop한 후 현재의 n에 대해 3 과정 반복

FAILED: [2, 1, 1]
index = 1에 대해 last가 없어 push되지 못함
→ 스택의 맨 마지막 값을 pop하지 않고 peek해서 비교하면?
*/