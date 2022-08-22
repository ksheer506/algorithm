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

    firstN[n] = firstN[n].reduce((a, c) => a + c, "");
  }

  for (let i = 9; i >= 0; i--) {
    if (firstN[i]) {
      answer += firstN[i];
    }
  }
  if (answer.match(/^0{1,}$/g)) return '0'

  return answer;
}

const numbers = new Array(1000).fill(0).map((x, i) => i).filter(x => x.toString()[0] === '1')
console.log(solution(numbers))

/*
큰 - 작
122 - '12 - 121' - 120
'212 - 21' - 211 - 210
344 - 34 - 343 - 342 - 341 - 340

Number(a b) > Number(b a)이면 a > b
더 큰 걸 앞에 배치해야 하므로 Number(b a) - Number(a b)
*/

/* 
numbers의 원소는 0 이상 1000 이하이지만
numbers의 길이는 1 이상 100,000이하
→ 숫자가 중복되어 출현할 수 있다는 의미

<edge case>
numbers = [0,0,0,0,0] 0으로만 이루어져 있을 때, 정답은 '0'이지만 반환값은 '00000'
*/