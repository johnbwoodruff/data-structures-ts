import { Node } from './node';

export class Stack<T> {
  private top: Node<T> = null;

  push(val: T) {
    const newNode = new Node(val);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      throw new Error('Index out of bounds');
    }
    this.top = this.top.next ? this.top.next : null;
  }

  isEmpty(): boolean {
    return this.top ? false : true;
  }

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
