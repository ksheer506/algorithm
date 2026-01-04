/**
 * [소수 판별법]
 * 모든 정수 N = a×b(단, a < b)로 표현할 수 있는데, 1 < a < N인 a에 대해 N을 나눴을 때의 나머지가 0이면 N은 소수이다. 
 *  a = 2, 3, 4, ... , N-1 까지 모든 수에 대해 N % a === 0인지로 판단할 수 있는데 a >= Math.sqrt(N)에 대해서는 몫과 나누는 수를 뒤바꾼 것(b×a)이라고 할 수 있다.
 * 따라서 a >= Math.sqrt(N) 부터는 a <= Math.sqrt(N)에 대해 나머지를 구하는 것과 동일하기 때문에 a <= Math.sqrt(N)까지만 계산하면 된다.
 * 
 * 예를 들어, 24는 
 * 1×24, 2×12, 3×8, 4×6, (a×b)
 * 24×1, 12×2, 8×3, 6×4  (b×a)
 * √24를 기준으로 중복되는 계산이라고 할 수 있다.
 */
const isPrime = (n) => {
  if (n <= 1) {
    return false
  }
  for (let m = 2; m <= Math.sqrt(n); m++) {
    if (n % m === 0) {
      return false
    }
  }
  return true
}