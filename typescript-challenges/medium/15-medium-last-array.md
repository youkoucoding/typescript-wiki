# Last of Array

Implement a generic `Last<T>` that takes an Array `T` and returns it's last element's type.

For example

```ts
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
```

---

# Solution

> [variadic-tuple-types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)

> [inferring-within-conditional-types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)

```ts
type Last<T extends any[]> = T extends [...infer X, infer L] ? L : never;
```
