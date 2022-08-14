function solution(numbers) {
  let answer = '';
  // "맨 앞자리 수 -> 숫자 배열" 객체 정의
  const firstN = numbers.reduce((a, c) => {
    const first = c.toString()[0];
    if (!a[first]) {
      a[first] = [];
    }
    a[first].push(c);
    
    return a
  }, {});
  
  for (const n of Object.keys(firstN)) {
    // 큰 수를 먼저 각 배열의 앞에 배치
    firstN[n].sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`))
    console.log(firstN)

    firstN[n] = firstN[n].reduce((a, c) => a + c, "");
  }

  for (let i = 9; i >= 0; i--) {
    if (firstN[i]) {
      answer += firstN[i];
    }
  }

  return answer;
}

const numbers = [0, 11, 110, 111, 2, 112]
console.log(solution(numbers))

/*
큰 - 작
122 - '12 - 121' - 120
1221 - 12
'212 - 21' - 211 - 210
344 - 34 - 343 - 342 - 341 - 340


1211 12
12 1211
-> 12가 1211보다 더 커야 함

[120 1 0 11]

Number(a b) > Number(b a)이면 a > b
더 큰 걸 앞에 배치해야 하므로 Number(b a) - Number(a b)
*/
