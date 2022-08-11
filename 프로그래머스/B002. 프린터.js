function solution(priorities, location) {
  const L = priorities.length;
  const queue = priorities.slice();
  let rear = L - 1;
  let targetI = location;
  let order = 1;
  
  for (let i = 0; i < L ** 2; i++) {
    if (queue[i] === undefined) break;
    let isUrgent = !queue.some((x) => x > queue[i]);
    
    if (i === targetI && isUrgent) {
      return order;
    } else if (i === targetI && !isUrgent) {
      targetI = rear + 1;
    }
    if (isUrgent) {
      order += 1;
    } else {
      queue[rear + 1] = queue[i];
      rear += 1;
    }
    
    queue[i] = undefined;
  }
}


const prior = [1, 5, 2, 4, 9, 1, 1, 3, 2];
const loc = 2; //    ↑

console.log(solution(prior, loc))
