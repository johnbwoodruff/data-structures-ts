import { List } from './interface/list';
import { Node } from './node';

/**
 * Singly Linked List
 */
export class LinkedList<T> implements List<T> {
  private head: Node<T> | null = null;
  length: number = 0;

  get(index: number): T {
    // Error cases
    if (!this.head) {
      throw new Error('List is empty');
    }
    if (index >= this.length) {
      throw new Error('Index out of bounds');
    }
    // Standard situation
    let currentNode = this.head;
    let i = 0;

    while (i !== index) {
      currentNode = <Node<T>>currentNode.next;
      i++;
    }

    return currentNode.val;
  }

  add(val: T): void {
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

    this.length++;
  }

  remove(index: number): void {
    // Error cases
    if (!this.head) {
      throw new Error('List is empty');
    }
    if (index >= this.length) {
      throw new Error('Index out of bounds');
    }
    // Standard situation
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let i = 0;
      let currentNode = this.head;

      while (i < index - 1) {
        currentNode = <Node<T>>currentNode.next;
        i++;
      }

      let nodeToRemove = <Node<T>>currentNode.next;
      currentNode.next = nodeToRemove.next;
      nodeToRemove.next = null;
    }

    this.length--;
  }

  clear(): void {
    this.head = null;
    this.length = 0;
  }
}
