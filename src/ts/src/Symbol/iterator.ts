// Defines custom behavior for the for(...of...) loop
class MyIterable {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const iterable = new MyIterable();

// Logs:
// 1
// 2
// 3
// because of the *[Symbol.iterator] generator.
for (const it of iterable) {
  console.log(it);
}

export {};
