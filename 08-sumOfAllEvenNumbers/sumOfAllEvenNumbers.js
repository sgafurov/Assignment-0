function sumOfAllEvenNumbers(nums) {
  let count = 0
  for(let i=0; i < nums.length; i++){
    let evenNum = nums[i]%2
    if(evenNum===0){
      count++
    }
  }
  return count
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;