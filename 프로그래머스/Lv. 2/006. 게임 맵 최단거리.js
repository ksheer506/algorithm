const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

function solution(maps) {
  const R = maps.length - 1;
  const C = maps[0].length - 1;
  const queue = [[0, 0, 1]]

  const isOnMap = (r, c) => r >= 0 && r <= R && c >= 0 && c <= C;

  while (queue.length) {
    const [a, b, step] = queue.shift();

    // 이미 지났던 길(> 1)은 이전에 해당 위치에서 상하좌우를 큐에 넣었으므로 아래 forEach 연산 필요 x
    if (maps[a][b] > 1 && maps[a][b] <= step) continue;
    // 맵의 현재 위치에 원점에서부터 지나 온 거리 기록
    maps[a][b] = step;

    DIRECTIONS.forEach(([x, y]) => {
      if (isOnMap(a + x, b + y) && maps[a + x][b + y]) {
        queue.push([a + x, b + y, step + 1]);
      }
    })
  }
  return maps[R][C] > 1 ? maps[R][C] : -1;
}

/** 
 * !! 틀린 풀이 !!
 * DFS는 첫 경로로 r+1, c 방향으로 계속 나아가는(재귀적) 경로를 "끝까지" 검사하고, ... 등 하나의 경로로 끝까지 탐색하기 때문에 비효율적.
 * 반면, BFS는 현재 위치에서 가능한 다음 모든 경로 중 탐색할 필요가 없는 경로는 경우의 수에서 바로 제외해버리기 때문에 최단 경로 문제에서 DFS보다 효율적. 
 * 
 * DFS가 가능한 모든 경로를 하나 하나 끝까지 탐색하는 것이라면 BFS는 특정 경로를 상정하지 않고 사방으로 퍼져나가면서 탐색하는 것이라고 생각할 수 있음.
 */
function solutionFailed(maps) {
  const R = maps.length - 1;
  const C = maps[0].length - 1;

  const dfs = ([r, c], step) => {
    const onMaps = r >= 0 && r <= R && c >= 0 && c <= C;
    
    // 현재 위치가 맵 바깥이거나 장애물(0) 위일 때 중단
    if (!onMaps || !maps[r][c]) return;
    // 이전에 지났던 경로인데 최단 거리 기록이 있는 경우 중단
    if (maps[r][c] > 1 && maps[r][c] <= step) return;

    maps[r][c] = step;
    dfs([r + 1, c], step + 1);
    dfs([r - 1, c], step + 1);
    dfs([r, c + 1], step + 1);
    dfs([r, c - 1], step + 1);
  }
  dfs([0, 0], 1);

  return maps[R][C] > 1 ? maps[R][C] : -1;
}
// 효율성1: call stack overflow
// 효율성3~4: 시간 초과

const maps = [
  [1,0,1,1,1],
  [1,0,1,0,1],
  [1,0,1,1,1],
  [1,1,1,0,1],
  [0,0,0,0,1]
]

const maps2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1]
]

console.log(solution(maps))
