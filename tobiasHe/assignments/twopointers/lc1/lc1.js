// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {
	// TODO:write code here
	// given sorted array, return the indices of the two numbers that sum up to the targetSum
	// use two pointers, one starting at index 0 and the other starting from last index
	// move left pointer of the sum is < targetSum, move right pointer of sum is > targetSum
	// keeping moving until we find targetSum or until the pointers meet

	//edge cases: if no sum was found, return empty array
	//						if length if less than 2 return empty array (since we need a pair)

	//using hashmap, check if the map has the complement, if not continue
	let map = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (map.has(targetSum - arr[i])) {
			return [ map.get(targetSum - arr[i]), i ];
		} else {
			map.set(arr[i], i);
		}
	}
	return [];
}

// let leftPointer = 0;
// let rightPointer = arr.length - 1;
// let sum = 0;

// if (!arr.length) {
// 	return [];
// }

// while (leftPointer < rightPointer) {
// 	sum = arr[leftPointer] + arr[rightPointer];
// 	if (sum === targetSum) {
// 		return [ leftPointer, rightPointer ];
// 	} else if (sum < targetSum) {
// 		leftPointer++;
// 	} else {
// 		rightPointer--;
// 	}
// }
// return [];

console.log(pair_with_target_sum([ 3, 2, 4 ], 6));
console.log(pair_with_target_sum([ 2, 5, 9, 11 ], 11));
console.log(pair_with_target_sum([ 1, 2, 3, 4, 5 ], 221));
console.log(pair_with_target_sum([], 221));

// solution
// -----
// let left = 0,
// right = arr.length - 1;
// while (left < right) {
// const currentSum = arr[left] + arr[right];
// if (currentSum === targetSum) {
//   return [left, right];
// }

// if (targetSum > currentSum) {
//   left += 1; // we need a pair with a bigger sum
// } else {
//   right -= 1; // we need a pair with a smaller sum
// }
// }
// return [-1, -1];
