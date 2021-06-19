# Capitalize

Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.

For example

```ts
type capitalized = Capitalize<'hello world'>; // expected to be 'Hello world'
```

---

# Solution

```ts
interface CapitalizedChars {
  f: 'F';
}
type Capitalize<S> = S extends `${infer C}${infer T}`
  ? `${C extends keyof CapitalizedChars ? CapitalizedChars[C] : C}${T}`
  : S;
```
