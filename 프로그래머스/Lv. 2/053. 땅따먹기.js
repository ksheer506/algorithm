function solution(land) {
  const R = land.length
  const landMax = [land[0]]
  
  for (let i = 1; i < R; i++) {
    landMax[i] = getLandMaxScore(landMax[i - 1], land[i])
  }
  return Math.max(...landMax[R - 1])
}

const getLandMaxScore = (prevRow, currentRow) => {
  const max = []
  
  for (let k = 0; k < currentRow.length; k++) {
    max[k] = currentRow[k] + Math.max(
      ...prevRow.slice(0, k),
      ...prevRow.slice(k + 1),
    )
  }
  return max
}

function solutionFail(land) {
  const R = land.length
  const C = 4
  let max = 0
  
  const dfs = (score, prevC, step = 0) => {
    if (step === R) {
      max = Math.max(score, max)
      return
    }
    for (let i = 0; i < C; i++) {
      if (i !== prevC) {
        dfs(score + land[step][i], i, step + 1)
      }
    }
  }
  dfs(0)
  
  return max
}

/**
 * 1. 탐욕법: 각 단계에서 최댓값을 선택. 
 * but, 다음 단계에서는 동일한 열을 선택할 수 없기 때문에 각 단계에서의 최댓값을 선택하는 건 불가능함.
 * ex. 
 * [1,2,3,4]
 * [1,2,4,8]
 * - 각 단계에서의 최댓값을 선택했을 때: 4-4
 * -         합이 최댓값이 되는 경우: 3-8
 * 
 * 2. DFS: 가능하긴 하지만 N = 100,000이라서 시간 초과
 * 
 * 3. 동적계획법
 * R일 때의 최댓값은 R-1일 때의 최댓값에 현재 단계의 점수를 더해 계산할 수 있음
 * - 동일한 부분 문제의 반복
 * - 부분 문제의 최적 값을 사용해 전체 문제의 최적 값을 구할 수 있음
 * 
 */

const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1]
] // 16

console.log(solution(land))
console.log(solutionFail(land))
