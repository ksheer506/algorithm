const COLUMNS = [1, 2, 3]

function solution(n) {
  const moveDisks = (m, from, to) => {
    // from, to 기둥이 아닌 기둥
    const midColumn = COLUMNS.filter((e) => e !== from && e !== to)[0]
    
    if (m <= 1) {
      return [[from, to]]
    }
    return [
      ...moveDisks(m - 1, from, midColumn),
      [from, to],
      ...moveDisks(m - 1, midColumn, to),
    ]
  }
  
  return moveDisks(n, 1, 3)
}
/*
m(3,1,3) = [m(2,1,2), [3,1] m(2,2,3)]
= [
  m(1,1,3) [1,2] m(1,3,2)
  [3,1]
  m(1,2,1) [2,3] m(1,1,3)
]
*/

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
 * n=k를 1 -> 3기둥에 완성
 *  = n=k-1을 1 -> 2기둥에 완성 (A)
 *   + k판을 3기둥에 놓기
 *   + n=k-1을 2 -> 3기둥에 완성
 * 
 * (A) n=k-2를 1 -> 3기둥에 완성
 *   + k-1판을 2기둥에 놓기
 *   + n=k-2를 3 -> 2기둥에 완성
 * 
 * n=k를 a -> c기둥에 완성
 *  = n=k-1을 a -> b기둥에 완성
 *   + k판을 a -> c기둥에 놓기
 *   + n=k-1을 b -> c기둥에 완성
 * 
 * a(k) = 4a(k-2) + 3
 * a(1) = 1, a(2) = 3, a(3) = 7
 */

console.log(...solution(4));