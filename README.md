# `@do4ng/exports`

Get exports of commonjs or esmodule.

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
