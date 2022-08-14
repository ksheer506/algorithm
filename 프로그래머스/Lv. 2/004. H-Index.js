function solution(citations) {
  let sorted = citations.sort((a, b) => a - b);
  let H = 0;
  const N = citations.length;
  const maxH = Math.min(N, sorted[N - 1]);

  for (let i = 0; i <= maxH; i++) {
    // 최적화: sorted의 첫번째 원소가 i 이하일 때만 filter() 실행
    if (sorted[0] <= i) {
      sorted = sorted.filter((x) => x >= i);
    }
    if (sorted.length >= i) {
      H = i;
    }
  }

  return H;
}

const cit = [10, 10, 10, 10, 10, 10]
console.log(solution(cit))

/* 
1. H는 citations의 원소가 아닐 수 있음
2. H는 citations.length보다 클 수는 없음
  (ex. [100,100,100] → H = 3)
*/

/* 모범 답안 */
function solution(citations) { 
  const sorted = citations.sort((a, b) => a - b); 
  let i = 0; 
  
  while(i < sorted[i]){ 
    i++; 
  } 
  
  return i; 
}