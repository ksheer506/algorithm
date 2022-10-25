function solution(clothes) {
  const closet = new Map();
  const powerSet = [];
  let answer = 0;

  for (let i = 0; i < clothes.length; i++) {
    const prev = closet.get(clothes[i][1]) || 0;
    closet.set(clothes[i][1], prev + 1);
  }

  const keys = [...closet.keys()];
  
  const power = (depth, cases) => {
    if (depth >= keys.length) {
      powerSet.push(cases);
      return;
    }

    // 멱집합을 만들지 않고 해당 멱집합에 대응되는 경우의 수를 배열에 저장
    power(depth + 1, cases * closet.get(keys[depth]));
    power(depth + 1, cases);
  };
  
  power(0, 1);

  for (let j = 0; j < powerSet.length; j++) {
    answer += powerSet[j]
  }
  
  // 멱집합에서 []도 1로 계산되는 것 제외
  return answer - 1;
};

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));

/* 멱집합
1. N = 0부터 keys의 0번째 원소를 포함할지, 안 할지 분기
- 포함하면 배열 arr에 원소 넣고 다음 재귀에 넘김
- 포함 안하면 arr 그대로 다음 재귀에 넘김

2. N = keys.length이면 이어온 arr을 결과 배열에 넣음
*/

// non-recursive solution 
/* 
const power = array => {
  const result = [[]];

  for (const value of array) {
    const length = result.length

    for (let i = 0; i < length; i++) {
      let temp = result[i].slice(0)

      temp.push(value)
      result.push(temp)
    }
  }

  return result;
}
*/

function nonRecursiveSolution(clothes) {
  const closet = new Map();
  let answer = 0;

  for (let i = 0; i < clothes.length; i++) {
    const prev = closet.get(clothes[i][1]) || 0;
    closet.set(clothes[i][1], prev + 1);
  }

  const keys = [...closet.keys()];
  const power = (arr) => {
    const result = [0];

    for (const value of arr) {
      const length = result.length

      for (let i = 0; i < length; i++) {
        let prevCase = result[i] || 1;
        
        // 멱집합을 만들지 않고 해당 멱집합에 대응되는 경우의 수를 배열에 저장
        result.push(prevCase * closet.get(value));
      }
    }

    return result;
  }
  const powerSet = power(keys);

  for (let j = 0; j < powerSet.length; j++) {
    answer += powerSet[j]
  }

  // 멱집합에서 []도 1로 계산되는 것 제외
  return answer - 1;
};