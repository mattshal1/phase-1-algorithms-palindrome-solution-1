function isPalindrome(word) {
  word = word.toLowerCase();
  let start = 0;
  let end = word.length - 1;


  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
