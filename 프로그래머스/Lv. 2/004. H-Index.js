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
function solution2(citations) { 
  const sorted = citations.sort((a, b) => b - a); // 내림차순으로 정렬
  let i = 0; 
  
  /* 
  H = sorted[i] 이상인 논문의 개수 N = i.
  i가 증가할 때, H는 감소하지만 N은 증가하므로 최초로 i ≥ sorted[i]가 될 때가(즉, N ≥ H) H의 최댓값.
  */
  while(i < sorted[i]){ 
    i++; 
  } 
  
  return i; 
}

const arr = [0,0,3,3,4,5]
console.log(solution2(arr))