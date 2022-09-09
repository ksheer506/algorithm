function calculateOptions(O, arr, i) {
  if (O === '#') {
    arr[i] *= -1;
  }
  if (O === '*' && i < 1) {
    arr[i] *= 2;
  }
  if (O === '*' && i >= 1) {
    arr[i] *= 2;
    arr[i-1] *= 2;
  }
  
  return arr;
}

function solution(dartResult) {
  const dartBonus = ['S', 'D', 'T'];
  const base = [0, 0, 0]; // 기본 점수
  const bonus = [1, 1, 1]; // 제곱
  const opt = [1, 1, 1]; // 상
  const res = dartResult.match(/(\d{1,2}\w([#\*]|))/g);
  
  res.forEach((s, i) => {
    const [N, B, O] = s.match(/(\d{1,2})|([SDT])|([#\*])/g);
    
    base[i] = Number(N);
    bonus[i] = dartBonus.findIndex(e => e === B) + 1;
    if (O) {
      calculateOptions(O, opt, i)
    }
  });
  
  console.log(res, base, bonus, opt)

  return base.reduce((a, c, i) => {
    return a += (c ** bonus[i]) * opt[i];
  }, 0);
}

const dart = '1D2S#10S'
// , '1D2S#10S', '1D2S10S', '1D*0S#10S*'
console.log(solution(dart))
