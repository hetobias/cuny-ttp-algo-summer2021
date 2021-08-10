/* 
  given an array of positive numbers and a positive number k 
  find the max sum of any subarray size k 
*/
// [2, 1, 5, 1, 3, 2], k = 3
// 5 + 1 + 3
// loop through entire array, keep track of sum
// update sum whenever we reach a size of k
// return the sum
let maxSumSubArrayOfSizeK = (arr, k) => {
	let sum = 0;
	let maxSum = 0;
	let windowStart = 0;
	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		let windowSize = windowEnd - windowStart - 1;
		sum += arr[windowEnd];
		if (windowEnd >= k - 1) {
			maxSum = Math.max(maxSum, sum);
			sum -= arr[windowStart];
			windowStart++;
		}
	}
	return maxSum;
};

let arr = [ 2, 1, 5, 1, 3, 2 ];
console.log(maxSumSubArrayOfSizeK(arr, 3));
