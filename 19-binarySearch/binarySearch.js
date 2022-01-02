class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let found = false
    
    if(target===nums[nums.length/2]){
      return found = true
    } else if(target===nums[0]){
      return found = true
    } else if(target===nums[nums.length-1]){
      return found = true
    } else if(target<nums[nums.length/2]){
      binarySearch(0,...nums.length/2, target)
    } else {
      binarySearch(nums.length/2,...nums.length-1, target)
    }

    return found

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;