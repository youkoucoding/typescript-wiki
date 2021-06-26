# Length of String

Compute the length of a string literal, which behaves like `String#length`.

For Example:

```ts
type length = LengthOfString<'Hello, World'>; // expected to be 12
```

---

# Solution

```ts
type LengthOfString<
  S extends string,
  A extends string[] = []
> = S extends `${infer C}${infer T}`
  ? LengthOfString<T, [C, ...A]>
  : A['length'];
```

## References

- [Conditional Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)
- [Type inference in conditional types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Index Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types)
