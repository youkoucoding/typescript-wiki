# Append Argument

For given function type `Fn`, and any type `A` create a generic type which will take `Fn` as the first argument, `A` as the second, and will produce function type `G` which will be the same as `Fn` but with appended argument `A` as a last one.

For example,

```typescript
type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
```

---

# Solution

We start with inferring function parameters and its return type.Conditional types will help us with that. Once types are inferred, we can return our own function signature that copies the input one, for now:

```ts
type AppendArgument<Fn, A> = Fn extends (args: infer P) => infer R
  ? (args: P) => R
  : never;
```

To fix the one single parameter `args`:

```ts
type AppendArgument<Fn, A> = Fn extends (...args: [...infer P]) => infer R
  ? (...args: [...P, A]) => R
  : never;
```

## Solution

The type that takes an input function and returns a new function with inferred types.Having that we can add the required A parameter to the parameters list now:

```ts
type AppendArgument<Fn, A> = Fn extends (...args: [...infer P]) => infer R
  ? (...args: [...P, A]) => R
  : never;
```
