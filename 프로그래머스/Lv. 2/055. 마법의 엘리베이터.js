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

function solutionDFS(storey) {
  const L = `${storey}`.length
  let minCount = storey
  
  const getNthDigit = (n, digit) => {}
  
  const dfs = (current, digit, count = 0) => {
    console.log({current, digit, count})
    if (current === 0 || digit > L + 1) {
      minCount = Math.min(count, minCount)
      return
    }
    const num = current % (10 ** digit)
    const downCount = 0
    const upCount = 0
    
    // TODO: / 제거하기
    dfs(current - num, digit + 1, count + num / (10 ** (digit - 1)))
    dfs(current + (10 - num), digit + 1, count + (10 ** digit - num) / (10 ** (digit - 1)))
  }
  dfs(storey, 1)

  return minCount
}
console.log("temp", 165 % 100)
/**
 * DFS를 이용한 방법
 * N번째 자리에서 위로 갈지, 아래로 갈지 탐색
 * ex. 1365
 * 1. 1번째 자리(5)에 대해 아래로 가거나(1365 - 5), 위로 가거나(1365 + (10-5))
 * 2. 1의 결과(1360, 1370)에서 두번째 자리에 대해 아래로 가거나(1360 - 60), 위로 가거나(1360 + (100-60))
 */

const storey = 165
console.log(solution(storey))
console.log(solutionDFS(storey))