# Trim

Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.

For example

```ts
type trimed = Trim<'  Hello World  '>; // expected to be 'Hello World'
```

---

# Solution

```ts
type Whitespace = ' ' | '\n' | '\t';
type Trim<S> = S extends `${Whitespace}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${Whitespace}`
  ? Trim<L>
  : S;
```
