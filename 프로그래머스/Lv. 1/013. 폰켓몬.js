function solution(nums) {
  const pnk = new Map();
  const H = nums.length / 2;
  
  for (let i = 0; i < nums.length; i++) {
    pnk.set(nums[i], (pnk.get(nums[i]) || 0) + 1);
  }
  
  return H > pnk.size ? pnk.size : H;
}
/* 
N/2와 폰켓몬 종류의 수와 비교하기 위해서 Key 목록의 수를 O(1)로 얻을 수 있는 Map 객체 이용(일반 객체는 O(n))
*/

const ponk = [3,3,3,3,2,2,2]
console.log(solution(ponk))
