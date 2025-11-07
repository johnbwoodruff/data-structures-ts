import { Queue } from './queue';

let list: Queue<string>;

const MICHAEL = 'Michael Scott';
const DWIGHT = 'Dwight Schrute';
const JIM = 'Jim Halpert';

beforeEach(() => {
  list = new Queue<string>();
});

test('initializes linked list', () => {
  expect(list).toBeDefined();
});

test('should properly identify empty list', () => {
  expect(list.isEmpty()).toEqual(true);
});

test('should add items properly', () => {
  list.enqueue(MICHAEL);
  expect(list.isEmpty()).toEqual(false);
  expect(list.size()).toEqual(1);
  list.enqueue(DWIGHT);
  expect(list.isEmpty()).toEqual(false);
  expect(list.size()).toEqual(2);
});

test('should peek properly', () => {
  list.enqueue(MICHAEL);
  expect(list.peek()).toEqual(MICHAEL);
  list.enqueue(DWIGHT);
  expect(list.peek()).toEqual(MICHAEL);
});

test('should remove items properly', () => {
  list.enqueue(MICHAEL);
  list.enqueue(DWIGHT);
  list.enqueue(JIM);
  expect(list.size()).toEqual(3);
  expect(list.peek()).toEqual(MICHAEL);
  list.dequeue();
  expect(list.size()).toEqual(2);
  expect(list.peek()).toEqual(DWIGHT);
  list.dequeue();
  expect(list.size()).toEqual(1);
  expect(list.peek()).toEqual(JIM);
  list.dequeue();
  expect(list.isEmpty()).toEqual(true);
  expect(list.size()).toEqual(0);
  expect(() => {
    list.peek();
  }).toThrowError('Queue is empty');
});

test('should throw on dequeue of empty list', () => {
  expect(() => {
    list.dequeue();
  }).toThrowError('Queue is empty');
});
