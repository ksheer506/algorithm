function solution(n, words) {
  const usedW = new Set();
  const answer = [0, 0]

  for (let i = 0; i < words.length; i++) {
    if (
      usedW.has(words[i]) ||
      words[i].length < 2 ||
      (i > 0 && words[i - 1].slice(-1) !== words[i][0])
    ) {
      answer[0] = (i + 1) % n || n; // person
      answer[1] = Math.ceil((i + 1) / n); // turn
      break;
    }
    usedW.add(words[i]);
  }

  return answer;
}

const n = 3;
const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]

console.log(solution(n, words))