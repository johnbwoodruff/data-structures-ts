export class Node<T> {
  val: T;
  next: Node<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}
