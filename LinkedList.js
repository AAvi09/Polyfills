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
