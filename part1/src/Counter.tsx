import React, { useState } from 'react';
import Button from './Button';
import History from './History';

function Counter() {
  const [avocados, setAvocados] = useState(0);
  const [cocos, setCocos] = useState(0);
  const [allFruits, setAllFruits] = useState<any>([]);

  const increaseAvocado = () => {
    setAvocados(avocados + 1);
    setAllFruits([...allFruits, '🥑']);
  };

  const increaseCoco = () => {
    setCocos(cocos + 1);
    setAllFruits([...allFruits, '🥥']);
  };
  const decreaseAvocado = () => {
    setAvocados(avocados - 1);
    // setAllFruits([...allFruits].findLastIndex((element) => element === '🥑'));
  };
  const decreaseCoco = () => {
    setCocos(cocos - 1);
  };
  const removeLastFruit = () => {
    const newAllFruits = [...allFruits];
    newAllFruits.pop();
    setAllFruits(newAllFruits);
  };

  const resetAllFruits = () => {
    setAvocados(0);
    setCocos(0);
  };

  return (
    <div>
      <History avocados={avocados} cocos={cocos} allFruits={allFruits} />
      <Button text={'➕🥑'} handleClick={increaseAvocado} />
      <Button text={'➕🥥'} handleClick={increaseCoco} />
      <Button text='remove a fruit' handleClick={removeLastFruit} />
      {/* <Button text={'➖🥑'} handleClick={decreaseAvocado} />
      <Button text={'➖🥥'} handleClick={decreaseCoco} /> */}
      <Button text={'❌'} handleClick={resetAllFruits} />
    </div>
  );
}

export default Counter;
