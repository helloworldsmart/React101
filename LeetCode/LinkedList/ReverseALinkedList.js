
var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/* Function to reverse the linked list */
function revserse(node) {
  var prev = null;
  var current = node;
  var next = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

// prints content of double linked list
function printList(node) {
  while (node != null) {
    document.write(node.data + " ");
    node = node.next;
  }
}

// Driver code 

head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20)

// 

var reverseList = function(head) {
  if (head === null) return null;
  if (head.next === null) return head;
  let prev = null, next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

const reverseList = (head, prev=null) => {
  while (head) [head.next, prev, head] = [prev, head. head.next];
  return prev;
}