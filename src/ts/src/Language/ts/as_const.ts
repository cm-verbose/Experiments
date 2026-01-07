/**
 * (TypeScript)
 * `as const` allows to create a given type that cannot be widened, or a type
 * that cannot be reinterpreted as a type that contains itself. Hence the
 * created type is only the type of the value annoted with `as const`.
 *
 * Syntaxes
 *
 * ```ts
 * V as const
 * ```
 *
 * Where `V` is the value which is used to create the constant type.
 *
 * ```ts
 * <const> `V`
 * ```
 *
 * Where `V` is the value which is used to create the constant type. The first
 * way of annotating constant assertion is most common, but the second can be
 * used when the type is particularly long.
 */

const PORT = 5500 as const;

function logPort(port: typeof PORT) {
  console.log(port);
}

// Notice that no value other than `5500` can be used in this context as we
// assume the constant value of PORT as being `5500`. The value cannot change
// as per the definition of const.
logPort(5500);

const IP_SEGMENTS = <const>[192, 168, 0, 0];

// For objects such as arrays with keys, their values are marked as `readonly`
// and thereof cannot be reassigned. Hence trying to run:
// ```ts
// IP_SEGMENTS[0] = 1
// ```
// Will cause an error because readonly keys cannot be modified.

// Futhermore, constant assertions can only be applied to :
// - `enum` members
// - `string` literals
// - `number` literals
// - `boolean` literals
// - `Array` literals with literal values
// - `Object` literals
//
// Any non simple value (as being evaluated or not directly written) cannot be
// used with `as const`. For example:
//
// ```ts
// const a = (1 + 1) as const;
// ```
//
// will err as `(1 + 1)` is not a literal value, but `2` is.

export {};
