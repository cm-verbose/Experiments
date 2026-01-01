/**
 * (TypeScript)
 * The vertical line operator (|) in TypeScript indicates a type union on types
 * (| also represents the bitwise OR operator for numbers). A union allows only
 * the defined types in its definition.
 *
 * Syntax
 *
 * ```ts
 * A | B | C | ... | N
 * ```
 *
 * Where `A`, `B`, `C`, ..., `N` are types.
 *
 * Example
 * We can define a simple union with two strings as so:
 */

type Status = "Pass" | "Fail";

// Using this type in a function for example, we can only have the types "Pass"
// or "Fail" passed to this function.
function getStatus(state: Status) {
  switch (state) {
    case "Pass":
      break;
    case "Fail":
      break;
    // No need for a default here, since all possible values are defined
  }
}

// input values also correspond to the state
getStatus("Fail");

export {};
