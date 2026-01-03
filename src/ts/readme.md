# TypeScript

This directory includes experimenting with [TypeScript](https://www.typescriptlang.org) and [JavaScript](https://tc39.es/ecma262), as TypeScript is a superset of JavaScript.

## [Language features](./src/_lang)

### [TypeScript](./src/_lang/ts)

- Assertion function (`asserts p is T`)
- Constant type assertion (`<const> V`, `V as const`)
- Implementation (`T implements I`)
- Optional types (`P?: T`, `{ P?: T }`)
- Type assertion (`V as T`)
- Type guard (`p is T`)
- Type intersection (`A & B`)
- Type keys (`keyof O`)
- Type union (`A | B`)
- Utility types:
  - Nullish value exclusion (`NonNullable<T>`)
  - String type lowercase transform (`Lowercase<S>`)
  - String type uppercase transform (`Uppercase<S>`)

### [JavaScript](./src/_lang/js)

- `new.target`

## Objects and classes

### [Array](./src/Array)

- Pushing: `Array<T>.prototype.push(...items: T[]);`
- `Array.prototype[Symbol.iterator](): ArrayIterator<T>;`

### [Function](./src/Function)

- `Function.prototype[Symbol.hasInstance](other: any): boolean;`

### [Map](./src/Map)

- Constructor: `Map<K, V>()`

### [Symbol](./src/Symbol)

- `Symbol.iterator`

### [SyntaxError](./src/SyntaxError)

- Constructor: `SyntaxError`
