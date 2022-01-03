const { fa } = require("faker/lib/locales");

class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let mid = Math.floor(nums.length/2)

    if(nums.length===1){
      if(target===nums[0]){
        return true
      }
    } else {
      if(target===nums[mid]){
        return true
      } else if(nums[mid] > target){ //look at left half of array
        let newArray = nums.slice(0, mid - 1 + 1)
        return this.binarySearch(newArray, target)
      } else if(nums[mid] < target){ //look at right half of array
        let newArray = nums.slice(mid+1, nums.length+1)
        return this.binarySearch(newArray, target)
      }
    }
    return false
    
  }

}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;