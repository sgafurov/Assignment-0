function pairSum(nums, target) {
  let sumEqualsTarget = false

  if(nums.length<=1){
    throw new console.error();
  }

  for(let i = 0; i < nums.length; i++){ //pass thru all elements in the array
    let currentNum = nums[i]
    for(let j = 0; j < nums.length; j++){ //compare all elements to the one we are currently inspecting
      if(i === j){ //cannot compare our current element to itself, as per instructions we need to compare distinct elements
        continue
      }
      if(currentNum + nums[j] === target){
        return sumEqualsTarget = true
      }
    }
  }
  return sumEqualsTarget
}

// Do not edit this line;
module.exports = pairSum;