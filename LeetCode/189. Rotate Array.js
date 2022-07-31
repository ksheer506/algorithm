// https://leetcode.com/problems/rotate-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const arr = nums.slice(); // 바꾸기 전의 배열을 계속 참조해야 함
  let temp = arr[0];
  let i = 0;
  let j = k % nums.length;
    
    while (j < arr.length) {
      nums[j] = temp;
      temp = arr[i+1];
      i++;
      j++;
    }
    
    j = 0;
    while (i < arr.length) {
      nums[j] = arr[i];
      i++;
      j++;
    }
};

const arr = [1,2]
const k = 3

rotate(arr, k)
console.log(arr)
/*
temp = [nums[0]]: 초기값
[1,2,3,4,5,6,7] k = 1
     ^       ^   
     j       i    
[5,6,7,1,2,3,4]
temp = [5]

 nums[j] = temp.shift()
 temp.push(nums[i+1])
 i++, j++
 
 while ( j < nums.length)까지 위 루프
 j = 0으로 초기화 하고
 while (i < nums.length) 까지 
 nums[j] = nums[i]  
 
[1,2,3,4] k = 2
   ^   ^  
   j   i  
[3,4,1,2]
temp = [4, undefined]

[3,4,1,2]
*/
