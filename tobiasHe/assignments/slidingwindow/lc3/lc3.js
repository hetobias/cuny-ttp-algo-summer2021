var lengthOfLongestSubstring = function(s) {
	//find length of longest substring without repeating characters
	//keep track of longestSubstring at each iteration
	//if set has seen the letter, move windowStart,
	//abac  -> bac

	let longest = 0;
	let track = new Set();
	let windowStart = 0;
	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		let char = s[windowEnd];
		while (track.has(char)) {
			let prev = s[windowStart];
			track.delete(prev);
			windowStart++;
		}
		track.add(char);
		longest = Math.max(longest, windowEnd - windowStart + 1);
	}
	return longest;
};
