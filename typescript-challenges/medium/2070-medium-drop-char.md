# Drop Char

Drop a specified char from a string.

For example:

```ts
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '>; // 'butterfly!'
```

---

# Solution

```ts
type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
  ? DropChar<`${L}${R}`, C>
  : S;
```
