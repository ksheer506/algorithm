const DIRECTION = [
  [-1, 0], [1, 0], [0, -1], [0, 1]
]

function solution(land) {
  const W = land[0].length
  const D = land.length 
  // 매장지 인덱스 -> 매장량
  const depositAmount = []
  // (row, col) -> 매장지 인덱스
  const depositIndex = Array.from({ length: D }, () => Array(W).fill(null))

  const getDeposit = (startR, startC, index) => {
    const needToVisit = [[startR, startC]]
    let amount = 0
    
    // 매장량이 없거나 land 밖인 경우 탐색 대상에 넣지 않음
    const isCandidate = (r, c) => land[r]?.[c] === 1 && depositIndex[r][c] === null
    
    depositIndex[startR][startC] = index
    
    while (needToVisit.length > 0) {
      const [row, col] = needToVisit.pop()
      
      amount += 1
      
      for (const [R, C] of DIRECTION) {
        const nextR = row + R
        const nextC = col + C
        
        if (isCandidate(nextR, nextC)) {
          // 탐색 시 해당 위치에 매장지 index도 같이 표시
          depositIndex[nextR][nextC] = index
          needToVisit.push([nextR, nextC])
        }
      }
    }
    return amount
  }
  
  let maxAmount = 0
  
  for (let c = 0; c < W; c++) {
    // 하나의 매장지가 여러 열에 걸쳐있는 경우, 한번 카운트하면 중복으로 포함되지 않도록 인덱스 관리
    const visitedGroupIndex = new Set()
    let columnTotalAmount = 0
    
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
        columnTotalAmount += deposit
        visitedGroupIndex.add(currentIndex)
      // 이전 열에서 확인된 매장지의 매장량 기록
      } else if (!visitedGroupIndex.has(groupIndex)) {
        columnTotalAmount += depositAmount[groupIndex]
        visitedGroupIndex.add(groupIndex)
      }
    }
    maxAmount = Math.max(maxAmount, columnTotalAmount)
  }
  return maxAmount
}

/**
 * (i, 0)가 출발점인 길찾기 문제와 유사함. 하지만 모든 0 <= i < land[0].length에 대해 계산하면 중복 계산이 존재하기 때문에 비효율적
 * -> 탐색한 좌표도 같이 반환해 중복 계산
 * 
 * [시간 효율성 통과 실패]
 * @see https://github.com/ksheer506/algorithm/commit/b3242e5a47f7635cff29747f2bac3d3817deb65a
 * 1. getDeposit에서 (r,c)에 해당하는 매장지 인덱스 기록
 *  기존에는 for 루프에서 `groupCoordinates.findIndex((g) => g.has(`${r},${c}`))`으로 각 위치별 매장지의 인덱스를 탐색함. 
 * -> getDeposit에서 매장지를 탐색하면서 (r,c) 위치에 현재 매장지의 인덱스를 같이 기록해 for 루프에서의 비효율 제거
 * 
 * @see https://github.com/ksheer506/algorithm/commit/44b0928878f414740ed3a98b569d7a37c54ee06b
 * 2. getDeposit에서 isCandidate 중복 호출
 * 기존에는 BFS 탐색 시 while 루프 처음, 다음 탐색 좌표를 push 할 때 `isCandidate`를 불필요하게 두 번 호출
 * 
 * 3. depositByColumn 배열 제거
 * `Math.max(...depositByColumn.filter(Boolean))`으로 각 열의 매장지를 배열에 저장해두고 마지막에 Math.max 처리를 했는데 배열을 제거하고 루프 순회 시 max 값을 매번 갱신하는 것으로 변경
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