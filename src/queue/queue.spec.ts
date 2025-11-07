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

test('should verify FIFO order - first in, first out', () => {
  list.enqueue(MICHAEL);
  list.enqueue(DWIGHT);
  list.enqueue(JIM);

  // First enqueued (MICHAEL) should be at the front
  expect(list.peek()).toEqual(MICHAEL);
  list.dequeue();

  // Second enqueued (DWIGHT) should now be at the front
  expect(list.peek()).toEqual(DWIGHT);
  list.dequeue();

  // Third enqueued (JIM) should now be at the front
  expect(list.peek()).toEqual(JIM);
  list.dequeue();

  expect(list.isEmpty()).toEqual(true);
});

test('should maintain FIFO order with interleaved operations', () => {
  list.enqueue(MICHAEL);
  list.enqueue(DWIGHT);
  expect(list.peek()).toEqual(MICHAEL);

  list.dequeue();
  expect(list.peek()).toEqual(DWIGHT);

  list.enqueue(JIM);
  // DWIGHT should still be at front (was enqueued before JIM)
  expect(list.peek()).toEqual(DWIGHT);

  list.dequeue();
  // Now JIM should be at front
  expect(list.peek()).toEqual(JIM);
});
