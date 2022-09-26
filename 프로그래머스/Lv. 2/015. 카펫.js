function solution(brown, yellow) {
  const sqrt = Math.sqrt(brown + yellow);
  let C = 3;

  while (C <= sqrt) {
    const R = (brown + 4) / 2 - C;
  
    if (R * C === yellow + brown) {
      return [R, C];
    }

    C++;
  }
}

const brown = 5000;
const yellow = 999000;
console.log(solution(brown, yellow))

/* 
R + C = (brown + 4) / 2
RC = yellow + brown;
*/
