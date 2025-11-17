const DIRECTION = [
  [-1, 0], [1, 0], [0, -1], [0, 1]
]

function solution(land) {
  const W = land[0].length
  const D = land.length 
  // 매장지 index(0부터) -> 매장량
  const deposits = []
  // 매장지 index에 대한 좌표 Set
  const groupCoordinates = []
  let depositIndex = 0
  const depositByColumn = []
  
  const getDeposit = (startR, startC) => {
    const visited = new Set()
    const needToVisit = [[startR, startC]]
    let count = 0
    
    // 매장량이 없거나 land 밖인 경우 탐색 대상에 넣지 않음
    const isCandidate = (r, c) => land[r]?.[c] === 1 && !visited.has(`${r},${c}`)
    
    while (needToVisit.length > 0) {
      const [row, col] = needToVisit.pop()
      const hasOil = land[row][col] === 1
      
      if (!isCandidate(row, col)) {
        continue
      }
      visited.add(`${row},${col}`)
      count += 1
      
      for (const [R, C] of DIRECTION) {
        const nextR = row + R
        const nextC = col + C
        
        if (isCandidate(nextR, nextC)) {
          needToVisit.push([nextR, nextC])
        }
      }
    }
    // 해당 매장지 그룹의 매장량과 좌표
    return [count, visited]
  }
  
  for (let c = 0; c < W; c++) {
    let prevGroupIndex = -1
    
    for (let r = 0; r < D; r++) {
      const pos = `${r},${c}`
      const hasOil = land[r][c] === 1
      const groupIndex = groupCoordinates.findIndex((c) => c.has(pos))
      
      if (!hasOil) {
        continue
      }
      // 매장 그룹의 최상단 위치에서만 해당 열의 매장량 기록
      if (groupIndex === -1) {
        const [deposit, visited] = getDeposit(r, c)
        
        groupCoordinates[groupIndex] = visited
        depositByColumn[c] = (depositByColumn[c] ?? 0) + deposit
        
        groupIndex += 1
      }
    }
  }
  return Math.max(...depositByColumn)
}

/**
 * (i, 0)가 출발점인 길찾기 문제와 유사함. 하지만 모든 0 <= i < land[0].length에 대해 계산하면 중복 계산이 존재하기 때문에 비효율적
 * -> 탐색한 좌표도 같이 반환해 중복 계산 피함
*/

const land = [
  [0, 0, 0, 1, 1, 1, 0, 0], 
  [0, 0, 0, 0, 1, 1, 0, 0], 
  [1, 1, 0, 0, 0, 1, 1, 0], 
  [1, 1, 1, 0, 0, 0, 0, 0], 
  [1, 1, 1, 0, 0, 0, 1, 1]
]

console.log(solution(land))