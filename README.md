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
