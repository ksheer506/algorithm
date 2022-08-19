/*  
  1. 현재 위치에서 1 체크하고 상하좌우 이동. 단, 이동한 위치가 배열 밖이거나 1(장애물)이면 탐색 중단
  2. 이전 단계에서 이동한 위치에서 1 체크하고 상하좌우 이동 . 
*/ 

const robotPathDFS = function (room, src, dst) {
  const R = room.length;
  const C = room[0].length;
  let time = R * C;  // 초기값: 적당히 큰 값으로 설정

  const dfs = ([r, c], step) => {
    const isValid = r < R && r >= 0 && c < C && c >= 0;

    if (!isValid || room[r][c] === 1) return;  // 좌표 밖이거나 장애물을 만났을 때 더이상 진행 x 
    if (room[r][c] > 0 && room[r][c] <= step) return;  // 이전에 지났던 루트가 더 최단 거리일 때 더이상 진행 x
    if (r === dst[0] && c === dst[1]) {  // 목적지에 도착
      time = Math.min(step - 1, time);

      return;
    }

    room[r][c] = step;
    /*
      현재 위치에 room[r][c] = 1 표시를 하면 다른 재귀 루트에서 해당 좌표를 지날 수 있어야 하는데 그렇지 못하게 됨
      그렇다고 1 표시를 안 하면 앞뒤앞뒤 계속 무한 반복할 수 있음

      -> 각 재귀 루트마다 독립적으로 지나온 길을 표시할 수 있어야 함
      -> 시작점은 step = 1, 이후 지나는 길은 바닥에 step + 1을 표시하고,

      a. 해당 위치가 1이면 장애물, 
      b. 1보다 큰 값은 이전에 지나온 길
        - 현재 step보다 크거나 같으면 이전 루트보다 현재 루트가 최단 거리라는 의미이므로 바닥에 현재 step 표시
        - 현재 step보다 작으면 이전 루트가 최적 루트라는 의미이므로 현재 루트는 종료
      c. 0이면 최초로 지나는 길이므로 조건없이 바닥에 step 표시
    */

    dfs([r + 1, c], step + 1);
    dfs([r - 1, c], step + 1);
    dfs([r, c + 1], step + 1);
    dfs([r, c - 1], step + 1);
  }
  dfs(src, 1);

  return time;
}



let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];

console.log(robotPathDFS(room, src, dst)); // --> 8


