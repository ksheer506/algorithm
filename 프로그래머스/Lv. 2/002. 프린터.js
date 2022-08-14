function solutionN2(priorities, location) {
  const L = priorities.length;
  const queue = priorities.slice();
  let rear = L - 1;
  let targetI = location;
  let order = 1;
  
  for (let i = 0; i < L ** 2; i++) {
    if (queue[i] === undefined) break;
    let isUrgent = !queue.some((x) => x > queue[i]); // 반복문 안에 O(N) 메서드 → 비효율
 
    
    if (i === targetI && isUrgent) {
      return order;
    } else if (i === targetI && !isUrgent) { // target을 이번에 인쇄하지 않으면 큐의 맨 뒤로 이동
      targetI = rear + 1;
    }
    if (isUrgent) {
      order += 1;
    } else { // 현재 인쇄물을 인쇄하지 않으면 큐의 맨 뒤로 보내고, rear도 한 칸 뒤로
      queue[rear + 1] = queue[i];
      rear += 1;
    }
    
    // 현재 인쇄물은 인쇄되거나, 뒤로 가거나 현재 위치에서 사라지므로 현재 큐를 제거 
    queue[i] = undefined;
  }
}


function solutionN(priorities, location) {
  // 우선순위 -> 해당 우선순위의 인쇄물 총 개수 Map
  const priorM = new Map();
  const L = priorities.length;
  const queue = priorities.slice();
  let rear = L - 1;
  let targetI = location;
  let order = 1;
  
  for (let j = 0; j < priorities.length; j++) {
    priorM.set(priorities[j], (priorM.get(priorities[j]) || 0) + 1);
  }
  
  for (let i = 0; i < L ** 2; i++) {
    if (queue[i] === undefined) break;
    let isUrgent = true;
    
    // 우선순위가 더 높은 인쇄물의 개수 파악
    for (let k = queue[i] + 1; k <= 9; k++) {
      if (priorM.get(k)) {
        isUrgent = false;
        break;
      }
    }

    if (i === targetI && isUrgent) {
      return order;
    } else if (i === targetI && !isUrgent) {
      targetI = rear + 1;
    }
    if (isUrgent) {
      order += 1;
      priorM.set(queue[i], priorM.get(queue[i]) - 1); // Map에서 해당 우선순위의 개수 -1
    } else {
      queue[rear + 1] = queue[i];
      rear += 1;
    }
    
    queue[i] = undefined;
  }
}


// const prior = [1, 5, 2, 4, 9, 1, 1, 3, 2];
const loc = 6;
const prior = new Array(1000).fill(0).map((x, i) => (i + 3) % 9 + 1)

console.log(solutionN2(prior, loc))
console.log(solutionN(prior, loc))

/* 성능
문제의 제한조건인 priorities의 길이가 100일 때, Map을 사용한 방법이 배열 메서드 some()을 사용한 방법보다 10배 넘게 빠름

길이     100    500    1000     5000
Map      0.2    0.6     1.2      6.1
some()   3.5   64.0    240.0  3360.0
*/
