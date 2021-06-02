# First of Array

Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.

For example

```ts
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

---

### Answer

```ts
type First<T extends any[]> = T extends never[] ? never : T[0];
// or
type First<T extends any[]> = T extends [] ? never : T[0];
// or
type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
```
