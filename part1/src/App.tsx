import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Time from './Time';

interface HelloProps {
  name: string;
  age: number;
}

const Hello = ({ name, age }: HelloProps) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <h1>
        Hello {name}, you are {age} years old.
      </h1>
      <p>Probably you were born in {bornYear()}.</p>
    </div>
  );
};

const App = () => {
  const name = 'Samu';
  const age = 29;

  return (
    <div>
      <Hello name={name} age={age} />
      <Time />
    </div>
  );
};

export default App;
