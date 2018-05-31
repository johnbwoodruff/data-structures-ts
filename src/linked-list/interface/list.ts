export interface List<T> {
  length: number;

  get(index: number): T;

  add(val: T, index?: number): void;

  remove(index: number): void;

  clear(): void;
}
