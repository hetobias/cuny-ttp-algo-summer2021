/* 
  given an array of sorted numbers, remove all duplicates from it
  you should not use any extra space
  after removing the diplicates in-place return the new length of the array
*/

const remove_duplicates = function(arr) {
	let left = 0;
	let right = left + 1;
	let counter = 0;

	while (left < arr.length) {
		if (arr[left] === arr[right]) {
			counter++;
			right++;
		} else {
			left++;
			right = left + 1;
		}
	}
	return arr.length - counter;
};

console.log(remove_duplicates([ 1, 4, 5, 5, 15, 15, 16 ]));
