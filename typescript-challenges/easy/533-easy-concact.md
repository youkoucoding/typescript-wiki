# Concat

Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

For example

```ts
type Result = Concat<[1], [2]>; // expected to be [1, 2]
```

---

the implementation of concatenating two arrays in JavaScript:

```js
function concat(arr1, arr2) {
  return [...arr1, ...arr2];
}
```

---

# Solution

```ts
type Concat<T, U> = [...T, ...U]; // the error “A rest element type must be an array type.”,
```

```ts
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
```
