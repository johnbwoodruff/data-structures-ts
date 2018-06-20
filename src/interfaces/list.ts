export interface List<T> {
  getFirst(): T;

  getLast(): T;

  removeFirst(): void;

  removeLast(): void;

  addFirst(val: T): void;

  addLast(val: T): void;

  contains(val: T): boolean;

  size(): number;

  add(val: T, index?: number): void;

  remove(index: number): void;

  get(index: number): T;

  set(index: number, val: T): void;

  clear(): void;

  indexOf(val: T): number;

  toArray(): T[];
}
