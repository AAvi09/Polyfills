function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

function node(value) {
  this.value = value;
  this.next = null;
}

function addAtHead(value) {
  let newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
}

function addAtTail(value) {
  let newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
}

function addAtIndex(index, value) {
  if (index < 0 || index > this.size) {
    return;
  } else if (index === 0) {
    this.addAtHead(value);
  } else if (index === this.size) {
    this.addAtTail(value);
  } else {
    let newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  this.size++;
}

function middle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
}
function LinkedListCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.nxt.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
function AddTwoNumbers(l1, l2) {
  let dummy = new Node(0);
  let curr = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    sum = carry;
    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.value;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    curr.next = new Node(sum % 10);
    curr = curr.next;
  }
  return dummy.next;
}

function oddEven(head) {
  if (!head || !head.next) return head;
  if (!head.next.next) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}

function pallindromeLinkedList(head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  let left = head;
  let right = prev;
  while (right) {
    if (left.val != right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
}
