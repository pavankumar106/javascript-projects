class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid index provided!!!");
    } else {
      var node = new Node(element);
      var curr, prev;

      curr = this.head;
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var iterator = 0;

        while (iterator < index) {
          iterator++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Invalid index provided!!!");
    } else {
      var iterator;
      var curr, prev;

      curr = this.head;
      prev = curr;
      if (index === 0) {
        this.head = curr.next;
        this.head = node;
      } else {
        while (iterator < index) {
          iterator++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }
  removeElement(element) {
    var curr = this.head;
    var prev = null;
    while (curr != null) {
      if (curr.element === element) {
        if (prev == null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }
  indexOf(element) {
    var count = 0;
    var curr = this.head;
    while (curr != null) {
      if (curr.element === element) {
        return count;
      } else {
        count++;
        curr = curr.next;
      }
    }
    return;
  }
  isEmpty() {
    return this.size == 0;
  }
  size_of_list() {
    console.log(this.size);
  }
  display() {
    var curr = this.head;
    var str = " ";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

var obj = new LinkedList();
console.log(obj.isEmpty());
obj.add(100);
obj.add(200);
obj.display();
console.log(obj.size_of_list());
obj.add(300);
obj.add(400);
obj.add(500);
obj.add(600);
obj.display();
console.log("index of 400 : " + obj.indexOf(400));
obj.insertAt(1000, 2);
obj.display();
console.log(obj.removeFrom(3));
obj.display();
console.log(obj.removeElement(500));
obj.display();
