function solution(people, limit) {
  const list = people.sort((a, b) => a - b);
  const remains = limit - 40;
  let pairI = 0;
  let boats = 0;
  
  while (list.length) {
    const W = list.pop();
    
    if (W > limit) continue;
    if (W > remains && W <= limit) {
      boats++;
      continue;
    }
    
    if (W + list[pairI] <= limit) {
      // 같이 내린 사람의 인덱스에 limit보다 큰 값을 넣어 다시 사용하지 않도록 함
      list[pairI] = limit + 1;
      pairI++;
    }
    boats++;
  }
  
  return boats;
}

const people = [70, 50, 80, 50, 55, 40];
const limit = 100;
console.log(solution(people, limit));

/* 
1. 40 ≤ load ≤ limit - 40
- limit - load 무게의 사람을 찾아서 같이 태움
- 없으면 그보다 작으면서 가장 무거운 사람을 같이 태움 
2. load > limit - 40
하나만 옮김

*/
