// A syntax error is an error thrown when the source code has an error relative
// to its syntax, but it can also be created with the "new" keyword.
try {
  const err = new SyntaxError("some mispelled text");
  throw err;
} catch (err) {
  console.log((err as SyntaxError).message);
}

export {};
