function sumOfMinimumAndMaximum(nums) {
  let minNum = nums[0], maxNum = nums[0]

  for(let i = 0; i < nums.length; i++){
    if(nums[i]<minNum){
      minNum = nums[i]
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(nums[i]>maxNum){
      maxNum = nums[i]
    }
  }

  return minNum + maxNum
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;