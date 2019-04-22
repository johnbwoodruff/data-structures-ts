# TypeScript Data Structures

[![Build Status](https://travis-ci.com/johnbwoodruff/data-structures-ts.svg?branch=master)](https://travis-ci.com/johnbwoodruff/data-structures-ts)
[![Coverage Status](https://coveralls.io/repos/github/johnbwoodruff/data-structures-ts/badge.svg?branch=master)](https://coveralls.io/github/johnbwoodruff/data-structures-ts?branch=master)
[![npm](https://img.shields.io/npm/v/data-structures-ts.svg)](https://www.npmjs.com/package/data-structures-ts)

A collection of data structures, built using TypeScript, built in my spare time for no reason other than fun. Why did I release it as an npm package? Again, just for fun.

This collection will likely never contain all the common data structures, I'll just add them one at a time when I'm bored.

## Usage

Don't try to use this in anything even remotely resembling production. For testing or fun, sure, knock yourself out. Otherwise, use the stuff that already exists that is far better.

If you really really really want to use this, then feel free.

Installation:

```shell
$ npm install data-structures-ts
```

Code usage:

```typescript
import { LinkedList } from 'data-structures-ts';

const list = new LinkedList();
list.add('Hello');
// ...
```

## Documentation

This project has documentation just in case you decide, against all my warnings, to use this anyway for some weird reason, you're welcome to check out the project's [Documentation](https://johnbwoodruff.github.io/data-structures-ts/).

## Developing

This project uses ts-node for development and ts-jest for testing.

To run tests, use `npm test`. Output will display test results as well as test coverage.

## License

This software uses the MIT license. See LICENSE for details.
