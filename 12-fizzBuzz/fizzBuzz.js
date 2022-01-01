function fizzBuzz(start, end) {
  let arr = []

  for(let val = start; val <= end; val++){
    let mod3value = val%3
    let mod5value = val%5
    if(mod3value===0 && mod5value===0){
      arr.push("FizzBuzz")
    } else if (mod3value===0){
      arr.push("Fizz")
    } else if (mod5value===0){
      arr.push("Buzz")
    } else {
      arr.push(val)
    }

  }

  return arr
}

// Do not edit this line;
module.exports = fizzBuzz;