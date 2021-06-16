# Trim Left

Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.

For example

```ts
type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
```

---

# Solution

> [Template literal types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)

write a conditional type so we can use type inferring and combine it with a template literal type:

```ts
type TrimLeft<S> = S extends ` ${infer T}` ? TrimLeft<T> : S;
```

> solution

```ts
type TrimLeft<S> = S extends `${' ' | '\n' | '\t'}${infer T}` ? TrimLeft<T> : S;
```
