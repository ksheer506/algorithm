function solution(prices) {
  const L = prices.length
  const result = Array(L).fill(0)
  const stack = [{ time: 0, price: prices[0] }]
  let time = 1
  
  while (stack.length > 0) {
    const last = stack.pop()
    const current = prices[time]
    
    if (!!current && current >= last.price) {
      stack.push(last, { time, price: current })
      time += 1
    } else {
      result[last.time] = Math.min(time, L - 1) - last.time
    }
  }
  return result
}

const prices = [1, 2, 3, 2, 3]
console.log(solution(prices))

/*
1  prices에서 { time, price }를 스택에 하나하나씩 집어넣음
2. 스택에 새로 넣을 값 n과 이미 있던 값 p를 비교(하나씩 pop해서 비교)
3-1. n >= p라면 꺼냈던 p와 n을 스택에 넣음
3-2. n < p라면 result[p.time]에 n.time - p.time을 넣고 3 과정 반복
*/