import React from 'react';
import ReactDOM from 'react-dom/client';

// Import all episode examples to verify they compile
import Ep01App from '../ep01-your-first-component/App.jsx';
import Ep02App from '../ep02-importing-exporting/App.jsx';
import Ep03TodoList from '../ep03-writing-jsx/TodoList.jsx';
import Ep04TodoList from '../ep04-curly-braces/TodoList.jsx';
import Ep05App from '../ep05-passing-props/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Run the Docs — React Examples</h1>
    <h2>Episode 01: Your First Component</h2>
    <Ep01App />
    <h2>Episode 02: Importing and Exporting</h2>
    <Ep02App />
    <h2>Episode 03: Writing Markup with JSX</h2>
    <Ep03TodoList />
    <h2>Episode 04: Curly Braces</h2>
    <Ep04TodoList />
    <h2>Episode 05: Passing Props</h2>
    <Ep05App />
  </React.StrictMode>
);
