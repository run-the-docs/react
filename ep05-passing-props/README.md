# Episode 05 — Passing Props to a Component

## What you'll learn

- Two steps: parent passes props, child destructures them
- Default values: `{ size = 100 }`
- Spread syntax: `<Avatar {...props} />`
- The `children` prop: nesting JSX = slot pattern
- Props are read-only — never mutate them

## Files

| File | Description |
|------|-------------|
| `Avatar.jsx` | Receives `person` and `size` props with default |
| `Card.jsx` | Wrapper component using the `children` prop |
| `App.jsx` | Parent passing props and nesting Avatar inside Card |
| `utils.js` | Helper to build image URL from person object |

## License

MIT
