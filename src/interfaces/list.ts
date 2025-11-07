/**
 * Interface for list data structures.
 */
export interface List<T> {
  /**
   * Returns the first element in the list.
   * @returns The first element
   * @throws Error if the list is empty
   */
  getFirst(): T;

  /**
   * Returns the last element in the list.
   * @returns The last element
   * @throws Error if the list is empty
   */
  getLast(): T;

  /**
   * Removes the first element from the list.
   * @throws Error if the list is empty
   */
  removeFirst(): void;

  /**
   * Removes the last element from the list.
   * @throws Error if the list is empty
   */
  removeLast(): void;

  /**
   * Adds an element to the beginning of the list.
   * @param val - The value to add
   */
  addFirst(val: T): void;

  /**
   * Adds an element to the end of the list.
   * @param val - The value to add
   */
  addLast(val: T): void;

  /**
   * Checks if the list contains a specific value.
   * @param val - The value to search for
   * @returns True if the value exists in the list, false otherwise
   */
  contains(val: T): boolean;

  /**
   * Returns the number of elements in the list.
   * @returns The size of the list
   */
  size(): number;

  /**
   * Adds an element to the list (typically at the end).
   * @param val - The value to add
   */
  add(val: T): void;

  /**
   * Removes the element at the specified index.
   * @param index - The index of the element to remove
   * @throws Error if the index is out of bounds
   */
  remove(index: number): void;

  /**
   * Returns the element at the specified index.
   * @param index - The index of the element to retrieve
   * @returns The element at the specified index
   * @throws Error if the index is out of bounds
   */
  get(index: number): T;

  /**
   * Replaces the element at the specified index with a new value.
   * @param index - The index of the element to replace
   * @param val - The new value
   * @returns The previous value at the specified index
   * @throws Error if the index is out of bounds
   */
  set(index: number, val: T): T;

  /**
   * Removes all elements from the list.
   */
  clear(): void;

  /**
   * Returns the index of the first occurrence of the specified value.
   * @param val - The value to search for
   * @returns The index of the value, or -1 if not found
   */
  indexOf(val: T): number;

  /**
   * Converts the list to an array.
   * @returns An array containing all elements in the list
   */
  toArray(): T[];
}
