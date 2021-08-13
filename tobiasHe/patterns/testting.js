function test(string, substring) {
	var letters = [ ...string ];
	return [ ...substring ].every((x) => {
		var index = letters.indexOf(x);
		if (~index) {
			letters.splice(index, 1);
			console.log(letters);
			return true;
		}
	});
}

console.log(test('hihi', 'hi'));

function stringContainString(arr) {
	return arr[1].split('').every(function(letter) {
		return arr[0].indexOf(letter) != -1;
	});
}
//console.log(stringContainString([ 'zyxwvutsrqponmlkjihgfedcba', 'qrstu' ]));

//console.log(test('onetwo', 'one'));

/* 
	APPLE
	ONE
*/
function camelize(text) {
	return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
		if (p2) return p2.toUpperCase();
		return p1.toLowerCase();
	});
}

//console.log(camelize('AppleOne'));

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

jumbledNumbers('reuonnoinfe');
