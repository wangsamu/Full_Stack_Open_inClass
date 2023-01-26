import React from 'react';

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
      <p>
        Probably you were born in {bornYear() - 1} or {bornYear()}, right?
      </p>
    </div>
  );
};

export default Hello;
