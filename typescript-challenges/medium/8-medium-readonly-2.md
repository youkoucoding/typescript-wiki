# Readonly Two

Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

`K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

For example

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK
```

- the case when K is an empty set so that nothing need to be read-only. return T

  - ```ts
    type MyReadonly2<T, K> = T;
    ```

- use & operator and make intersection of both types: the one is the T we had before and the second one is the type with read-only properties:

  - ```ts
    type MyReadonly2<T, K> = T & { readonly [P in K]: T[P] };
    ```

  - ```ts
    type MyReadonly2<T, K extends keyof T> = T & { readonly [P in K]: T[P] };
    ```

- solution

```ts
type MyReadonly2<T, K extends keyof T = keyof T> = T &
  { readonly [P in K]: T[P] };
```
