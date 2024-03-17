import { useState } from 'react';
import ReactLogo from './assets/images/icons/react.svg?react';
import ViteLogo from './assets/images/icons/vite.svg?react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <ViteLogo className="logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <ReactLogo className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;
