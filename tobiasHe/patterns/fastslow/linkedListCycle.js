class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const has_cycle = function(head) {
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		slow = head.next;
		fast = fast.next.next;
		if (fast === slow) {
			return true;
		}
	}

	return false;
};
