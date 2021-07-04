# Diff

Get an `Object` that is the difference between `O` & `O1`

For example:

```ts
type Foo = {
  name: string;
  age: string;
};

type Bar = {
  name: string;
  age: string;
  gender: number;
};

type test0 = Diff<Foo, Bar>; // expected { gender: number }
```

---

# Solution

```ts
type Diff<O, O1> = {
  [P in keyof O | keyof O1 as Exclude<P, keyof O & keyof O1>]: P extends keyof O
    ? O[P]
    : P extends keyof O1
    ? O1[P]
    : never;
};
```

## References

- [Mapped Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)
- [Key remapping in Mapped Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types)
- [Union Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types)
- [Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types)
- [Index Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)
- [keyof and Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
