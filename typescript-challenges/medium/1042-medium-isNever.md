# IsNever

Implement a type IsNever, which takes input type `T`.
If the type of resolves to `never`, return `true`, otherwise `false`.

For example:

```ts
type A = IsNever<never>; // expected to be true
type B = IsNever<undefined>; // expected to be false
type C = IsNever<null>; // expected to be false
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false
```

---

# Solution

```ts
type IsNever<T> = T extends never ? true : false;
```

Type never represents the type of values that never occur. The never type is a subtype of any other type in TypeScript and thus you can assign never type to any type. However, no type is a subtype of never, meaning you can assign nothing to never, except never itself.

```ts
type IsNever<T> = T[] extends never[] ? true : false;
```

## References

- [never type](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
