function solution(n) {
  let caseN = 0;
  let m = 1;

  while (m <= Math.sqrt(n)) {
    const a = n / m;
    const isInteger = Number.isInteger(a);
    
    if(!isInteger) {
      m++;
      continue;
    }

    if ((a % 2)) {
      caseN += 1;
    }
    if (a != m && (m % 2)) {
      caseN += 1;
    }
    m++;
  }

  return caseN;
}
/*
a * m + (1+ ... + m)
a * m + m(m + 1) / 2  = n (m ≥ 1)
a = n / m  - (1/2) * (m + 1)

-> 1. m이 n으로 나누어 떨어지고
   2. m + 1이 짝수 = m이 홀수

1 3 5 15: 홀수인 약수의 개수
1 2 4 8 16
1 2 3 6
*/
