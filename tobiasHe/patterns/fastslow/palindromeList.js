/*  
  return true of linked list is a palindrome

*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

let isPalindromeList = (head) => {};

function reverse(head) {
	let prev = null;
	while (head) {
		let next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}
	return prev;
}
