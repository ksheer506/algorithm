/**
 * 1. 배열 메서드를 이용한 방법
 * 크기가 n인 집합의 멱집합 P_n은 크기가 n-1인 집합의 멱집합 P_n-1과 P_n-1에 마지막 원소 a_n를 덧붙인 집합들을 추가한 것과 동일하다.
 * P1 = [1] -> [[], [1]]
 * P2 = [1,2] -> [...P1, [2], [1,2]]
 * P3 = [1,2,3] -> [...P2, [3], [1,3], [2,3], [1,2,3]]
*/
function powerSet1(arr) {
  return arr.reduce(
    (a, v) => [...a, ...a.map((set) => [...set, v])], [[]]);
}

/**
 * 2. 재귀를 이용한 방법
 * 방법 1의 규칙이 재귀의 형태를 띄므로 재귀를 이용해 멱집합을 구할 수 있다.(방법 1의 역순)
 * P1 = [1] -> [[], [1]]
 * P2 = [1,2] -> [...P1, [2], [1,2]]
 * P3 = [1,2,3] -> [...P2, [3], [1,3], [2,3], [1,2,3]]
 * 이전 집합(이번에 선택한 원소 `last`가 포함되지 않은 멱집합) + 이번에 선택한 원소 `last`가 포함된 멱집합
*/
function powerSet2(arr) {
  /** 재귀 종료 조건 */
  if (arr.length === 0) {
    return [[]]
  }
  const rest = arr.slice(0, arr.length - 1)
  const last = arr.at(-1)
  const powerSetWithoutLast = powerSet2(rest)
  
  return [
    ...powerSetWithoutLast,
    ...powerSetWithoutLast.map((s) => [...s, last])
  ]
}

const set = [1, 2, 3]

console.log(JSON.stringify(powerSet2(set)))
console.log(JSON.stringify(powerSet3(set)))