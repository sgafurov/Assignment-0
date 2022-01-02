function setUnionOfAnyAmountOfSets(...args) {
  let mySet = new Set()
  for(let i = 0; i < arguments.length; i++){ //for all of the arguments that we recieve...
    for (const elem of arguments[i]) { //go thru each element of each argument and add it to mySet
      mySet.add(elem);
    }
  }

  return mySet
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;