/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  
  const binarySearch = (nums) => {
    const left = 0;
    const right = nums.length - 1;
    const mid = Math.floor(nums.length / 2) - 1;
    
    if (nums[left] > target || nums[right] < target) return -1;
    if (nums[mid] === target) return start + mid;
    if (nums[right] === target) return start + right;
    //if (nums[left] === target) return start + left;
    
    console.log(nums, left, mid, right, start)
    
    if (nums[mid] >= target && nums[left] <= target) {
      return binarySearch(nums.slice(left, mid))
    } else if (nums[mid] < target && nums[right] > target) {
      start += mid + 1
      return binarySearch(nums.slice(mid + 1, right))
    }
  }
  
return binarySearch(nums)
};

const arr = [-1,0,3,7,9,12]
const target = 0
console.log(search(arr, target))
