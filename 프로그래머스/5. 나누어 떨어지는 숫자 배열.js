function radixSort(arr) {
  const radix = new Map();
  let sorted = arr;
  let current = 0;

  // 모든 수의 p번째 자릿수가 0이면 더이상 정렬할 필요 없음
  while ((radix.get(0)?.length || 0) < arr.length) {
    radix.clear();
    for (let j = 0; j < sorted.length; j++) {
      const digit = Math.floor(sorted[j] / (10 ** current)) % 10;
      const column = radix.get(digit) || [];

      column.push(sorted[j]);
      radix.set(digit, column);
    }
    sorted = [];
    for (let k = 0; k < 10; k++) {
      // k의 값이 존재하면 sorted에 push()
      radix.has(k) && sorted.push(...radix.get(k));
    }
    current++;
  }

  return sorted;
}

function solution(arr, divisor) {
  if (divisor < 2) return arr.sort((a, b) => a - b);

  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % divisor)) {
      answer.push(arr[i]);
    }
  }
  if (answer.length < 1) return [-1];

  return answer.sort((a, b) => a - b);
}

const arr = [1, 13, 15, 53, 77, 3, 102]
console.log(radixSort(arr))