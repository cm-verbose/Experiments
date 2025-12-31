# TypeScript

This directory includes experimenting with [TypeScript](https://www.typescriptlang.org) and [JavaScript](https://tc39.es/ecma262), as TypeScript is a superset of JavaScript.

## [Language features](./src/_lang)

### TypeScript

- Assertion functions (`asserts p is T`)
- Implementations (`T implements I`)
- Type Guards (`p is T`)
- Type Intersections (`&`)
- Type Keys (`keyof O`)
- Type Unions (`|`)

### JavaScript

- `new.target`

## Objects and classes

### [Array](./src/Array)

- `Array.prototype[Symbol.iterator](): ArrayIterator<T>`

### [Function](./src/Function)

- `Function.prototype[Symbol.hasInstance](other: any): boolean`

### [Map](./src/Map)

- Constructor: `Map<K, V>()`

### [Symbol](./src/Symbol)

- `Symbol.iterator`

### [SyntaxError](./src/SyntaxError)

- Constructor: `SyntaxError`
