/* 
  any number will be called a happy number if, after repeatedly replacing it with number equal to the 
  sum of the square of all of its digits, leads us to number 1, All other numbers will never reach 1
  they will be stuck in a cycle of numbers which does not include 1
*/

const find_happy_number = function(num) {
	let slow = num;
	let fast = num;
	while (true) {
		slow = squares(slow);
		fast = squares(squares(fast));
	}
	return slow === 1;
};

let squares = (n) => {
	let sum = 0;
	let digit = 0;
	while (n > 0) {
		digit = n % 10;
		sum += digit * digit;
		n = Math.floor(n / 10);
	}
	return sum;
};
