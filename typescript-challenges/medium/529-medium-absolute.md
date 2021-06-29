# Absolute

Implement the `Absolute` type. A type that take string, number or bigint. The output should be a positive number **string**

For example

```ts
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
```

---

# Solution

```ts
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer N}`
  ? N
  : `${T}`;
```

## References

- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)
- [Type inference in conditional types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types)
