import { List } from './interface/list';
import { Node } from './node';

/**
 * Singly Linked List
 */
export class LinkedList<T> implements List<T> {
  private head: Node<T> = null;

  getFirst(): T {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    return this.head.val;
  }

  getLast(): T {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  removeFirst(): void {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    if (this.head.next == null) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
  }

  removeLast(): void {
    if (!this.head) {
      // Empty List
      throw new Error('Index out of bounds');
    }
    if (!this.head.next) {
      // Only one item in the list
      this.head = null;
    } else {
      let currentNode = this.head;
      let prevNode;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = null;
    }
  }

  addFirst(val: T): void {
    const newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  addLast(val: T): void {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
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

  add(val: T, index?: number | undefined): void {
    const newNode = new Node<T>(val);

    if (!this.head) {
      // Initialize as head if list is empty
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  remove(index: number): void {
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
