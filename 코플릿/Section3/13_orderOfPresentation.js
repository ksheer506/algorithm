function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  let order = 1;
  let factorial = 1;

  for(let i = 1; i < K.length; i++) {
    if (K[0] > K[i]) order++;
  }

  let minOrder = (N - 1) * (order - 1);

  if (K.length < 1) return minOrder;

  if (order > 1) {
    let p = N - 1;
    factorial = 1;

    while ( p >= 1) {
      factorial *= p;
      p--;
    }
    minOrder = factorial * (order - 1);
  }

  return minOrder + orderOfPresentation(N - 1, K.slice(1));
}

let output = orderOfPresentation(12, [8, 3, 9, 10, 1, 2, 12, 11, 7, 6, 5, 4]);
console.log(output); 

// [1, 2, 3, ..., N]
// const offset = a > 1 ? 1 : 0
// N(0) = a이면 (N-1)*(a-1) <= k0 <= (N-1)*a - 1       
// k0.min === k0max가 아니므로 k1으로 이동
// N(1) = b,       minimum(k0)       +       (N-1-1) * (b-1) <= k1 <= (N-1-1) * b
// N(2) = c,        minimum(k0) + minimum(k1)      + (N-2-1) * (c-1) <= k1 <= (N-2-1) * c