/* 
  given a str, and k amount of letters to replace
  return the longest substring having the same letters

  aabccbb k = 2
  bccbb k = 2
  bbbbb output 5
*/

/* 
  keep track of the amount of letters 
  if the amount of different letters > k
  keep track the length 
  move the windowStart++
  get rid of the previous letter

  aabccbb

  aabccbb k = 2
  bccbb   {b:3, c:2}   k = 2    5-3 =  2 left to replace      2 = k         bbbcccc  7 - 4 =    3 > 2     k=2  if (length of substring - mostfreq > k)

  
   aabccbb
  
*/
let replacement = (str, k) => {
	let freq = {};
	let windowStart = 0;
	let maxLength = 0;
	let maxFreqChar = 0;

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		let char = str[windowEnd];

		if (!freq[char]) {
			freq[char] = 1;
		} else {
			freq[char]++;
		}

		maxFreqChar = Math.max(maxFreqChar, freq[char]);

		while (windowEnd - windowStart + 1 - maxFreqChar > k) {
			let prev = str[windowStart];
			freq[prev]--;
			windowStart++;
		}
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}
	return maxLength;
};

console.log(replacement('abab', 2));
