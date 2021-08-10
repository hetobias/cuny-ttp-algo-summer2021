/* 
  given a string, find the longest substring without reapeating characters
  aabccbb
  output 3
  abc
*/
/* 
  keep track of the occurances 
*/

let noRepeatSubstring = (str) => {
	let windowStart = 0;
	let maxLength = 0;
	let indexMap = {};

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		console.log(indexMap);
		let char = str[windowEnd];
		if (char in indexMap) {
			windowStart = Math.max(windowStart, indexMap[char] + 1);
		}
		indexMap[char] = windowEnd;
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}
	return maxLength;
};

console.log(noRepeatSubstring('aabccbb'));
