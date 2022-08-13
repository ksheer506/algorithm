function solution(nums) {
  const com = [];

  const combination = (arr, idx) => {
    if (arr.length === 3) {
      return com.push(arr);
    }

    for (let i = idx; i < nums.length; i++) {
      combination([...arr, nums[i]], i + 1);
    }
  }
  combination([], 0);
  
  return com.reduce((a, c) => {
    const sum = c.reduce((x, y) => x += y, 0);
    let i = 2;

    while (i * i <= sum) {
      if (!(sum % i)) {
        return a;
      }
      i++;
    }

    return a += 1;
  }, 0);
}
