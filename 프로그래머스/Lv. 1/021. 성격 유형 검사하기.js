const type = [
  ['R', 'T'],
  ['C', 'F'],
  ['J', 'M'],
  ['A', 'N']
];

function solution(survey, choices) {
  const points = choices.map((e) => e - 4);
  const bias = new Map();

  for (let i = 0; i < points.length; i++) {
    const cur = survey[i];
    const prev = [
      bias.get(cur[0]) || 0,
      bias.get(cur[1]) || 0
    ];

    if (points[i] > 0) {
      bias.set(cur[1], prev[1] + points[i]);
    }
    if (points[i] < 0) {
      bias.set(cur[0], prev[0] + (-1) * points[i]);
    }
  }

  return type.reduce((a, c) => {
    const T1 = bias.get(c[0]) || 0;
    const T2 = bias.get(c[1]) || 0;
    
    if (T1 >= T2) {
      return a += c[0];
    }
    return a += c[1];
  }, '');
}

const servey = ["TR", "RT", "TR"]
const choices = [7, 1, 3]
console.log(solution(servey, choices))