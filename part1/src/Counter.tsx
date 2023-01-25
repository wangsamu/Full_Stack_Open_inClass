import React, { useState } from 'react';
import Button from './Button';

function Counter() {
  const [time, setTime] = useState(0);
  const [fruits, setFruits] = useState({
    avocados: 0,
    coconuts: 0,
  });

  setTimeout(() => setTime(time + 1), 1000);

  const increaseAvocado = () => {
    setFruits({ ...fruits, avocados: fruits.avocados + 1 });
  };
  const increaseCoconut = () => {
    setFruits({ ...fruits, coconuts: fruits.coconuts + 1 });
  };
  // const decreasefruit = () => {
  //   setAvocados(avocados - 1);
  // };
  const resetFruit = () => {
    setFruits({ avocados: 0, coconuts: 0 });
  };

  return (
    <div>
      <p>Time since you opened the app: {time}</p>
      <p>
        Avocados:
        {Array.from({ length: fruits.avocados }, () => '🥑').map(
          (avocado) => avocado
        )}
      </p>
      <p>
        Coconuts:
        {Array.from({ length: fruits.coconuts }, () => '🥥').map(
          (avocado) => avocado
        )}
      </p>
      <Button text={'Add an avocado'} handleClick={increaseAvocado} />
      <Button text={'Add a coconut'} handleClick={increaseCoconut} />
      {/* <Button text={'Remove an avocado'} handleClick={decreasefruit} /> */}
      <Button text={'Delete all avocados'} handleClick={resetFruit} />
    </div>
  );
}

export default Counter;
