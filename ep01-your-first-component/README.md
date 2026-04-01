# Episode 01 — Your First Component

From [Run the Docs: React](https://run-the-docs.pages.dev/) video series.

## What you'll learn

- A React component is a JavaScript function that returns JSX
- Export with `export default`, import with `import MyButton from './MyButton'`
- Components must start with a capital letter (`<MyButton />`, not `<mybutton />`)
- Components can nest inside other components
- Always define components at the top level — never inside other components

## Files

| File | Description |
|------|-------------|
| `MyButton.jsx` | A simple button component |
| `App.jsx` | Gallery component that nests three MyButton instances |

## Run it

```bash
npx create-react-app my-app
cp MyButton.jsx App.jsx my-app/src/
cd my-app && npm start
```

Or use any React starter (Vite, Next.js, etc.) and drop these files into your `src/` directory.

## Video

📺 [Watch on YouTube](https://youtube.com/@RunTheDocs) (coming soon)

## License

MIT
