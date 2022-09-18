function solution(n) {
  let fuel = 0;

  while (n >= 1) {
    if (n % 2) {
      fuel += 1;
      n -= 1;
      continue;
    }

    n /= 2;
  }

  return fuel;
}

/* 
1. n이 짝수일 때 계속 ÷2
2. 홀수이면 -1

ex. 5000 - 2500 - 1250 - 1125 - 
    1124 - 562 - 281
    280 - 140 - 70 - 35
    34 - 17
    16 - 8 - 4 - 2 - 1
    0
*/

const N = 5000;
console.log(solution(N))