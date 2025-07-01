let nums = [249, 443, 695, 725, 3308, 109, 804];

function LargestElement(nums) {
  // Write your code here
  let bigNum = 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (bigNum < nums[i]) {
      bigNum = nums[i];
      index = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== index && bigNum < 2 * nums[i]) {
      return -1;
    }
  }

  return index;
}

console.log(LargestElement(nums));
