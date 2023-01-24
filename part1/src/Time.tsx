import React, { useState } from 'react';

function Time() {
  const [time, setTime] = useState(0);
  const [avocados, setAvocados] = useState(0);

  setTimeout(() => setTime(time + 1), 1000);

  const handleClick = () => {
    setAvocados(avocados + 1);
  };

  return (
    <div>
      <p>Time since you opened the app: {time}</p>
      <p>
        🥑
        {Array.from({ length: avocados }, () => '🥑').map((avocado) => avocado)}
      </p>
      <button onClick={handleClick}>add an avocado</button>
    </div>
  );
}

export default Time;
