const { strictEqual } = require('assert');

/* 
	APPLE
	ONE
*/
function camelize(text) {}

//console.log(camelize('AppleOne'));

/* 
	self describing number
	2020 
	2 zeros
	0 ones
	2 twos
	0 threes
*/
/* 
	the sum of digits can't be greater than the length of the number
*/
function selfDescribing(n) {
	let freq = {};
	let sumOfDigits = 0;
	let lengthOfNumber = n.toString().length;

	let num = n;
	while (num > 0) {
		sumOfDigits += num % 10;
		num = Math.floor(num / 10);
	}

	if (lengthOfNumber > 9 || lengthOfNumber < 4 || sumOfDigits !== lengthOfNumber) {
		return false;
	}

	for (const num of n) {
		if (!freq[num]) {
			freq[num] = 1;
		} else {
			freq[num]++;
		}
	}

	for (let i = 0; i < lengthOfNumber; i++) {
		if (freq[i] === parseInt(n.charAt(i)) || (!freq[i] && n.charAt(i) === '0')) {
			continue;
		} else {
			return false;
		}
	}
	return true;

	//console.log(freq);
}

console.log(selfDescribing('21200'));

/* 
 																	z, w, u ,x ,g
																	o, h, f, v, n
	zero               
	one
	two
	three
	four
	five
	six
	seven
	eight
	nine
*/

function jumbledNumbers(s) {
	let freq = {};
	let arr = [];

	for (const letters of s) {
		if (!freq[letters]) {
			freq[letters] = 1;
		} else {
			freq[letters]++;
		}
	}
	while (Object.keys(freq).length > 0) {
		console.log(freq);
		//zero
		if (freq['z'] > 0) {
			arr.push(0);
			freq['z']--;
			freq['e']--;
			freq['r']--;
			freq['o']--;
			if (freq['z'] === 0) {
				delete freq['z'];
			}
			if (freq['e'] === 0) {
				delete freq['e'];
			}
			if (freq['r'] === 0) {
				delete freq['r'];
			}
			if (freq['o'] === 0) {
				delete freq['o'];
			}
		} else if (freq['w'] > 0) {
			//two
			arr.push(2);
			freq['t']--;
			freq['w']--;
			freq['o']--;
			if (freq['t'] === 0) {
				delete freq['t'];
			}
			if (freq['w'] === 0) {
				delete freq['w'];
			}
			if (freq['o'] === 0) {
				delete freq['o'];
			}
		} else if (freq['u'] > 0) {
			//four
			arr.push(4);
			freq['f']--;
			freq['o']--;
			freq['u']--;
			freq['r']--;
			if (freq['f'] === 0) {
				delete freq['f'];
			}
			if (freq['o'] === 0) {
				delete freq['o'];
			}
			if (freq['u'] === 0) {
				delete freq['u'];
			}
			if (freq['r'] === 0) {
				delete freq['r'];
			}
		} else if (freq['x'] > 0) {
			//six
			arr.push(6);
			freq['s']--;
			freq['i']--;
			freq['x']--;
			if (freq['s'] === 0) {
				delete freq['s'];
			}
			if (freq['i'] === 0) {
				delete freq['i'];
			}
			if (freq['x'] === 0) {
				delete freq['x'];
			}
		} else if (freq['g'] > 0) {
			//eight
			arr.push(8);
			freq['e']--;
			freq['i']--;
			freq['g']--;
			freq['h']--;
			freq['t']--;

			if (freq['e'] === 0) {
				delete freq['e'];
			}
			if (freq['i'] === 0) {
				delete freq['i'];
			}
			if (freq['g'] === 0) {
				delete freq['g'];
			}
			if (freq['h'] === 0) {
				delete freq['h'];
			}
			if (freq['t'] === 0) {
				delete freq['t'];
			}
		} else if (freq['o'] > 0) {
			//one
			arr.push(1);
			freq['o']--;
			freq['n']--;
			freq['e']--;
			if (freq['o'] === 0) {
				delete freq['o'];
			}
			if (freq['n'] === 0) {
				delete freq['n'];
			}
			if (freq['e'] === 0) {
				delete freq['e'];
			}
		} else if (freq['h'] > 0) {
			//three
			arr.push(3);
			freq['t']--;
			freq['h']--;
			freq['r']--;
			freq['e']--;
			freq['e']--;
			if (freq['t'] === 0) {
				delete freq['t'];
			}
			if (freq['h'] === 0) {
				delete freq['h'];
			}
			if (freq['r'] === 0) {
				delete freq['r'];
			}
			if (freq['e'] === 0) {
				delete freq['e'];
			}
		} else if (freq['f'] > 0) {
			//five
			arr.push(5);
			freq['f']--;
			freq['i']--;
			freq['v']--;
			freq['e']--;
			if (freq['f'] === 0) {
				delete freq['f'];
			}
			if (freq['i'] === 0) {
				delete freq['i'];
			}
			if (freq['v'] === 0) {
				delete freq['v'];
			}
			if (freq['e'] === 0) {
				delete freq['e'];
			}
		} else if (freq['v'] > 0) {
			//seven
			arr.push(7);
			freq['s']--;
			freq['e']--;
			freq['v']--;
			freq['e']--;
			freq['n']--;
			if (freq['s'] === 0) {
				delete freq['s'];
			}
			if (freq['e'] === 0) {
				delete freq['e'];
			}
			if (freq['v'] === 0) {
				delete freq['v'];
			}
			if (freq['n'] === 0) {
				delete freq['n'];
			}
		} else if (freq['n'] > 0) {
			//nine
			arr.push(9);
			freq['n']--;
			freq['i']--;
			freq['n']--;
			freq['e']--;
			if (freq['n'] === 0) {
				delete freq['n'];
			}
			if (freq['i'] === 0) {
				delete freq['i'];
			}
			if (freq['e'] === 0) {
				delete freq['e'];
			}
		}
		console.log(arr.sort((a, b) => a - b).join(''));
	}
}

//jumbledNumbers('reuonnseoveninfe');
