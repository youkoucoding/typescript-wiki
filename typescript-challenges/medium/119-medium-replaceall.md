# Replace All

Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`

For example

```ts
type replaced = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'
```

---

# Solution

```ts
// single match

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;
```

```ts
// Providing our new string as a type parameter to the type itself (recursively):

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? ReplaceAll<`${L}${To}${R}`, From, To>
  : S;
```
