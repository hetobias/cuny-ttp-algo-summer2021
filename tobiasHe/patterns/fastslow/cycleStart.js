/* 
  given a linkedList, determine if there is a cycle, if there is a cycle, return the head of the cycle
  else retur null
*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

let cycleStart = (head) => {
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			slow = head;
			while (slow !== fast) {
				slow = slow.next;
				fast = fast.next;
			}
			return slow;
		}
	}
	return null;
};
