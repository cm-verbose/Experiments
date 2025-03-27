/**
 * Allows you to define custom iteration behavior for the for (...of...) loop
 * @returns {ArrayIterator<T>} (ArrayIterator<T> is a private interface so 
 * IterableIterator<T> is used instead)
 */

Array.prototype[Symbol.iterator] = function <T>(): IterableIterator<T> {
  const sourceArr = this;
  let index = sourceArr.length - 1;

  const iterator: IterableIterator<T> = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index === sourceArr.length - 1) {
        index -= 1;
        return { value: sourceArr[sourceArr.length - 1], done: false };
      }

      if (index >= 0) {
        const value = { value: sourceArr[index], done: false };
        index -= 1;
        return value;
      } else {
        return { value: undefined, done: true };
      }
    },
  };
  return iterator;
};

const myArray = [3, 4, 5];

// This array now loops backwards because of the behavior defined in the next()
// method of the iterator
for (const element of myArray) {
  console.log(element);
}

export {};
