import { LinkedList } from './linked-list';

let list: LinkedList<any>;

const MICHAEL = 'Michael Scott';
const DWIGHT = 'Dwight Schrute';
const JIM = 'Jim Halpert';

beforeEach(() => {
  list = new LinkedList();
  const newList = new LinkedList<number>();
});

test('initializes linked list', () => {
  expect(list).toBeDefined();
});

test('newly initialized linked list should have 0 length', () => {
  expect(list.length).toEqual(0);
});

test('should add new values correctly', () => {
  list.add(MICHAEL);
  expect(list.length).toEqual(1);
  list.add(DWIGHT);
  expect(list.length).toEqual(2);
  list.add(JIM);
  expect(list.length).toEqual(3);
});

test('should return the proper value', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(list.get(0)).toEqual(MICHAEL);
  expect(list.get(1)).toEqual(DWIGHT);
  expect(list.get(2)).toEqual(JIM);
});

test('should throw on get on empty list', () => {
  expect(() => {
    list.get(0);
  }).toThrow('List is empty');
});

test('should throw on index out of bounds on get', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(() => {
    list.get(4);
  }).toThrow('Index out of bounds');
});

test('should throw on remove on empty list', () => {
  expect(() => {
    list.remove(0);
  }).toThrow('List is empty');
});

test('should throw on index out of bounds on remove', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(() => {
    list.remove(4);
  }).toThrow('Index out of bounds');
});

test('should remove elements correctly', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(list.length).toEqual(3);
  list.remove(2);
  expect(list.length).toEqual(2);
  list.remove(1);
  expect(list.length).toEqual(1);
  list.remove(0);
  expect(list.length).toEqual(0);
});

test('should remove the correct elements', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(list.get(0)).toEqual(MICHAEL);
  list.remove(0);
  expect(list.get(0)).toEqual(DWIGHT);
  list.remove(0);
  expect(list.get(0)).toEqual(JIM);
  list.remove(0);
  expect(list.length).toEqual(0);
});

test('should clear list', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(list.length).toEqual(3);
  list.clear();
  expect(list.length).toEqual(0);
});
