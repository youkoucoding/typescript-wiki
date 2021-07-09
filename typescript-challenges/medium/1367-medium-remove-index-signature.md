# Remove Index Signature

Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

For example:

```ts
type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
```

---

# Solution

```ts
type RemoveIndexSignature<T> = {
  [P in keyof T as string extends P
    ? never
    : P extends number
    ? never
    : P]: T[P];
};
```
