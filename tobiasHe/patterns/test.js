/* 
  given a string, reverse all vowels of the string
  return the string

*/

/* 
    vowels: a e i o u 
    hello
    holle

    loop through string once and get the position of the vowels
    leetcode
    eeoe
    eoee
    
    leotcede
    loop through string backwards, 
    [e,o,e,e]  = arr reversed
    
    leetcode
     ^
    leotcede    

    leetcode
     ^ 
    leotcede  
     eo  e e 
*/
let reverseVowels = (str) => {
	// str = str.split('');
	// let reversed = [];
	// let vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
	// for (let i = str.length - 1; i >= 0; i--) {
	// 	if (vowels.includes(str[i])) {
	// 		reversed.push(str[i]);
	// 	}
	// }
	// let temp = 0;
	// for (let i = 0; i < str.length; i++) {
	// 	if (vowels.includes(str[i])) {
	// 		str[i] = reversed[temp];
	// 		temp++;
	// 	}
	// }

	// return str.join('');

	str = str.split('');
	let left = 0;
	let right = str.length - 1;
	let vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
	while (left < right) {
		while (left < right && vowels.includes(str[left]) && vowels.includes(str[right])) {
			[ str[left], str[right] ] = [ str[right], str[left] ];
			left++;
			right--;
		}
		while (left < right && !vowels.includes(str[left])) {
			left++;
		}
		while (left < right && !vowels.includes(str[right])) {
			right--;
		}
	}

	return str.join('');
};

/* 
   Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
   //[1, 2, 5, 3, 7, 10, 9, 12]
      ^            ^
     [1 5 4 6 -1 10]    
      ^           ^

        2 5 3 7 10 9 
        output : 5
*/

let min_window = (arr) => {
	let left = 0;
	let right = arr.length - 1;
	let minSub = Infinity;
	let maxSub = -Infinity;
	while (left < arr.length && arr[left] <= arr[left + 1]) {
		left++;
	}
	if (left === arr.length - 1) {
		return 0;
	}
	while (right > 0 && arr[right] >= arr[right - 1]) {
		right--;
	}
	for (let i = left; i < right + 1; i++) {
		minSub = Math.min(minSub, arr[i]);
		maxSub = Math.max(maxSub, arr[i]);
	}

	// console.log(left);
	// console.log(right);
	while (left > 0 && arr[left - 1] > minSub) {
		left--;
	}
	while (right < arr.length - 1 && arr[right + 1] < maxSub) {
		right++;
	}
	return right - left + 1;
};

min_window([ 2, 6, 4, 8, 10, 9, 15 ]);

/* 
	given an array of strings and string
	string is good if it can be formed by charcaters

*/
