const DIRECTION = [
  [-1, 0], [1, 0], [0, -1], [0, 1]
]

function solution(land) {
  const W = land[0].length
  const D = land.length 
  // 매장지 인덱스 -> 매장량
  const depositAmount = []
  // 각 위치별 "매장지 인덱스"
  const depositIndex = Array.from({ length: D }, () => Array(W).fill(null))
  const depositByColumn = []

  const getDeposit = (startR, startC, index) => {
    const visited = new Set()
    const needToVisit = [[startR, startC]]
    let amount = 0
    
    // 매장량이 없거나 land 밖인 경우 탐색 대상에 넣지 않음
    const isCandidate = (r, c) => land[r]?.[c] === 1 && !visited.has(`${r},${c}`)
    
    while (needToVisit.length > 0) {
      const [row, col] = needToVisit.pop()
      const hasOil = land[row][col] === 1
      
      if (!isCandidate(row, col)) {
        continue
      }
      visited.add(`${row},${col}`)
      amount += 1
      // 탐색 시 해당 위치에 매장지 index도 같이 표시
      depositIndex[row][col] = index
      
      for (const [R, C] of DIRECTION) {
        const nextR = row + R
        const nextC = col + C
        
        if (isCandidate(nextR, nextC)) {
          needToVisit.push([nextR, nextC])
        }
      }
    }
    return amount
  }
  
  for (let c = 0; c < W; c++) {
    // 하나의 매장지가 여러 열에 걸쳐있는 경우, 한번 카운트하면 중복으로 포함되지 않도록 인덱스 관리
    const visitedGroupIndex = new Set()
    
    for (let r = 0; r < D; r++) {
      // 석유가 없는 경우 다음 행으로 넘어감
      if (land[r][c] !== 1) {
        continue
      }
      const groupIndex = depositIndex[r][c] 
      
      // 매장지 인덱스 정보가 없으면 매장지 index 기록
      if (groupIndex === null) {
        const currentIndex = depositAmount.length
        const deposit = getDeposit(r, c, currentIndex)
  
        depositAmount.push(deposit)
        depositByColumn[c] = (depositByColumn[c] ?? 0) + deposit
        visitedGroupIndex.add(currentIndex)
      // 이전 열에서 확인된 매장지의 매장량 기록
      } else if (!visitedGroupIndex.has(groupIndex)) {
        depositByColumn[c] = (depositByColumn[c] ?? 0) + depositAmount[groupIndex]
        visitedGroupIndex.add(groupIndex)
      }
    }
  }
  return Math.max(...depositByColumn.filter(Boolean))
}

/**
 * (i, 0)가 출발점인 길찾기 문제와 유사함. 하지만 모든 0 <= i < land[0].length에 대해 계산하면 중복 계산이 존재하기 때문에 비효율적
 * -> 탐색한 좌표도 같이 반환해 중복 계산
*/

const land1 = [
  [0, 0, 0, 1, 1, 1, 0, 0], 
  [0, 0, 0, 0, 1, 1, 0, 0], 
  [1, 1, 0, 0, 0, 1, 1, 0], 
  [1, 1, 1, 0, 0, 0, 0, 0], 
  [1, 1, 1, 0, 0, 0, 1, 1]
]

const land2 = [
  [1, 0, 1, 0, 1, 1], 
  [1, 0, 1, 0, 0, 0], 
  [1, 0, 1, 0, 0, 1], 
  [1, 0, 0, 1, 0, 0], 
  [1, 0, 0, 1, 0, 1], 
  [1, 0, 0, 0, 0, 0], 
  [1, 1, 1, 1, 1, 1]
]

console.log(solution(land1))