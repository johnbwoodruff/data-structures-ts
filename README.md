# TypeScript Data Structures

A collection of data structures, built using TypeScript, built in my spare time for no reason other than fun. Why did I release it as an npm package? Again, just for fun.

This collection will likely never contain all the common data structures, I'll just add them one at a time when I'm bored.

## Usage

Don't try to use this in anything even remotely resembling production. For testing or fun, sure, knock yourself out. Otherwise, use the stuff that already exists that is far better.

If you really really really want to use this, then feel free.

Installation:

```shell
$ npm install typescript-data-structures
```

Code usage:

```typescript
import { LinkedList } from 'typescript-data-structures';

const list = new LinkedList();
list.add('Hello');
// ...
```

## Documentation

No docs at the moment. Down the road, maybe, we'll see. For now, just read the source. There are also TypeScript definition files.

## Developing

This project uses ts-node for development and ts-jest for testing.

To run tests, use `npm test`. Output will display test results as well as test coverage.

## License

This software uses the MIT license. See LICENSE for details.
