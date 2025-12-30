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
 * 1. 특정 자릿수가 4이하이면 아래로, 6이상이면 위로 올라가는 것이 최소
 *   14층: -4,-10 / +6,-20
 *   66층: +4,+30-100 / -6,-60
 * 
 * 2. 특정 자릿수가 5이면 위로 가든 아래로 가든 횟수는 동일함
 *   5층: -5
 *   55층: -5,-50 / +5,+40,-100
 * 
 * 3. 하지만 1의 경우일 때 다음 자릿수가 4이하이면 아래로, 6이상이면 위로 올라가는 것이 최소
 *   65층: -5,+40,-100 / +5,+30,-100
 *   45층: -5,-40 / +5,-50
 */

function solutionDFS(storey) {
  const L = `${storey}`.length
  let minCount = storey
  
  const getNthDigit = (n, digit) => {
    const str = n.toString();
    return Number(str[str.length - digit] ?? 0)
  } 
  
  /**
   * @param current 현재 층 수
   * @param digit 현재 탐색중인 자릿수
   * @param count 이동 횟수
   */
  const dfs = (current, digit, count = 0) => {
    console.log({current, digit, count})
    if (current <= 0 || count > minCount) {
      minCount = Math.min(count, minCount)
      return
    }
    const n = getNthDigit(current, digit)

    dfs(current - n * (10 ** (digit - 1)), digit + 1, count + n)
    dfs(current + (10 - n) * (10 ** (digit - 1)), digit + 1, count + (10 - n))
  }
  dfs(storey, 1)

  return minCount
}

/**
 * DFS를 이용한 방법
 * N번째 자리에서 위로 갈지, 아래로 갈지 탐색. 
 * 첫번째 풀이와는 달리 위/아래 방향을 결정하지 않고 모두 탐색하기 때문에 효율성 면에서는 떨어짐
 * 
 * ex. 1365
 * 1. 1번째 자리(5)에 대해 아래로 가거나(1365 - 5), 위로 가거나(1365 + (10-5))
 * 2. 1의 결과(1360, 1370)에서 두번째 자리에 대해 아래로 가거나(1360 - 60), 위로 가거나(1360 + (100-60))
 */

const storey = 165

console.log(solution(storey))
console.log(solutionDFS(storey))