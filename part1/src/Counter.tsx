import React, { useState } from 'react';
import Button from './Button';

function Counter() {
  const [time, setTime] = useState(0);
  const [avocados, setAvocados] = useState(0);
  const [cocos, setCocos] = useState(0);

  setTimeout(() => setTime(time + 1), 1000);

  const increaseAvocado = () => {
    setAvocados(avocados + 1);
  };

  const increaseCoco = () => {
    setCocos(cocos + 1);
  };
  const decreaseAvocado = () => {
    setAvocados(avocados - 1);
  };
  const decreaseCoco = () => {
    setCocos(cocos - 1);
  };
  const resetAllFruits = () => {
    setAvocados(0);
    setCocos(0);
  };

  return (
    <div>
      <p>Time since you opened the app: {time}</p>
      <p>
        Avocados:
        {Array.from({ length: avocados }, () => '🥑').map((avocado) => avocado)}
      </p>
      <p>
        Coconuts:
        {Array.from({ length: cocos }, () => '🥥').map((coco) => coco)}
      </p>
      <Button text={'➕🥑'} handleClick={increaseAvocado} />
      <Button text={'➕🥥'} handleClick={increaseCoco} />
      <Button text={'➖🥑'} handleClick={decreaseAvocado} />
      <Button text={'➖🥥'} handleClick={decreaseCoco} />
      <Button text={'❌'} handleClick={resetAllFruits} />
    </div>
  );
}

export default Counter;
