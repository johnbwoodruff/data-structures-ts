import { Node } from '../common/double-node';
import { List } from '../interfaces/list';

export class DoublyLinkedList<T> implements List<T> {
  private head: Node<T> = null;
  private tail: Node<T> = null;

  getFirst(): T {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    return this.head.val;
  }

  getLast(): T {
    if (!this.tail) {
      throw new Error('Index out of bounds');
    }
    return this.tail.val;
  }

  removeFirst(): void {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    if (this.head.next == null) {
      // Only one item in list
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
  }

  removeLast(): void {
    if (!this.tail) {
      throw new Error('Index out of bounds');
    }
    if (this.tail.prev == null) {
      // Only one item in list
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  addFirst(val: T): void {
    const newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
    if (!this.tail) {
      // This is the first node, so assign tail as well.
      this.tail = this.head;
    }
  }

  addLast(val: T): void {
    const newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    if (!this.head) {
      // This is the first node, so assign tail as well.
      this.head = newNode;
    }
  }

  contains(val: T): boolean {
    if (!this.head) {
      return false;
    }
    if (!this.head.next) {
      return this.head.val === val ? true : false;
    }
    let currentNode = this.head;
    if (currentNode.val === val) {
      return true;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.val === val) {
        return true;
      }
    }
    return false;
  }

  size(): number {
    if (!this.head) {
      return 0;
    }
    let currentNode = this.head;
    let size = 1;
    while (currentNode.next) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  add(val: T): void {
    this.addLast(val);
  }

  remove(index: number): void {
    // TODO: Start at head or tail based on index compared to size
    // Error cases
    if (!this.head) {
      throw new Error('List is empty');
    }
    if (index >= this.size()) {
      throw new Error('Index out of bounds');
    }
    // Standard situation
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let i = 0;
      let currentNode = this.head;

      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }

      let nodeToRemove = currentNode.next;
      currentNode.next = nodeToRemove.next;
      nodeToRemove.next = null;
    }
  }

  get(index: number): T {
    // TODO: Start at head or tail based on index compared to size
    // Error cases
    if (!this.head) {
      throw new Error('List is empty');
    }
    if (index >= this.size()) {
      throw new Error('Index out of bounds');
    }
    // Standard situation
    let currentNode = this.head;
    let i = 0;

    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode.val;
  }

  set(index: number, val: T): T {
    // TODO: Start at head or tail based on index compared to size
    // Returns the value previously at the specified position
    let prev = null;
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of bounds');
    } else {
      if (index === 0) {
        prev = this.head.val;
        this.head.val = val;
      } else {
        let i = 0;
        let currentNode = this.head;
        while (currentNode.next && i < index) {
          i++;
          currentNode = currentNode.next;
        }
        prev = currentNode.val;
        currentNode.val = val;
      }
    }
    return prev;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
  }

  indexOf(val: T): number {
    let i = -1;
    if (this.head) {
      let currIndex = 0;
      let currentNode = this.head;
      if (currentNode.val === val) {
        i = currIndex;
      } else {
        while (currentNode.next) {
          currentNode = currentNode.next;
          currIndex++;
          if (currentNode.val === val) {
            i = currIndex;
            break;
          }
        }
      }
    }
    return i;
  }

  toArray(): T[] {
    const arr: T[] = [];

    if (this.head) {
      let currentNode = this.head;
      arr.push(currentNode.val);
      while (currentNode.next) {
        currentNode = currentNode.next;
        arr.push(currentNode.val);
      }
    }

    return arr;
  }
}
