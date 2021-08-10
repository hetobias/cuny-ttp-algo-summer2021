/* 
  given an array of positive numbers and a positive number s
  find the length of the smallest contiguous subarray whose sum is greater than or equal to s
  return zero if no subarray exists
*/

//loop through the array,
//use sliding window, the window is valid when the sum is greater or equal to s
//update the length when this happens, and find the Math.min of the currentLength, and minLength
//if the length never updates that means we never found a sum greater or equal to s, which we should return zero at the end

let minSizeSubArraySum = (s, arr) => {
	let minLength = Infinity;
	let windowStart = 0;
	let sum = 0;
	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		sum += arr[windowEnd];
		while (sum >= s) {
			let windowSize = windowEnd - windowStart + 1;
			minLength = Math.min(windowSize, minLength);
			sum -= arr[windowStart];
			windowStart++;
		}
	}
	return minLength === Infinity ? 0 : minLength;
};

console.log(minSizeSubArraySum(7, [ 2, 1, 5, 2, 3, 2 ]));
