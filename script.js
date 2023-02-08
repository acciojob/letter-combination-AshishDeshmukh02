function letterCombinations(input_digit) {
  //Complete the function
	 if (!digits.length) return [];
  
  const mapping = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let result = [''];
  
  for (const digit of digits) {
    const letters = mapping[digit];
    const temp = [];
    for (const res of result) {
      for (const letter of letters) {
        temp.push(res + letter);
      }
    }
    result = temp;
  }
  
  return result;
};

module.exports = letterCombinations;
