import { Node } from '../common/single-node';

/**
 * A Last-In-First-Out (LIFO) stack data structure.
 * @typeparam T - The type of elements stored in the stack
 */
export class Stack<T> {
  private top: Node<T> = null;

  /**
   * Adds an element to the top of the stack.
   * @param val - The value to add
   */
  push(val: T): void {
    const newNode = new Node(val);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  /**
   * Removes the element from the top of the stack.
   * @throws Error if the stack is empty
   */
  pop(): void {
    if (!this.top) {
      throw new Error('Index out of bounds');
    }
    this.top = this.top.next ? this.top.next : null;
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * @returns The element at the top of the stack
   * @throws Error if the stack is empty
   */
  peek(): T {
    if (!this.top) {
      throw new Error('Stack is empty');
    }
    return this.top.val;
  }

  /**
   * Checks if the stack is empty.
   * @returns True if the stack contains no elements, false otherwise
   */
  isEmpty(): boolean {
    return this.top ? false : true;
  }

  /**
   * Returns the number of elements in the stack.
   * @returns The size of the stack
   */
  size(): number {
    let size = 0;
    if (this.top) {
      size++;
      let currNode = this.top;
      while (currNode.next) {
        size++;
        currNode = currNode.next;
      }
    }
    return size;
  }
}
