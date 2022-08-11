let tiling = function (n) {
  const memo = [0, 1, 2];

  const fiboTile = (n) => {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = fiboTile(n - 1) + fiboTile(n - 2);

    return memo[n];
  }

  return fiboTile(n);
};

/* 
N = 홀수
1. 바로 앞 짝수 타일링에서 맨 뒤에 ㅣ 붙이는 경우
2. 그 앞 홀수 타일링에서 맨 뒤에 = 붙이는 경우
tiling(N) = tiling(N-1) + tiling(N-2)

N = 짝수
1. 바로 앞 홀수 타일링에서 맨 뒤에 ㅣ 붙이는 경우
2. 바로 앞 짝수 타일링에서 맨 뒤에 =  붙이는 경우 
tiling(N) = tiling(N-1) + tiling(N-2)
*/