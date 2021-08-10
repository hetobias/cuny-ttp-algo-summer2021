/* 
  given an array of unsorted numbers and a target number
  find a triplet in the array whose sum is as close to the target number as possible
  return the sum of the triplet
  if there are more than one such triplet, return the sum of the triplet with the smallest sum
*/

const threeSumClosest = function(arr, target) {
	arr.sort((a, b) => a - b);
	let smallestDiff = Infinity;
	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1;
		let right = arr.length - 1;
		while (left < right) {
			let targetDiff = target - arr[i] - arr[left] - arr[right];
			if (targetDiff === 0) {
				return target - targetDiff;
			}
			smallestDiff = Math.min(Math.abs(targetDiff), smallestDiff);
			if (targetDiff > 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return target - smallestDiff;
};

console.log(threeSumClosest([ 0, 1, 1, 1 ], 100));
