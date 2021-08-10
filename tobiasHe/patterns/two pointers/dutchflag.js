/* 
  given an array containing 0s, 1s, and 2s, sort the array in-place
  treat the numbers as objects
*/

const dutch_flag_sort = function(arr) {
	let pivot = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[pivot] < arr[i + 1]) {
			[ arr[pivot], arr[i + 1] ] = [ arr[i + 1], arr[pivot] ];
			pivot++;
		}
	}
	console.log(arr);
};

dutch_flag_sort([ 0, 1, 2, 1, 2, 0 ]);
