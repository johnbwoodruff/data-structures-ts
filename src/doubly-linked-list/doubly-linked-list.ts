import { Node } from '../common/double-node';
import { List } from '../interfaces/list';

/**
 * A doubly linked list data structure.
 * Each element has pointers to both the next and previous elements,
 * allowing bidirectional traversal.
 * @typeparam T - The type of elements stored in the list
 */
export class DoublyLinkedList<T> implements List<T> {
  private head: Node<T> = null;
  private tail: Node<T> = null;

  /**
   * Returns the first element in the list.
   * @returns The first element
   * @throws Error if the list is empty
   */
  getFirst(): T {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    return this.head.val;
  }

  /**
   * Returns the last element in the list.
   * This is O(1) due to the tail pointer.
   * @returns The last element
   * @throws Error if the list is empty
   */
  getLast(): T {
    if (!this.tail) {
      throw new Error('Index out of bounds');
    }
    return this.tail.val;
  }

  /**
   * Removes the first element from the list.
   * @throws Error if the list is empty
   */
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

  /**
   * Removes the last element from the list.
   * This is O(1) due to the tail pointer and previous links.
   * @throws Error if the list is empty
   */
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

  /**
   * Adds an element to the beginning of the list.
   * @param val - The value to add
   */
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

  /**
   * Adds an element to the end of the list.
   * This is O(1) due to the tail pointer.
   * @param val - The value to add
   */
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

  /**
   * Checks if the list contains a specific value.
   * @param val - The value to search for
   * @returns True if the value exists in the list, false otherwise
   */
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

  /**
   * Returns the number of elements in the list.
   * @returns The size of the list
   */
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

  /**
   * Adds an element to the end of the list.
   * This is an alias for addLast.
   * @param val - The value to add
   */
  add(val: T): void {
    this.addLast(val);
  }

  /**
   * Removes the element at the specified index.
   * @param index - The index of the element to remove
   * @throws Error if the list is empty or index is out of bounds
   * @remarks TODO: Start at head or tail based on index compared to size for better performance
   */
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

  /**
   * Returns the element at the specified index.
   * @param index - The index of the element to retrieve
   * @returns The element at the specified index
   * @throws Error if the list is empty or index is out of bounds
   * @remarks TODO: Start at head or tail based on index compared to size for better performance
   */
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

  /**
   * Replaces the element at the specified index with a new value.
   * @param index - The index of the element to replace
   * @param val - The new value
   * @returns The previous value at the specified index
   * @throws Error if the index is out of bounds
   * @remarks TODO: Start at head or tail based on index compared to size for better performance
   */
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

  /**
   * Removes all elements from the list.
   */
  clear(): void {
    this.head = null;
    this.tail = null;
  }

  /**
   * Returns the index of the first occurrence of the specified value.
   * @param val - The value to search for
   * @returns The index of the value, or -1 if not found
   */
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

  /**
   * Converts the list to an array.
   * @returns An array containing all elements in the list
   */
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
