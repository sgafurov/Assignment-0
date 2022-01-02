function frequencyCounter(word) {
  let obj = {}

  for(let i = 0; i < word.length; i++){
    let currentWord = word.charAt(i)
    //checks truthy/falsey value. if its a truthy, it means that the value at obj[currentWord] is not null, 
    //therefore we have encountered this specific letter previously and need to increment its count
    if(obj[currentWord]){ 
      obj[currentWord]++
    } else {
      obj[currentWord]=1 //we only found 1 instance of the word (so far), therefore initialize its count to 1
    }
  }

  return obj

}

// Do not edit this line;
module.exports = frequencyCounter;