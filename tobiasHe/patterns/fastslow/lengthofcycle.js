class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

/* 
  given head of a LinkedList with a cycle , find a lengeth of the cycle
*/

function find_cycle_length(head) {
	let slow = head;
	let fast = head;
	let cycleLength = 0;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			let current = slow;
			while (true) {
				current = current.next;
				cycleLength++;
				if (current === slow) {
					return cycleLength;
				}
			}
		}
	}
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(find_cycle_length(head));
