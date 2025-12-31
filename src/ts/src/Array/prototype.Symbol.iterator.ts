/**
 * Array.prototype[Symbol.iterator] represents the prototypical iterator
 * symbol, which is used to change a for(... of ...) loop's behavior. We can
 * override this iterator like so, but is not recommended due to engine
 * optimization.
 * This symbol is a function that returns ArrayIterator<T>.
 */
Array.prototype[Symbol.iterator] = function <T extends Array<[keyof typeof Array]>>(): ArrayIterator<T> {
  const instance: T[] = this;
  let i = instance.length - 1;

  const iterator: ArrayIterator<T> = {
    [Symbol.iterator]: function (): ArrayIterator<T> {
      return this;
    },

    // Reimplementing Iterator.drop() Note that using a for(... of ...) loop
    // will call the Symbol.iterator here. If custom logic is defined in next()
    // it is best to avoid using these types of loops as it would trigger the
    // custom implementation.
    drop: function* (count: number): IteratorObject<T, undefined, unknown> {
      let toDrop = Math.max(0, count);

      for (let k = toDrop; k < instance.length; k++) {
        yield instance[k] as T;
      }
    },

    /// Reimplementing Iterator.every() using the array's every.
    every: function (predicate: (value: T, index: number) => unknown): boolean {
      return instance.every(predicate);
    },

    // Reimplementing Iterator.filter()
    filter: function* <S extends T>(
      predicate: (value: T, index: number) => value is S
    ): IteratorObject<S, undefined, T> {
      for (let k = 0; k < instance.length; k++) {
        const item = instance[k] as T;
        if (predicate(item, k)) {
          yield item;
        }
      }
    },

    // Reimplmenting Iterator.map()
    map: function* <U>(callbackfn: (value: T, index: number) => U): IteratorObject<U, undefined, T> {
      for (let k = 0; k < instance.length; k++) {
        yield callbackfn(instance[k] as T, k);
      }
    },

    // Reimplementing Iterator.take()
    take: function* (limit: number): IteratorObject<T, undefined, unknown> {
      if (limit == 0) return;

      for (let k = 0; k < limit; k++) {
        yield instance[k] as T;
      }
    },

    /// Reimplementing Iterator.toArray()
    toArray: function (): T[] {
      return [...this];
    },

    /// Reimplementing Iterator.flatMap()
    flatMap: function* <U>(
      callback: (value: T, index: number) => Iterator<U, unknown, undefined> | Iterable<U, unknown, undefined>
    ): IteratorObject<U, undefined, unknown> {
      for (let k = 0; k < instance.length; k++) {
        const inner = callback(instance[k] as T, k);
        yield* inner as Iterable<U>;
      }
    },

    // The following methods should be redefined for performance's sake but
    // this is just a simple example, so we can reuse an array's original
    // code.
    reduce: function (callbackfn: (previousValue: T, currentValue: T, currentIndex: number) => T): T {
      return instance.reduce(callbackfn);
    },

    forEach: function (callbackfn: (value: T, index: number) => void): void {
      return instance.forEach(callbackfn);
    },

    some: function (predicate: (value: T, index: number) => unknown): boolean {
      return instance.some(predicate);
    },

    find: function <S extends T>(predicate: (value: T, index: number) => value is S): S | undefined {
      return instance.find(predicate);
    },

    [Symbol.toStringTag]: "Array",

    // Overriding the default iteration behavior to loop backwards.
    next: function (): IteratorResult<T, undefined> {
      if (i < 0) {
        // Forward boundary check
        return { done: true, value: undefined };
      }
      const current = instance[i];
      i--;
      return { done: false, value: current as T };
    },

    [Symbol.dispose]: function (): void {
      if (typeof this.return === "function") {
        this.return();
      }
    },
  };
  return iterator;
};

for (const a of [1, 2, 3]) {
  console.log(a);
}
