/* 
  given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target
*/

/* 
  usw two pointers,
  sort the array, we can use two pointers to move according to the sum
  leftPointer points at zero, rightPointer points at lastIndex
  if the sum of the two pointers is < target, incre left, else dec right
  while(left < right)
*/

let pairsum = (arr, targetSum) => {
	arr.sort((a, b) => a - b);
	let left = 0;
	let right = arr.length - 1;
	let currSum = 0;
	while (left < right) {
		currSum = arr[left] + arr[right];
		if (currSum === targetSum) {
			return [ arr[left], arr[right] ];
		}
		if (currSum < targetSum) {
			left++;
		} else {
			right++;
		}
	}
	return [];
};

let arr = [ 5, 2, 1, 0, 32 ];
let targetSum = 34;
console.log(pairsum(arr, targetSum));
