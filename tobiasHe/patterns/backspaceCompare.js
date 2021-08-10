const { unwatchFile } = require('fs');

var backspaceCompare = function(s, t) {
	//a##c //#a#c
	//aaa###
	/* 
  a
  a
*/
	let process = (s1) => {
		let stack = [];
		for (let i = 0; i < s1.length; i++) {
			if (s1[i] !== '#') {
				stack.push(s1[i]);
			} else if (stack.length > 0) {
				stack.pop();
			}
		}
		console.log(stack.join(''));
		return stack.join('');
	};

	return process(s) === process(t);
};

console.log(backspaceCompare('a##c', 'a##c'));
