function countingSort(arr) {
  const max = Math.max(...arr);
  const freq = new Array(max + 1);
  const sorted = [];
  let i = 0;
  
  while (i < freq.length) {
    freq[arr[i]] ||= 0;
    freq[arr[i]] += 1;
    i++
  }
  
  i = 0;
  while (i < freq.length) {
    if (freq[i]) {
      freq[i] -= 1;
      sorted.push(i);
    } else {
      i++;
    }
  }
  
  return sorted;
};

function solution(numbers) {
  const sorted = countingSort(numbers);
  // const sorted = numbers.sort((a, b) =>  a - b)
  const answer = new Set();
    
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      const sum = sorted[i] + sorted[j];
      if (!answer.has(sum)) {
        answer.add(sum);
      }
    }
  }
    
  return Array.from(answer);
}

const numbers = [5,0,2,7];
console.log(solution(numbers))
// [0, 2, 5, 7]
// [0, 2, 5, 7]
// 2 5 7 7 9 12
// i = 0 루프, j = i 루프
