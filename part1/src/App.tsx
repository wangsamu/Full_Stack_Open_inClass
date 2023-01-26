import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Counter from './Counter';
import Hello from './Hello';
import Timer from './Timer';

const App = () => {
  const name = 'Samu';
  const age = 29;

  return (
    <div>
      <Hello name={name} age={age} />
      <Timer />
      <Counter />
    </div>
  );
};

export default App;
