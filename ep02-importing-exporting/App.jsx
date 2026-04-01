// Default import (no braces)
import Gallery from './Gallery.jsx';
// Named import (braces required, name must match)
import { Profile } from './Gallery.jsx';

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <Profile />
      <Gallery />
    </div>
  );
}
