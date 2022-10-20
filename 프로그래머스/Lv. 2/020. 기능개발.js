function solution(progresses, speeds) {
  const answer = [];
  const requiredTime = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));
  let front = 0;
  let rear = 1;
  
  while (front < requiredTime.length) {
    const first = requiredTime[front];
    const last = requiredTime[rear];
    
    if (first >= last) {
      rear++;
      continue;
    }
    answer.push(rear - front);
    front = rear;
    rear++;
  }

  return answer;
}


const progresses = [93, 30, 55]
const speeds = [1, 30, 5]
console.log(solution(progresses, speeds));