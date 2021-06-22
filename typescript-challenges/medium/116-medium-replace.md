# Replace

Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`

For example

```ts
type replaced = Replace<'types are fun!', 'fun', 'awesome'>; // expected to be 'types are awesome!'
```

# Solution

```ts
type Replace<S extends string, From extends string, To extends string> =
  From extends ''
    ? S
    : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${R}`
    : S;
```

## References

- [Conditional Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)
- [Type inference in conditional types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
