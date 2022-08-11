function countingSort(arr) {
  const max = Math.max(...arr);
  const freq = new Array(max + 1);
  const sorted = [];
  let i = 0;
  
  while (i < arr.length) {
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
  // ↑ numbers를 정렬하지 않아도 어차피 나중에 한 번 더 정렬해야 하므로 필요 없는 코드
  const answer = new Set();
    
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      const sum = sorted[i] + sorted[j];
      if (!answer.has(sum)) {
        answer.add(sum);
      }
    }
  }
    
  return countingSort(Array.from(answer));
}

const numbers = [5,0,2,7];
console.log(solution(numbers))
// [0, 2, 5, 7]
// 2 5 7 7 9 12
// i = 0 루프, j = i+1 루프

// [0, 2, 3, 7, 10]
// [0, 2, 3, 7, 10]
// 0 2 3 7 "10 5" ...
// numbers를 정렬했어도 answer 배열은 정렬되지 않았을 수 있음