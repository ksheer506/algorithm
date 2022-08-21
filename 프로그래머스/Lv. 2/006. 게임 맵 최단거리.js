function solution(maps) {
  const R = maps.length - 1;
  const C = maps[0].length - 1;
  const dst = [R, C];

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

function solutionW(maps) {
  const R = maps.length - 1;
  const C = maps[0].length - 1;
  const dst = [R, C];
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  const onMaps = (a, b) => a >= 0 && a <= R && b >= 0 && b <= C;

  const stack = [[0, 0, 1]];

  while (stack.length) {
    const [a, b, step] = stack.pop();

    if (maps[a][b] > 1 && maps[a][b] <= step) continue;

    maps[a][b] = step;
    
    const next = [];

    dir.forEach(([x, y]) => {
      if (onMaps(a + x, b + y) && maps[a + x][b + y]) {
        next.push([a + x, b + y, step + 1]);
      }
    })
  }

  return maps[R][C] > 1 ? maps[R][C] : -1;
}

/* 
최상단 → 최하단이므로 최단 경로는
1. 위, 아래가 모두 가능하면 아래만
2. 왼쪽, 오른쪽 모두 가능하면 오른쪽만
3. 위, 오른쪽 모두 가능하면 오른쪽만
*/

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1]
]
const maps2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1]
]

console.log(solutionW(maps2))
