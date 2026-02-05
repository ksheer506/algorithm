function solution(n, computers) {
  const networks = []
  
  const dfs = (link) => {}
  
  return answer;
}

/**
 * 1. i번째(0 ≤ i ≤ L-1) 컴퓨터에서부터 DFS로 연결된 컴퓨터를 순회  
 * 2. k번째 컴퓨터를 순회할 때 기존에 순회한 네트워크라는 건 어떻게 판단? 
 *   - a, b 컴퓨터가 연결되어 있다면 computers[a][b] === computers[b][a] === 1이기 때문에 행렬은 대각선을 중심으로 대칭.
 *   - computers[i][j]에 대해 i ≤ j 영역만 순회하면
 *  
 * 1 - 3
 * \
 * 2
 * 이런 경우는?
 */

const n = 3
const computers = [
  [1, 1, 0], 
  [1, 1, 0], 
  [0, 0, 1],
]

console.log(solution(n, computers))