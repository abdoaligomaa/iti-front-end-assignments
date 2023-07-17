function sumNumbers(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
const array = [1, 2, 3, 4, 5, 5, 3, 2];

console.log("sum of array is ", sumNumbers(array));
