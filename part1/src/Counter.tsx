import React, { useState } from 'react';
import Button from './Button';

function Counter() {
  const [time, setTime] = useState(0);
  const [avocados, setAvocados] = useState(0);

  setTimeout(() => setTime(time + 1), 1000);

  const increaseAvocado = () => {
    setAvocados(avocados + 1);
  };
  const decreaseAvocado = () => {
    setAvocados(avocados - 1);
  };
  const resetAvocados = () => {
    setAvocados(0);
  };

  return (
    <div>
      <p>Time since you opened the app: {time}</p>
      <p>
        Avocados:
        {Array.from({ length: avocados }, () => '🥑').map((avocado) => avocado)}
      </p>
      <Button text={'Add an avocado'} handleClick={increaseAvocado} />
      <Button text={'Remove an avocado'} handleClick={decreaseAvocado} />
      <Button text={'Delete all avocados'} handleClick={resetAvocados} />
    </div>
  );
}

export default Counter;
