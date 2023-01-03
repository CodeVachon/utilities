# @codevachon/utilities

A Library Used for managing utilities in Javascript.

-   [TypeDoc](https://codevachon.github.io/utilities/)
-   [GitHub](https://github.com/CodeVachon/utilities)
-   [npm](https://www.npmjs.com/package/@codevachon/utilities)

## Install

```sh
pnpm add @codevachon/utilities
```

```sh
yarn add @codevachon/utilities
```

```sh
npm install @codevachon/utilities
```

## Usage

### asBool

returns the provided values as a boolean value

```ts
import { asBool } from "@codevachon/utilities";

if (asBool(process.env.use_thing)) {
    console.log("I can use the thing");
}
```

### isNil

returns the provided values is a `undefined` or `null` value

```ts
import { isNil } from "@codevachon/utilities";

if (isNil(process.env.use_thing)) {
    console.log("value is underfined or null");
}
```

### isServerSide

check if the code is running on server side.

```ts
import { isServerSide } from "@codevachon/utilities";

if (isServerSide()) {
    console.log("run this server side code");
}
```

returns the value of `typeof window === "undefined" && typeof document === "undefined"`

### slugify

turn a string into a url safe slug

```ts
import { slugify } from "@codevachon/utilities";

const mySlug = slugify("Hello World!"); // => `hello-world`
```

### doesKeyExists

Returns if a `Key` exists on an Object

```ts
import { doesKeyExists } from "@codevachon/utilities";

if (doesKeyExists({ foo: "bar" }, "foo")) {
    console.log("key exists on object");
}
```

### sortObjectArrayByKey

Returns an Array of Objects sorted by Key

```ts
import { sortObjectArrayByKey } from "@codevachon/utilities";

const sortedArray = sortObjectArrayByKey([{ a: 5 }, { a: 10 }, { a: 1 }], "a");
// sortedArray = [{a: 1},{a: 5},{a: 10}]
```

### capitalize

Returns the string in capitalize case

```ts
import { capitalize } from "@codevachon/utilities";

const str = capitalize("banana tree");
// str = "Banana tree"
```

### camelCase

Returns the string in camelCase case

```ts
import { camelCase } from "@codevachon/utilities";

const str = camelCase("banana tree");
// str = "bananaTree"
```

### pascalCase

Returns the string in pascalCase case

```ts
import { pascalCase } from "@codevachon/utilities";

const str = pascalCase("banana tree");
// str = "BananaTree"
```

### uppercase

Returns the string in upper case

```ts
import { uppercase } from "@codevachon/utilities";

const str = uppercase("banana tree");
// str = "BANANA TREE"
```

### lowercase

Returns the string in lowercase case

```ts
import { lowercase } from "@codevachon/utilities";

const str = lowercase("banana tree");
// str = "banana tree"
```

### startsWith

Returns the string if starts with a value

```ts
import { startsWith } from "@codevachon/utilities";

if (startsWith("banana tree", "ban")) {
    console.log("string starts with ban");
}
```

### endsWith

Returns the string if ends with a value

```ts
import { endsWith } from "@codevachon/utilities";

if (endsWith("banana tree", "ban")) {
    console.log("string ends with ban");
}
```

### contains

Returns the string if contains a value

```ts
import { contains } from "@codevachon/utilities";

if (contains("banana tree", "ban")) {
    console.log("string contains with ban");
}
```

### invariant

throws an error if the condition is not truthy

```ts
import { invariant } from "@codevachon/utilities";

(request: Request, response: Response, next: NextFunction) => {
    invariant(request?.headers?.token, "Expected token to be found on headers");
    // an error is thrown if request.headers.token is not defined
};
```
