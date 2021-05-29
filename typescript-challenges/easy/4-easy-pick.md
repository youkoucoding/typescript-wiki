Implement the built-in `Pick<T, K>` generic without using it.

Constructs a type by picking the set of properties `K` from `T`

For example

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
```

---

### Answer:

```ts

type pick<T, k extend keyof T> ={ [P in K]: T[P] }

```

`keyof` type operator

- The keyof operator takes an object type and produces a string or numeric literal union of its keys:

```ts
type Point = { x: number; y: number };
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // type M = string | number

// Note that in this example, M is string | number — this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"]. keyof types become especially useful when combined with mapped types
```

The `in` operator narrow down potential types
