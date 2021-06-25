# Permutation

Implement permutation type that transforms union types into the array that includes permutations of unions.

```ts
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
```

---

# Solution

```ts
type Permutation<T, C = T> = [T] extends [never]
  ? []
  : C extends infer U
  ? [U, ...Permutation<Exclude<T, U>>]
  : [];
```

[Divide-and-conquer algorithm - Wikipedia](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)

[Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)

[variadic-tuple-types 可变参数](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
