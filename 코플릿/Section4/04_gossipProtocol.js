const createMatrix = (village) => {
  return village.map((line) => line.split(""));
};

const gossipProtocol = (village, row, col) => {
  const villageMtx = createMatrix(village);
  const M = villageMtx[0].length; // 세로 줄
  const N = villageMtx.length;  // 가로 줄
  const start = new Set([`${col},${row}`]);
  let days = -1;

  const gossip = (village, locations) => {
    // 방문했던 마지막 주소를 locations 집합으로 다시 받아서 해당 집합의 길이가 0이 될 때까지 전파 
    if (locations.size < 1) return;
    const nextLoc = new Set();
    days += 1;

    for (const location of locations) {
      const [c, r] = location.match(/\d{1,}/g).map((x) => Number(x));

      village[r][c] = "x";  // 방문 표시 
      if (c + 1 < M && village[r][c + 1] === "1") nextLoc.add(`${c + 1},${r}`);
      if (c - 1 >= 0 && village[r][c - 1] === "1") nextLoc.add(`${c - 1},${r}`);
      if (r + 1 < N && village[r + 1][c] === "1") nextLoc.add(`${c},${r + 1}`);
      if (r - 1 >= 0 && village[r - 1][c] === "1") nextLoc.add(`${c},${r - 1}`);
      // 주의: 배열은 참조 자료형이기 때문에 nextLoc.add([c, r+1])을 했을 때 [1, 2], [1, 2]은 다른 값으로 인식되어 둘 다 Set 객체에 담겨서 중복 제거가 안 됨
    }
    gossip(village, nextLoc);
  }
  gossip(villageMtx, start);

  return days;
};

/* 레퍼런스 풀이: 성능이 더 좋음 */
const gossipProtocol2 = function (village, row, col) {
  // bfs 구현을 위해 큐를 선언한다.
  // enQueue, deQueue시마다 인덱싱을 다시 하지 않기 위해
  // 순환 큐(circular queue)로 구현한다.
  // queue의 가능한 최대 크기만큼 배열을 선언한다.
  // 문제의 특성에 따라 큐에는 좌표 평면의 한 점이 삽입되고, 한번 삽입된 요소는 두 번 다시 삽입되지 않는다.
  const R = village.length;
  const C = village[0].length;
  const matrix = createMatrix(village);
  const MOVES = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, 1], // RIGHT
    [0, -1], // LEFT
  ];
  const MAX_SIZE = R * C; // 가능한 모든 좌표의 크기만큼 큐가 선언되었으므로, 사실 순환큐일 필요는 없다.
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
  const queue = Array(MAX_SIZE);
  let front = 0;
  let rear = 0;

  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    // 실행 중에 큐가 가득차지는 않기 때문에 별도의 조건문을 작성할 필요가 없다.
    queue[rear] = pos;
    // 모듈러스 연산을 할 필요도 사실 없다.
    rear = (rear + 1) % MAX_SIZE;
  };
  const deQueue = (queue) => {
    const pos = queue[front];
    // 모듈러스 연산을 할 필요도 사실 없다.
    front = (front + 1) % MAX_SIZE;
    return pos;
  };

  let cnt = 0;
  enQueue(queue, [row, col]);
  // 소문이 퍼지는 데 걸리는 시간을 저장한다.
  matrix[row][col] = 0;
  while (isEmpty(queue) === false) {
    // 큐의 가장 앞 자리의 좌표를 얻는다.
    const [row, col] = deQueue(queue);
    cnt = matrix[row][col];

    // 현재 지점을 기준으로 네 방향을 검토한다.
    MOVES.forEach((move) => {
      const [rDiff, cDiff] = move;
      const nextRow = row + rDiff;
      const nextCol = col + cDiff;
      if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === '1') {
        enQueue(queue, [nextRow, nextCol]);
        matrix[nextRow][nextCol] = matrix[row][col] + 1;
      }
    });
  }
  return cnt;
};

const rowA = "1".repeat(1000);
const village = new Array(1000).fill(0).map((x) => rowA);

const row = 2
const col = 2
/* const output2 = gossipProtocol2(village, row, col);
console.log(output2) */

