function solution(n, computers) {
  const remained = Array.from({ length: n }, (_, i) => i)
  const networks = []
  let head = 0
  
  const dfs = (link) => {
    const last = link[link.length - 1]

    for (let i = 0; i < n; i++) {
      if (computers[last][i] === 1 && remained[i] !== null) {
        remained[i] = null;
        dfs([...link, i]);
      }
    }
    return link
  }

  while (head < n) {
    const front = remained[head];

    if (front !== null) {
      remained[head] = null;
      networks.push(dfs([front]));
    }
    head += 1
  }
  return networks.length;
}

/**
 * DFS를 "모든 경우의 수 생성기"로 쓰려 하지 말고, 하나의 시작점에서 갈 수 있는 곳을 전부 지워버리는 도구라고 생각
 * 
 * 1. 큐인 remained를 [0, 1, 2, ... n-1]으로 초기화
 * 2. 0번째 컴퓨터에서부터 remained[0] = null로 설정해 재방문을 방지하고, DFS를 이용해 연결된 컴퓨터를 순회. 
 * 3. DFS에서 for 루프로 0 ~ n-1번째 노드를 방문. 단, 첫방문(remained[k] !== null)이고 연결된 노드만
 *   - 재귀 종료 조건: 없음(방문 여부로 재귀를 더 돌건지 결정하기 때문에 방문 여부만 체크하면 자연스럽게 재귀가 종료됨)
 * 
 * 4. 0번째 컴퓨터에서 DFS가 끝나면, networks를 1 올리고, remained[ㅏ] !== null인 다음 컴퓨터에서 2~3번 과정
 *  
 */

const n = 3
const computers = [
  [1, 1, 0], 
  [1, 1, 0], 
  [0, 0, 1],
]

console.log(solution(n, computers))