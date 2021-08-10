// Problem Statement #

// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	get_list() {
		let result = '';
		let temp = this;
		while (temp !== null) {
			result += temp.value + ' ';
			temp = temp.next;
		}
		return result;
	}
}

const reverse_every_k_elements = function(head, k) {
	// TODO: Write your code here
	// 1 2 3 4 5 6 7 8
	// k = 3
	// 3 2 1 4 5 6 7 8
	// 3 2 1 6 5 4 7 8
	// 3 2 1 6 5 4 8 7

	let previous = null;
	let current = head;
	let next = null;

	if (k <= 1) {
		return head;
	}
	for (let i = 0; i < k - 1; i++) {
		next = current.next;
		current.next = previous;
	}

	return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`);

// Solution
// -----
// function reverse_every_k_elements(head, k) {
//   if (k <= 1 || head === null) {
//     return head;
//   }

//   let current = head,
//     previous = null;
//   while (true) {
//     const last_node_of_previous_part = previous;
//     // after reversing the LinkedList 'current' will become the last node of the sub-list
//     const last_node_of_sub_list = current;
//     let next = null; // will be used to temporarily store the next node
//     let i = 0;
//     while (current !== null && i < k) { // reverse 'k' nodes
//       next = current.next;
//       current.next = previous;
//       previous = current;
//       current = next;
//       i += 1;
//     }

//     // connect with the previous part
//     if (last_node_of_previous_part !== null) {
//       last_node_of_previous_part.next = previous;
//     } else {
//       head = previous;
//     }
//     // connect with the next part
//     last_node_of_sub_list.next = current;

//     if (current === null) {
//       break;
//     }
//     previous = last_node_of_sub_list;
//   }
//   return head;
// }

// -----

// Time complexity #
// The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space complexity #
// We only used constant space, therefore, the space complexity of our algorithm is O(1).
