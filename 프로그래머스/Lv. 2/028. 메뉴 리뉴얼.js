function solution(orders, course) {
  const orderedDishes = [...new Set(orders.join(''))].sort()
  // 코스의 길이 N → 길이가 N인 코스 중에서 orders에 가장 많이 포함된 코스의 주문 횟수 max 값 M
  const courseHitMax = new Map(course.map((c) => [c, 0]))
  // 코스의 길이 N → 길이가 N이고 주문 횟수가 M인 코스들의 배열(M이 달라지면 그 value는 초기화되어야 함)
  const hitCourses = new Map([...courseHitMax].map(([c]) => [c, []]))
  const availableCourses = createPowerSet(orderedDishes).filter((d) => courseHitMax.has(d.length))
  
  for (const course of availableCourses) {
    const setMenu = course.join('')
    const L = setMenu.length
    const hitCount = orders.reduce((a, o) => isCourseIncluded(setMenu, o) ? a + 1 : a, 0)
    
    if (hitCount < 2) {
      continue
    }
    const prevMax = courseHitMax.get(L)
    const prevCandidates = hitCourses.get(L)
    
    if (prevMax < hitCount) {
      courseHitMax.set(L, hitCount)
      hitCourses.set(L, [setMenu])
    } else if (prevMax === hitCount) {
      hitCourses.set(L, [...prevCandidates, setMenu])
    }
  }

  return [...hitCourses.values()].flatMap((e) => e).sort()
}

const isCourseIncluded = (candidate, order) => new Set([...candidate, ...order]).size === order.length

const createPowerSet = (elements) => {
  console.time('stack')
  const stacks = [[[]], []]
  let index = 0
  let stackIndex = 0
  
  for (let i = 0; i < elements.length; i++) {
    const nextIndex = (stackIndex + 1) % 2
    const stack0 = stacks[stackIndex]
    const stack1 = stacks[nextIndex]
    
    while (stack0.length > 0) {
      const current = stack0.pop()
      const e = elements[i]
    
      stack1.push(current, [...current, e])
    }
    stackIndex = nextIndex
  }
  const r = stacks.flatMap((e) => e)
  console.timeEnd('stack')
  return r
}

function powerSet(elements) {
  console.time('bitmask') 
    const result = [];
    const L = elements.length;
    const powerSetSize = 1 << L; // 2^L, 가능한 부분 집합의 총 개수

  /* 
    elements의 i번째 문자가 i번째 비트가 됨.
    ex. 11(3)이면 BA, 110(6)은 CB.
    그런데 j 루프를 0부터 순회하므로 BA가 아니라 AB, BC가 배열에 push됨
  
  */
    for (let i = 0; i < powerSetSize; i++) {
        const subset = [];
        
        for (let j = 0; j < L; j++) {
            if (i & (1 << j)) { // i의 j번째 비트가 1인지 확인
                subset.push(elements[j]);
            }
        }
        result.push(subset);
    }
    console.timeEnd('bitmask')
    return result;
}


const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
const course = [2,3,4]

const arr = Array.from({length: 12}, (_, i) => i+1)

console.log(powerSet(arr))
console.log(createPowerSet(arr))
// console.log(solution(orders, course))
/*
1. orders를 모두 모아서 한 번 이상 출현한 문자를 모음
2. 각 문자를 원소로 가지는 멱집합 구함
3. 멱집합의 각 원소에 대해... course의 원소에 맞는 길이이고, orders의 각 원소에 2번 이상 포함되었다면 해당 문자열을 결과에 push
*/

/* 멱집합 구하기(재귀함수 대신 while)
1. stack []에서 시작
2. 원소들을 하나씩 stack에 push


[A, B]

0
|            \
A포함         A제외
|    \       |   \
B포함 B제외  B포함 B제외  
AB    A     B    O

stack0 = [[]], stack1 = []
1. 대기중인 원소를 가지는 스택과 처리한 결과를 가지는 스택 두 개를 이용.
2. 공집합을 꺼내서 대해 0번째 원소 A가 없는 것과 포함된 것을 push해 각각을 스택에 넣음. 
stack0 = [], stack1 = [[], [A]]

3. 스택의 각 원소를 pop해서 각각에 대해 1번째 원소 B가 없는 것과 포함된 것을 push해 각각을 스택에 넣음. 
3-1. [A] → stack0 = [[A], [A, B]]
3-2. [] → stack0 = [[A], [A, B], [], [B]]
*/