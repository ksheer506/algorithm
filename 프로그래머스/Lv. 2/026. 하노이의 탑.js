function solution(n) {
  const memo = [
    [], 
    [[1, 3]],
    [[1,2], [1,3], [2,3]]
  ]
  
  const getStack = (n) => {
    if (n <= 2) {
      return memo[n]
    }
    if (n > 2) {
      memo[n] = [
        ...getStack(n - 2), 
        [1,2], [3,2],
        [1,3], [2,3]
      ]
    }
    return memo[n]
  }
  
  return getStack(n)
}

/**
 * n=1 : [1,3]
 * 
 * n=2 : [1,2] ...  [1,3] [2,3] 뒤 두개는 n판을 3번 기둥에 옮기고 완성된 1,2, ..,n-1판을 3번 기둥에 옮기는 동작
 * 
 * n=3 :
 * [1,3] ... 1판을 3기둥에 완성
 * 
 * [1,2] ... 2판을 2기둥으로
 * [3,2] ... 1-2판을 2기둥에 완성
 * 
 * [1,3] ... 3판을 3기둥으로
 * 
 * [2,1] ... 1판을 1기둥으로(1-2를 분리)
 * [2,3] ... 2-3판 완성
 * 
 * [1,3] ... 1판을 3기둥으로 
 * 
 * n=4 : 
 * [1,2] [1,3] [2,3] ... 1-2판을 3기둥에 완성
 * 
 * [1,2] ... 3판을 2기둥으로
 * [3,1] [3,2] [1,2] ... 1-2-3판을 2기둥에 완성
 * 
 * [1,3] ... 4판을 3기둥으로
 * 
 * [2,3] [2,1] [3,1] ... 1-2-3판을 분리해서 다시 1-2판을 1기둥에 완성
 * [2,3] ... 3-4판 완성
 * 
 * [1,2] [1,3] [2,3] ... 1,2판을 3-4판에 쌓음(3기둥에 완성)
 * 
 * 
 * a(k) =
 * (1) a(k-2): n=k-2를 3기둥에 완성
 * (2) [1,2] k-1판을 2기둥에 놓기
 * (3) b(k-2): 3기둥에 있는 n=k-2를 2기둥에 놓기
 * (4) [1,3] k판을 3기둥에 놓기
 * (5) c(k-2): 2기둥에 있는 n=k-2를 1기둥에 놓기
 * (6) [2,3] 2기둥에 있는 k-1판을 3기둥에 놓기
 * (7) a(k-2): n=k-2를 3기둥에 완성
 * 
 * a(k) = 4a(k-2) + 3
 * a(k+1) = 4a(k-1) + 3
 * 
 * a(k+1) - a(k) = 4(a(k-1) - a(k-2))
 * b(k) = 2(2b(k-2))
 * a(k+1) - a(k) = 2^k-1 + 2
 * 
 * a(1) = 1, a(2) = 3, a(3) = 7
 */

console.log(solution(2));