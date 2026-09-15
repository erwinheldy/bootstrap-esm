# bootstrap-esm

ES Module version of Bootstrap v5 with tree shaking support for optimized code.

**Notes: This package is intended for use by bundlers.**

**Bootstrap version used: v5.3.8**

## Why ?

- Because `import { Button } from 'bootstrap'` does not perform tree shaking. See https://github.com/twbs/bootstrap/issues/37575
- Because you don't want to install `@types/bootstrap` separately. `bootstrap-esm` includes types.

## Usage / Example

```bash
npm install bootstrap-esm
```

```typescript
import { Tooltip } from "bootstrap-esm";

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((element) => {
  new Tooltip(element);
});
```
