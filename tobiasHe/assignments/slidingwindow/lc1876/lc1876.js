var countGoodSubstrings = function(s) {
	//given a string, return the NUMBER of triplets that contain 3 unique characters
	// 3 unique characters of length 3, count how many of those
	//
	let windowStart = 0;
	//  a a b a b c a b c
	//  ^
	// object:   a : 1   size ===  3, length === 3
	//           b : 2
	let freq = {};
	let count = 0;
	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		let char = s[windowEnd];
		if (!freq[char]) {
			freq[char] = 1;
		} else {
			freq[char]++;
		}

		let length = windowEnd - windowStart + 1;
		//if lenght of substring is 3, and there are 3 unique characters
		if (length === 3 && Object.keys(freq).length === 3) {
			count++;
		}
		if (length >= 3) {
			let prevChar = s[windowStart];
			freq[prevChar]--;
			if (freq[prevChar] === 0) {
				delete freq[prevChar];
			}
			windowStart++;
		}
	}
	return count;
};

let s = 'aababcabc';
console.log(countGoodSubstrings(s));
