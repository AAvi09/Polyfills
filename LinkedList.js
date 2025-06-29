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
