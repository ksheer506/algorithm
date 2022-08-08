function solution(n, lost, reserve) {
  let answer = lost.length;
  const res = new Map(reserve.map((x) => [x, 1]));
  
  for (let i = 0; i < lost.length; i++) {
    // 자신의 여분 먼저 확인
    if (res.get(lost[i] - 1)) {
      answer--;
      res.set(lost[i] - 1, 0);
    } else if (res.get(lost[i])) {
      answer--;
      res.set(lost[i], 0);
    } else if (res.get(lost[i] + 1)) {
      answer--;
      res.set(lost[i] + 1, 0);
    }
  }
  console.log([...res])
  return n - answer;
}

/* 
reserve 각 원소에 대해 
reserve[i] -> 여분 체육복 수 1 매칭

lost의 각 원소 lost[j]를 순회하면서
Map.get(lost[j] + 1), Map.get(lost[j] - 1)이 truthy이면 해당하는 reserve[i]에서 1 뺌
*/
/* 예시1
l   [2,3],
    / /
r [1,2]
2가 자기 먼저 챙기면 3은 체육복 x
but. 2는 1 빌리고, 3은 2 빌리면 최대
*/
/* 예시2
l [2,3],
   | |
r [2,3]

*/
/* 예시3
l [2,3],
    \ \
r   [3,4]
*/
/* 예시4
l [2,3],
      \
r     [4,5]
*/
const n = 5;
const lost = [1,4,3];
const reserve = [2,4];
console.log(solution(n, lost, reserve));
console.log(lost.sort((a,b) => a-b))
