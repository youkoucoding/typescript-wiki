# Append to Object

Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field

For example

```ts
type Test = { id: '1' };
type Result = AppendToObject<Test, 'value', 4>; // expected to be { id: '1', value: 4 }
```

---

# Solution

```ts
type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V;
};
```

## References

- [Mapped Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)
- [Union Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types)
