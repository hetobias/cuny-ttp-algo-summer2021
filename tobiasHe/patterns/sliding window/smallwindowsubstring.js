/* 
  given two strings s, t

  s = "ADOBECODEBANC"   {D:1, O:1, B:1, E:1, C:1, O:1}   find length
  t = "ABC"   {A:1, B:1, C:1}

  output: BANC 4
*/

/* 
  t object count 
  s object count
*/

let minWindow = (s, t) => {
	let windowStart = 0;
	let minLength = Infinity;
	let sFreq = {};
	let tFreq = {};
	let matched = 0;

	if (t.length > s.length) {
		return '';
	}

	// t = {A:1, B:1, C:1}
	for (let i = 0; i < t.length; i++) {
		let char = t[i];
		if (!tFreq[char]) {
			tFreq[char] = 1;
		} else {
			tFreq[char]++;
		}
	}

	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		let char = s[windowEnd];
		if (!sFreq[char]) {
			sFreq[char] = 1;
		} else {
			sFreq[char]++;
		}
		if (tFreq[char] >= 0) {
			matched++;
		}
		while (matched === t.length) {
			if (minLength > windowEnd - windowStart + 1) {
				minLength = windowEnd - windowStart + 1;
			}
		}
		let prev = s[windowStart];
		if (tFreq[prev]) {
			if (tFreq[prev] === 0) {
				matched--;
			}
			tFreq[prev]++;
		}
		windowStart++;
	}
	return minLength;
};

let s = 'ADOBECODEBANC';
let t = 'ABC';
console.log(minWindow(s, t));
