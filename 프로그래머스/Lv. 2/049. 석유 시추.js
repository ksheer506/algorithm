const DIRECTION = [
  [-1, 0], [1, 0], [0, -1], [0, 1]
]

function solution(land) {
  const W = land[0].length
  const D = land.length 
  // 매장지 index -> 매장량
  const deposits = []
  // 매장지 index -> 좌표 Set
  const groupCoordinates = []
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
      // TODO: 여기에서 그룹 인덱스와 매장량 기록하면?
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
    // 하나의 매장지가 여러 열에 걸쳐있는 경우, 한번 카운트하면 중복으로 포함되지 않도록 인덱스 관리
    const visitedGroupIndex = new Set()
    
    for (let r = 0; r < D; r++) {
      // 석유가 없는 경우 다음 행으로 넘어감
      if (land[r][c] !== 1) {
        continue
      }
      const groupIndex = groupCoordinates.findIndex((g) => g.has(`${r},${c}`))
      
      // 매장 그룹의 최상단 위치에서만 해당 열의 매장량 기록
      if (groupIndex === -1) {
        const [deposit, visited] = getDeposit(r, c)
  
        groupCoordinates.push(visited)
        deposits.push(deposit)
        depositByColumn[c] = (depositByColumn[c] ?? 0) + deposit
        visitedGroupIndex.add(deposits.length - 1)
      // 이전 열에서 확인된 매장지의 매장량 기록
      } else if (!visitedGroupIndex.has(groupIndex)) {
        depositByColumn[c] = (depositByColumn[c] ?? 0) + deposits[groupIndex]
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

const land = [
  [1, 0, 1, 0, 1, 1], 
  [1, 0, 1, 0, 0, 0], 
  [1, 0, 1, 0, 0, 1], 
  [1, 0, 0, 1, 0, 0], 
  [1, 0, 0, 1, 0, 1], 
  [1, 0, 0, 0, 0, 0], 
  [1, 1, 1, 1, 1, 1]
]

console.log(solution(land))