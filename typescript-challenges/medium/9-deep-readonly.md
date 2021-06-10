# Deep readonly

Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on are no need to take into consideration. However, you can still challenge your self by covering different cases as many as possbile.

For example

```ts
type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

const todo: DeepReadonly<X>; // should be same as `Expected`
```

---

classic and implement the regular Readonly<T> type:

```ts
type DeepReadonly<T> = { readonly [P in keyof T]: T[P] };
```

> In case T[P] is an object, we are going deeper into DeepReadonly, otherwise - return T[P]:

## Solution

```ts
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknow>
    ? DeepReadonly<T[P]>
    : T[P];
};
```
