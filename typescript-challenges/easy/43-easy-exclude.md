# Exclude

Implement the built-in Exclude<T, U>

> Exclude from T those types that are assignable to U

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // expected "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // expected "c"
```

---

# Solution

```ts
type MyExclude<T, U> = T extends U ? never : T;
```
