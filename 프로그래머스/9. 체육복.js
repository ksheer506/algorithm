function solution(n, lost, reserve) {
  let answer = lost.length;
  const res = new Map(reserve.map((x) => [x, 1]));
  // lost[4, 2] reserve[3, 5]일 때, 정렬을 해야 최대 학생수를 얻을 수 있음
  lost.sort((a, b) => a - b);

  for (let j = 0; j < lost.length; j++) {
    if (res.get(lost[j])) {
      answer--;
      res.set(lost[j], 0);
      lost[j] = -2; // slice, splice 등으로 배열을 변경하면 j 루프가 제대로 돌아가지 않을 수 있으므로 무의미한 번호 -2로 바꿔줌
    }
  }
  for (let i = 0; i < lost.length; i++) {
    if (res.get(lost[i] - 1)) {
      answer--;
      res.set(lost[i] - 1, 0);
    } 
    if (res.get(lost[i] + 1)) {
      answer--;
      res.set(lost[i] + 1, 0);
    }
  }

  return n - answer;
}

/* 
reserve 각 원소에 대해 
reserve[i] -> 여분 체육복 수 1 매칭

lost의 각 원소 lost[j]를 순회하면서
Map.get(lost[j] + 1), Map.get(lost[j] - 1)이 truthy이면 해당하는 reserve[i]에서 1 뺌
*/

/* 
여벌 체육복을 가져온 학생이 체육복을 도난당했다면, 다른 학생에게는 체육복을 빌려줄 수 없음 
→ lost, reserve에 둘 다 있는 학생은 answer -= 1을 해주고, reserve에서 제외해야 함
*/
const n = 5;
const lost = [1, 3, 4];
const reserve = [2, 4, 5];
// 단순 최대는 5명이지만, 4는 자신의 체육복을 입어야 해서 정답은 4명
console.log(solution(n, lost, reserve));
