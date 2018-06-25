import { Node } from '../common/single-node';

export class Queue<T> {
  private back: Node<T> = null;
  private front: Node<T> = null;

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

  peek(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.front.val;
  }

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

  isEmpty(): boolean {
    return !this.front && !this.back ? true : false;
  }
}
