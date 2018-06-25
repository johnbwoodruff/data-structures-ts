export class Node<T> {
  val: T;
  prev: Node<T> | null = null;
  next: Node<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}
