const vowel = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowel.includes(letter)) {
      count++;
    }
  }
  return count;
}

// const string = prompt("enter a string");
let ans = countVowels("aeiou");
console.log(ans);
