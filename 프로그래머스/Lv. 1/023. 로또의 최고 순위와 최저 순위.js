function solution(lottos, win_nums) {
  const unknowns = lottos.filter((e) => e === 0).length;
  const wins = new Set(win_nums);
  let matched = 0;
  
  for (let i = 0; i < lottos.length; i++) {
    if (wins.has(lottos[i])) {
      matched++;
    }
  }
  
  const highest = Math.min(7 - (matched + unknowns), 6);
  const lowest = Math.min(7 - matched, 6);
  
  return [highest, lowest];
}

const lottos = [44, 1, 0, 0, 31, 25]
const win_nums = [31, 10, 45, 1, 6, 19]
console.log(solution(lottos, win_nums));