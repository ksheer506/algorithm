function solution(x, y, n) {
  const visited = new Set();
  const queue = [{ n: x, count: 0 }];
  let head = 0;
  let answer = null;

  const OPERATIONS = [(a) => a + n, (a) => a * 2, (a) => a * 3];

  while (head < queue.length) {
    const current = queue[head++];

    if (current.n === y) {
      answer = current;
      break;
    }
    // 1. 이미 방문한 숫자는 이후 연산의 결과값이 동일해지기 때문에 더이상 큐에 넣지 않음
    // 2. y보다 커지는 경우도 이후 연산을 진행할 이유가 없음
    if (visited.has(current.n) || current.n > y) {
      continue;
    }
    visited.add(current.n);

    for (op of OPERATIONS) {
      queue.push({ 
        n: op(current.n), 
        count: current.count + 1 
      });
    }
  }
  return answer?.count ?? -1;
}

function solutionFail(x, y, n) {
  let minCount = Infinity;

  const OPERATIONS = [(a) => a + n, (a) => a * 2, (a) => a * 3];

  const dfs = (current, count) => {
    if (current > y) {
      return;
    }
    if (current === y) {
      minCount = Math.min(count, minCount);
      return;
    }

    for (op of OPERATIONS) {
      dfs(op(current), count + 1);
    }
  };
  dfs(x, 0);

  return minCount < Infinity ? minCount : -1;
}

/**
 * [시간 초과 실패]
 * 현재 숫자 x를 시작으로 세 개의 연산 op1(a + 5), op2(a * 2), op3(a *3)을 해보면서 y에 도달할 수 있는지 확인해야 함.
 * 1. 매 순회마다 [op1, op2, op3]중 하나를 선택해 연산을 해야 하므로 DFS를 이용할 수 있음.
 * 2. 매개변수: 연산 후 현재 값 current와 연산 횟수는 계속 기억하고 있어야 하므로 함수의 매개변수로 전달.
 * 3. 탐색 중단 조건: current >= y. current === y라면 minCount와 count를 비교해서 최솟값으로 교체
 *
 * -> 최소 연산 횟수(최단 거리) 문제이므로 DFS가 아니라 BFS를 사용해야 함. DFS에서는 한 경로가 최대 횟수라 하더라도 끝까지 진행할 수밖에 없음.
 */

const x = 2;
const y = 5;
const n = 4;

console.log(solution(x, y, n)); // 2
