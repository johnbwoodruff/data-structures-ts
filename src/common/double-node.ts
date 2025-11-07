/**
 * A node for doubly linked data structures.
 * @typeparam T - The type of value stored in the node
 */
export class Node<T> {
  /** The value stored in this node */
  val: T;
  /** Reference to the previous node in the sequence */
  prev: Node<T> | null = null;
  /** Reference to the next node in the sequence */
  next: Node<T> | null = null;

  /**
   * Creates a new node.
   * @param val - The value to store in the node
   */
  constructor(val: T) {
    this.val = val;
  }
}
