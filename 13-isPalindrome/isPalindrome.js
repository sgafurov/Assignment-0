function isPalindrome(word) {
  let isPalindrome = true

  for(let i = 0; i < word.length/2; i++){
    //base case: it is not a palindrome if the first letter doesnt match with the last letter
    if(word.charAt(0) != word.charAt(word.length-1)){
      return !isPalindrome
    }
    if(word.charAt(i) === word.charAt(word.length-1-i)){
      isPalindrome = true
    }
  }
  return isPalindrome

  //using word[i] worked (as if i was dealing with an array), but i think it is better to use word.charAt() to convey that i am working with strings
}

// Do not edit this line;
module.exports = isPalindrome;