# `@do4ng/exports`

Get exports of commonjs or esmodule.

> Warning: This package uses `require` (in commonjs) or `import` (in esm) to load the module and then extract its exports. That is, `module.exports` or `export {}` is imported by directly executing the javascript code rather than parsing it.

## Examples

```js
// asset.js
function a() {}

function b() {}

function c() {}

module.exports = function () {};

module.exports.a = a;
module.exports.b = b;
module.exports.c = c;
```

```js
await getExports('./asset.js');
// ["a", "b", "c"]
```
