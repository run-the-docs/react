# Episode 02 — Importing and Exporting Components

From [Run the Docs: React](https://run-the-docs.pages.dev/) video series.

## What you'll learn

- What a root component file is (App.js)
- How to move components to their own files
- Default exports vs named exports
- How to mix both in one file
- The three steps: create file, export, import

## Key syntax

| Type | Export | Import |
|------|--------|--------|
| Default | `export default function Gallery() {}` | `import Gallery from './Gallery.js'` |
| Named | `export function Profile() {}` | `import { Profile } from './Gallery.js'` |

**Default imports** can be renamed: `import Banana from './Gallery.js'` works.
**Named imports** must match: `import { Profile }` — not `import { Banana }`.

## Files

| File | Description |
|------|-------------|
| `Gallery.js` | Contains both a default export (Gallery) and named export (Profile) |
| `App.jsx` | Imports both using the correct syntax |

## Run it

```bash
npx create-react-app my-app
cp Gallery.js App.jsx my-app/src/
cd my-app && npm start
```

## Video

📺 [Watch on YouTube](https://youtube.com/@RunTheDocs) (coming soon)

## License

MIT
