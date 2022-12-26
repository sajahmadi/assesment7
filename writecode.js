//1.
function addToZero(nums) {
  if (nums.length <= 1) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return true;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        return true;
      }
    }
  }

  return false;
}
//O(1)

//2.
function hasUniqueCharacters(word) {
  let characterSet = new Set();
  for (let i = 0; i < word.length; i++) {
    if (characterSet.has(laugh[i])) {
      return false;
    }
    characterSet.add(laugh[i]);
  }
  return true;
}
//O(n)

//3.
const str = "We promptly judged antique ivory buckles for the next prize";
const isPangram = (str = "") => {
  str = str.toLowerCase();
  const { length } = str;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alphabets.split("");
  for (let i = 0; i < length; i++) {
    const el = str[i];
    const index = alphaArr.indexOf(el);
    if (index !== -1) {
      alphaArr.splice(index, 1);
    }
  }
  return !alphaArr.length;
};
console.log(isPangram(str));
//O(n)

//4.
function findLongestWord(words) {
  words.sort((a, b) => b.length - a.length);
  return words[0].length;
}
const words = ["pepper", "cheese", "cardigan", "apparently"];

const longestLength = findLongestWord(words);

console.log(`The longest word has a length of ${longestLength}.`);
//O(1)