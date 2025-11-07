import { Node } from '../common/single-node';

/**
 * A First-In-First-Out (FIFO) queue data structure.
 * @typeparam T - The type of elements stored in the queue
 */
export class Queue<T> {
  private back: Node<T> = null;
  private front: Node<T> = null;

  /**
   * Adds an element to the back of the queue.
   * @param val - The value to add
   */
  enqueue(val: T): void {
    const newNode = new Node(val);
    if (this.back) {
      this.back.next = newNode;
    }
    this.back = newNode;
    if (!this.front) {
      this.front = this.back;
    }
  }

  /**
   * Removes and returns the element from the front of the queue.
   * @throws Error if the queue is empty
   */
  dequeue(): void {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    if (this.front === this.back) {
      // Size is just one element
      this.front = null;
      this.back = null;
    } else {
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
    }
  }

  /**
   * Returns the element at the front of the queue without removing it.
   * @returns The element at the front of the queue
   * @throws Error if the queue is empty
   */
  peek(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.front.val;
  }

  /**
   * Returns the number of elements in the queue.
   * @returns The size of the queue
   */
  size(): number {
    if (this.isEmpty()) {
      return 0;
    }
    let i = 1;
    let currNode = this.front;
    while (currNode.next) {
      currNode = currNode.next;
      i++;
    }
    return i;
  }

  /**
   * Checks if the queue is empty.
   * @returns True if the queue contains no elements, false otherwise
   */
  isEmpty(): boolean {
    return !this.front && !this.back ? true : false;
  }
}
