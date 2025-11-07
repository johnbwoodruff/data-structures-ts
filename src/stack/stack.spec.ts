import { Stack } from './stack';

let list: Stack<string>;

const MICHAEL = 'Michael Scott';
const DWIGHT = 'Dwight Schrute';
const JIM = 'Jim Halpert';

beforeEach(() => {
  list = new Stack<string>();
});

test('initializes linked list', () => {
  expect(list).toBeDefined();
});

test('newly initialized list should be empty', () => {
  expect(list.size()).toEqual(0);
});

test('isEmpty should return true if empty', () => {
  expect(list.isEmpty()).toEqual(true);
  list.push(MICHAEL);
  expect(list.isEmpty()).toEqual(false);
});

test('should add elements properly', () => {
  list.push(MICHAEL);
  expect(list.size()).toEqual(1);
  list.push(DWIGHT);
  expect(list.size()).toEqual(2);
  list.push(JIM);
  expect(list.size()).toEqual(3);
});

test('should remove elements properly', () => {
  list.push(MICHAEL);
  list.push(DWIGHT);
  list.push(JIM);
  expect(list.size()).toEqual(3);
  list.pop();
  expect(list.size()).toEqual(2);
  list.pop();
  expect(list.size()).toEqual(1);
  list.pop();
  expect(list.size()).toEqual(0);
  expect(list.isEmpty()).toEqual(true);
});

test('should throw an error if trying to pop with no items', () => {
  expect(() => {
    list.pop();
  }).toThrowError('Index out of bounds');
});
