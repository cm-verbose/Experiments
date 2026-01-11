/**
 * `[Symbol.iterator]` defines iterable behavior to an existing `Object`. The
 * corresponding value of this key on an object is called by the semantics of
 * the `for(... of ...)` loop, and represents the default iterator. Other
 * language features also depend on `[Symbol.iterator]`.
 *
 * Signature
 *
 * ```
 * [Symbol.iterator](): T
 * ```
 *
 * Example
 * Let's define a custom iterable class:
 */

class ArrayMap<K, V> {
  /** Represents the key pair values given to the map */
  private pairs: Array<[K, V]>;

  constructor(values: Array<[K, V]>) {
    this.pairs = values;
  }

  /** Custom iterator definition */
  public *[Symbol.iterator](): IterableIterator<[K, V]> {
    for (const [k, v] of this.pairs) {
      yield [k, v];
    }
  }
}

// Let's create an instance of this class
const map = new ArrayMap([
  [0, 3],
  [0, 4],
]);

// Here we are iterating through the IterableIterator<[K, V]>, which gives us
// many [K, V] arrays that we can manipulate later.
for (const v of map[Symbol.iterator]()) {
  console.log(v);
}
