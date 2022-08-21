const rep = (m) => (m === '1' ? '#' : ' ')

function solution(n, arr1, arr2) {
  const res = [];
  
  for (let i = 0; i < n; i++) {
    res[i] = arr1[i] | arr2[i]; // 비트 연산
  }
  
  return res.map((e) => {
    const bin = e.toString(2);
    return ('0'.repeat(n - bin.length) + bin).replace(/(0{1,}|1)/g, rep);
  })
}

const n = 6;
const arr1 = [46, 33, 33 ,22, 31, 50];
const arr2 = [27 ,56, 19, 14, 14, 10];

console.log(solution2(n, arr1, arr2))
console.log(["######", "### #", "## ##", " #### ", " #####", "### # "])