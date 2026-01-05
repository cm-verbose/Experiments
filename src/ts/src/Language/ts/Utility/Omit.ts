/**
 * (TypeScript)
 * `Omit<T, K>` is an utility type used to create another type by removing or
 * ommiting a given key `K`. `Omit` can be used on any type that contains keys.
 *
 * Signature
 *
 * ```ts
 * Omit<T, K>
 * ```
 *
 * Where `T` is the given type where the key `K` is being removed from. In this
 * context, `K` extends `keyof any`, as the keys of a type `T` can be described
 * in many different ways. Many keys can be specified with a union of key 
 * values.
 *
 * Example
 * Creating a user creation object
 */

// This could be the representation of a user in a database
interface User {
  id: number;
  uid: number;
  name: string;
}

// Now this could be the type used for creating a user
type UserCreation = Omit<User, "id" | "uid">;

/**
 * Example function to create a user
 * @param user The user to create
 */
function createUser(user: UserCreation) {
  console.log(user);
}

// The keys `id` and `uid` have been removed from the user creation object,
// because `Omit<T, K>` with `"id" | "uid"` omits both keys. 
createUser({
  name: "Paul",
});

export {};
