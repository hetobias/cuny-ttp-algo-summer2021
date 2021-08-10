let balanced = (s) => {
	let stack = [];
	let open = [ '(', '[', '{' ];
	let closed = {
		'(': ')',
		'[': ']',
		'{': '}'
	};

	if (s.length < 1) {
		return false;
	}
	for (let i = 0; i < s.length; i++) {
		let paren = s[i];
		if (open.includes(paren)) {
			stack.push(paren);
			console.log(stack);
		}

		let mostRecent = stack.pop();
		if (s[i] !== closed[mostRecent]) {
			return false;
		}

		if (stack.length !== 0) {
			return false;
		}
	}

	return true;
};

console.log(balanced('(((((())))))'));
