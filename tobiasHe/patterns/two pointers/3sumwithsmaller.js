/* 
  given an array of unsorted numbers and a target sum
  count all triplets in it such that arr[i] + arr[j] + arr[k] < target
  where i j k are all different indices
  write a function to return the count of such triplets
*/

const triplet_with_smaller_sum = function(arr, target) {
	arr.sort((a, b) => a - b);
	let count = 0;
	for (let i = 0; i < arr.length - 2; i++) {
		if (arr[i] > target) {
			return count;
		}
		let left = i + 1;
		let right = arr.length - 1;
		while (left < right) {
			if (arr[i] + arr[left] + arr[right] < target) {
				count += right - left;
				console.log('found 1');
				while (arr[left] === arr[left + 1]) {
					left++;
				}
				while (arr[right] === arr[right - 1]) {
					right--;
				}
				left++;
			} else {
				right--;
			}
		}
	}
	return count;
};

let arr = [ -1, 4, 2, 1, 3 ];
console.log(triplet_with_smaller_sum(arr, 5));
