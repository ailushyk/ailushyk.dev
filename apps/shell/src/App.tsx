import * as React from 'react';
import { useState } from 'react';
import { configApp } from './config';

configApp();

export const App = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>Shell App</h1>

      <div>State: {state}</div>
      <button onClick={() => setState((prev) => prev + 1)}>click me</button>
    </div>
  );
};
