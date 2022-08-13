function solution(s) {
  let str = '';
  let subI = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      subI = 0;
      str += s[i];
      continue;
    }
    if (subI % 2) {
      str += s[i].toLowerCase();
    } else {
      str += s[i].toUpperCase();
    }
    subI++;
  }

  return str;
}
