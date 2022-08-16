function solution1(s) {
  const arr = s.split('');
  const map = new Map();
  let answer = '';

  for (let i = 0; i < arr.length; i++) {
    const c = arr[i].charCodeAt(0);
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (let j = 122; j >= 65; j--) {
    if (!map.get(j)) continue;
    answer += String.fromCharCode(j).repeat(map.get(j));
  }

  return answer;
}

function solution2(s) {
  return s
    .split('')
    .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
    .reduce((a, c) => a += c);
}

// 두 방법 모두 큰 차이는 없지만 테스트 케이스에서 1번은 최대 0.2ms(테스트 6), 2번은 최대 0.5ms(테스트 5)