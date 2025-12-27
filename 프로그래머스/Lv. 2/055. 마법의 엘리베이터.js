function solution(storey) {
  const str = [0, ...`${storey}`.split("").map(Number)]
  const L = str.length
  let count = 0
  
  for (let i = L - 1; i >= 0; i--) {
    const current = str[i]
    const next = str[i - 1] ?? 0
  
    if (current > 5 || (current === 5 && next >= 5)) { // 위로
      count += (10 - current)
      str[i - 1] = next + 1
    } else { // 아래로
      count += current
    }
  }
  return count
}

/**
 * 1. 특정 자릿수가 5이면 위로 가든 아래로 가든 동일함
 *   5층: -5
 *   55층: -5,-50 / +5,+40,-100
 * 
 * 2. 특정 자릿수가 5일 때 다음 자릿수가 4이하이면 아래로, 6이상이면 위로 올라가는 것이 최소
 *   65층: -5,+40,-100 / +5,+30,-100
 *   45층: -5,-40 / +5,-50
 */

const storey = 165
console.log(solution(storey))