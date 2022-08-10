const balancedBrackets = function (str) {
  const left = ["(", "{", "["];
  const right = [")", "}", "]"];
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const leftIdx = left.findIndex(el => el === str[i]);
    const rightIdx = right.findIndex(el => el === str[i]);

    if (leftIdx > -1) {
      stack.push(right[leftIdx]);
    }
    if (rightIdx > -1) {
      if (str[i] !== stack.pop()) return false;
    }
  }

  return stack.length > 0 ? false : true
};