function solution(clothes) {
  const closet = new Map();
  const powerSet = [];
  let answer = 0;
  
  for (let i = 0; i < clothes.length; i++) {
    const prev = closet.get(clothes[i][1]) || 0;
    closet.set(clothes[i][1], prev + 1);
  }
  
  const keys = [...closet.keys()];
  const power = (depth, arr) => {
    if (depth >= keys.length) {
      powerSet.push(arr);
      return;
    }
    
    power(depth + 1, [...arr, keys[depth]]);
    power(depth + 1, [...arr]);
  };
  
  power(0, []);
  
  for (let j = 0; j < powerSet.length; j++) {
    if (!powerSet[j].length) continue;
    
    answer += powerSet[j].reduce((a, c) => a * closet.get(c), 1);
  }
  
  return answer;
};

const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));

/* 멱집합
1. N = 0부터 keys의 0번째 원소를 포함할지, 안 할지 분기
- 포함하면 배열 arr에 원소 넣고 다음 재귀에 넘김
- 포함 안하면 arr 그대로 다음 재귀에 넘김
2. N = keys.length이면 이어온 arr을 결과 배열에 넣음
*/
