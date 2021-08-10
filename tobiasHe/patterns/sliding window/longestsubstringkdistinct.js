/* 
  given a string
  find the longest substgring in it with no more than k distinct characters
  araaci k = 2 outputL 4
*/
/* 
  use sliding window,
  create an object to map out the count of all characters
  the window is valid when the amount of distinct characters is equal to k
  shrink the window when the distinct characters is greater than k
  keep track of the length when that is true

*/
let longestSubstringKDistinct = (str, k) => {
	let freq = {};
	let windowStart = 0;
	let maxLength = 0;
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let char = str[windowEnd];
		if (!freq[char]) {
			freq[char] = 1;
		} else {
			freq[char]++;
		}
		while (Object.keys(freq).length > k) {
			let prev = str[windowStart];
			freq[prev]--;
			if (freq[prev] === 0) {
				delete freq[prev];
			}
			windowStart++;
		}
		maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
	}
	return maxLength;
};

console.log(longestSubstringKDistinct('araaci', 2));
