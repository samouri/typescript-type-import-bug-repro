# typescript-type-import-bug-repro

I recently found a bug with `import type`.

Normally, TS will figure out if the imported object is incorrectly being used as a value. For example:

```typescript
import type { A } from './a';

// Error: 'A' cannot be used as a value because it was imported using 'import type'
const object = { A: A };
```

When shorthand form of this statement is used, the error incorrectly passes typechecking.

```typescript
import type { A } from './a';

const object = { A };
```
