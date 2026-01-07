/**
 * `Map<K, V>` represents a map data structure which is a key-pair data
 * structure where insertion order is preserved. The key and value types in a
 * map allow for more flexibility as compared to an `Object`. `Map` also allows
 * for better performance when dealing with key-pair operations.
 *
 * Constructor Signatures
 *
 * ```ts
 * new(): Map<any, any>
 * ```
 *
 * This constructor creates an empty `Map` with no value. The values are
 * inferred to be of type `any` unless specified otherwise.
 *
 * ```ts
 * new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
 * ```
 *
 * This constructor creates a `Map` from given `entries` which is either `null`
 * or an `Array` of key pair value `Array`s. `K` and `V` are respectively the
 * key and value types for the `Map`.
 *
 * ```ts
 * new <K, V>(iterable?: Iterable<readonly [K, V]> | null): Map<K, V>;
 * ```
 *
 * This constructor creates a `Map` from an iterable over key-value pairs or
 * `null`. `K` and `V` arae respectively the key and value types for the `Map`
 *
 * Example
 * Let's create some `Map`s.
 */

// Map here has a type of `Map<string, string>` to enforce having `string` in
// the definition of this first map.
const myMap: Map<string, string> = new Map();

// Adding some values with `.prototype.set(K, V)`
myMap.set("name", "James");
myMap.set("father", "Paul");
myMap.set("mother", "Ina");

// Looping through all the key-pairs
for (const [key, value] of myMap) {
  console.log(key, value);
}
// => "name" "James"
// => "father" "Paul"
// => "mother" "Ina"

// We can also create a `Map` from a given object, by using the `entries`
// constructor. For example:

const personObject = {
  name: "John",
  age: "6",
  guid: "1234",
};

const entries: [string, string][] = Object.entries(personObject);
const personMap: Map<string, string> = new Map(entries);

for (const [credential, value] of personMap) {
  console.log(credential, value);
}
// => "name" "John"
// => "age" "6"
// => "guid" "1234"

// `Map`s can also be created from `Iterable`s, such as generator functions
// that yield key pair values.

function* exampleGen(): Iterable<[string, string]> {
  yield ["k1", "k2"];
  yield ["k3", "k4"];
}

const genMap: Map<string, string> = new Map(exampleGen());
for (const [key, value] of genMap) {
  console.log(key, value);
}
// => "k1" "k2"
// => "k3" "k4"

export {};
