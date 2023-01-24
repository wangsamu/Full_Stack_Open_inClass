import React, { useState } from 'react';

function Time() {
  const [time, setTime] = useState(0);

  setInterval(() => setTime(time + 1), 1000);

  return <div>{time}</div>;
}

export default Time;
