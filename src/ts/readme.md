# TypeScript

This directory includes experimenting with [TypeScript](https://www.typescriptlang.org) and [JavaScript](https://tc39.es/ecma262), as TypeScript is a superset of JavaScript.

## [Language features](./src/Language)

### [TypeScript](./src/Language/ts)

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
  - Picking (`Pick<T, K extends keyof T>`)
  - String type lowercase transform (`Lowercase<S extends string>`)
  - String type uppercase transform (`Uppercase<S extends string>`)
  - Type omission (`Omit<T, K extends keyof any>`)

### [JavaScript](./src/Language/js)

- Class meta-property (`new.target`)

## Objects and classes

### [Array](./src/Array)

- Constructors:
  - `new (arrayLength?: number): any[];`
  - `new<T>(arrayLength?: number): T[];`
  - `new<T>(...items:T[]): T[];`

- Call signatures:
  - `(arrayLength?: number): any[];`
  - `<T>(arrayLength: number): T[];`
  - `<T>(...items: T[]): T[];`

- Prototype:
  - Popping: `Array<T>.prototype.pop(): T | undefined;`
  - Pushing: `Array<T>.prototype.push(...items: T[]);`
  - Iterator Symbol: `Array<T>.prototype[Symbol.iterator](): ArrayIterator<T>;`

### [Error](./src/Error)

- Constructors
  - `new (message?: string, options?: ErrorOptions): Error;`
  - `(message?: string, options?: ErrorOptions): Error;`

### [Function](./src/Function)

- Prototype:
  - Instanceof Symbol: `Function.prototype[Symbol.hasInstance](other: any): boolean;`

### [Map](./src/Map)

- Constructors:
  - `new(): Map<any, any>`
  - `new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;`
  - `new <K, V>(iterable?: Iterable<readonly [K, V]> | null): Map<K, V>;`

### [Symbol](./src/Symbol)

- `Symbol.iterator`

### [SyntaxError](./src/SyntaxError)

- Constructor:
  - `new SyntaxError(message? string, options?: ErrorOptions)`

- Call signature:
  - `SyntaxError(message? string, options?: ErrorOptions)`
