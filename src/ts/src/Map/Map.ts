/**
 * A map allows to create a key-value pair while remembering the insertion
 * order. The value may be an object. 
 */
const values: Record<string, number> = {
  a: 1, 
  b: 2, 
  c: 3
};

const entriesArr: Array<[string, number]> = Object.entries(values);
const map: Map<string, number> = new Map(entriesArr);

// Iterating through the keys and values of this map
for (const [k, v] of map) {
  console.log(k, v);
}
// -> "a", 1 
// -> "b", 2
// -> "c", 3

export { }; 