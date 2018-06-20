import { DoublyLinkedList } from './doubly-linked-list';

let list: DoublyLinkedList<string>;

const MICHAEL = 'Michael Scott';
const DWIGHT = 'Dwight Schrute';
const JIM = 'Jim Halpert';
const PAM = 'Pam Beesley';
const ANGELA = 'Angela Martin';
const KELLY = 'Kelly Kapoor';

beforeEach(() => {
  list = new DoublyLinkedList<string>();
});

test('initializes linked list', () => {
  expect(list).toBeDefined();
});

test('newly initialized linked list should have 0 length', () => {
  expect(list.size()).toEqual(0);
});

test('should add new values correctly, and give correct', () => {
  expect(list.size()).toEqual(0);
  list.add(MICHAEL);
  expect(list.size()).toEqual(1);
  list.add(DWIGHT);
  expect(list.size()).toEqual(2);
  list.add(JIM);
  expect(list.size()).toEqual(3);
});

test('should return the first value', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(list.getFirst()).toEqual(MICHAEL);
});

test('should throw index out of bounds on empty list get first', () => {
  expect(() => {
    list.getFirst();
  }).toThrowError('Index out of bounds');
});

test('should return the last value', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(list.getLast()).toEqual(JIM);
});

test('should throw index out of bounds on empty list get last', () => {
  expect(() => {
    list.getLast();
  }).toThrowError('Index out of bounds');
});

test('should first element correctly', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  list.removeFirst();
  expect(list.get(0)).toEqual(DWIGHT);
});

test('should remove only element if only one element exists', () => {
  list.add(MICHAEL);
  list.removeFirst();
  expect(list.size()).toEqual(0);
});

test('should remove last element correctly on remove first', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  list.removeLast();
  expect(list.size()).toEqual(2);
  expect(list.get(1)).toEqual(DWIGHT);
});

test('should throw index out of bounds on empty list remove last', () => {
  expect(() => {
    list.removeLast();
  }).toThrowError('Index out of bounds');
});

test('should remove only element if only one element exists', () => {
  list.add(MICHAEL);
  list.removeLast();
  expect(list.size()).toEqual(0);
});

test('should throw index out of bounds on empty list remove first', () => {
  expect(() => {
    list.removeFirst();
  }).toThrowError('Index out of bounds');
});

test('should add to the beginning of the list correctly', () => {
  list.addFirst(MICHAEL);
  list.addFirst(DWIGHT);
  expect(list.size()).toEqual(2);
  expect(list.get(0)).toEqual(DWIGHT);
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
  }).toThrowError('List is empty');
});

test('should throw on index out of bounds on get', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(() => {
    list.get(4);
  }).toThrowError('Index out of bounds');
});

test('should throw on remove on empty list', () => {
  expect(() => {
    list.remove(0);
  }).toThrowError('List is empty');
});

test('should throw on index out of bounds on remove', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(() => {
    list.remove(4);
  }).toThrowError('Index out of bounds');
});

test('should remove elements correctly', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(list.size()).toEqual(3);
  list.remove(2);
  expect(list.size()).toEqual(2);
  list.remove(1);
  expect(list.size()).toEqual(1);
  list.remove(0);
  expect(list.size()).toEqual(0);
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
  expect(list.size()).toEqual(0);
});

test('should clear list', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(list.size()).toEqual(3);
  list.clear();
  expect(list.size()).toEqual(0);
});

test('should add element to the end properly if list is empty', () => {
  list.addLast(MICHAEL);
  expect(list.size()).toEqual(1);
  expect(list.get(0)).toEqual(MICHAEL);
});

test('should add element to the end properly', () => {
  list.add(DWIGHT);
  list.add(JIM);
  list.addLast(MICHAEL);
  expect(list.size()).toEqual(3);
  expect(list.get(2)).toEqual(MICHAEL);
});

test('should check properly if list contains specific value, just one item in list', () => {
  list.add(MICHAEL);
  expect(list.contains(MICHAEL)).toEqual(true);
  expect(list.contains(JIM)).toEqual(false);
});

test('should check properly if list contains specific value, empty list', () => {
  expect(list.contains(MICHAEL)).toEqual(false);
});

test('should check properly if list contains specific value, multiple items in list', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  expect(list.contains(MICHAEL)).toEqual(true);
  expect(list.contains(DWIGHT)).toEqual(true);
  expect(list.contains(JIM)).toEqual(true);
  expect(list.contains(PAM)).toEqual(false);
});

test('should throw index out of bounds error if setting on empty list or too large index', () => {
  expect(() => {
    list.set(0, PAM);
  }).toThrowError('Index out of bounds');
  list.add(MICHAEL);
  expect(() => {
    list.set(1, PAM);
  }).toThrowError('Index out of bounds');
  list.add(JIM);
  expect(() => {
    list.set(2, PAM);
  }).toThrowError('Index out of bounds');
});

test('should set value properly, only one item in list', () => {
  list.add(MICHAEL);
  list.set(0, PAM);
  expect(list.get(0)).toEqual(PAM);
});

test('should set value of a specified node properly, multiple items in list', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  list.set(0, PAM);
  list.set(1, ANGELA);
  list.set(2, KELLY);
  expect(list.get(0)).toEqual(PAM);
  expect(list.get(1)).toEqual(ANGELA);
  expect(list.get(2)).toEqual(KELLY);
});

test('should return proper index of specified value, empty list and adding items', () => {
  expect(list.indexOf(MICHAEL)).toEqual(-1);
  list.add(MICHAEL);
  expect(list.indexOf(MICHAEL)).toEqual(0);
  list.add(DWIGHT);
  expect(list.indexOf(DWIGHT)).toEqual(1);
  list.add(JIM);
  expect(list.indexOf(JIM)).toEqual(2);
  expect(list.indexOf(PAM)).toEqual(-1);
});

test('should transform empty list into empty array', () => {
  expect(list.toArray()).toEqual([]);
});

test('should transform full list into array with matching items and order', () => {
  list.add(MICHAEL);
  list.add(DWIGHT);
  list.add(JIM);
  list.add(PAM);
  list.add(ANGELA);
  list.add(KELLY);
  const array = list.toArray();
  expect(array.length).toEqual(6);
  expect(array[0]).toEqual(MICHAEL);
  expect(array[1]).toEqual(DWIGHT);
  expect(array[2]).toEqual(JIM);
  expect(array[3]).toEqual(PAM);
  expect(array[4]).toEqual(ANGELA);
  expect(array[5]).toEqual(KELLY);
  expect(array[6]).toBeUndefined();
  expect(array).toEqual([MICHAEL, DWIGHT, JIM, PAM, ANGELA, KELLY]);
});
