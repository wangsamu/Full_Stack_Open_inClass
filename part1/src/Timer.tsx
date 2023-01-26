import React, { useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  setTimeout(() => setTime(time + 1), 1000);

  return (
    <div>
      <p>Time since you opened the app: {time}</p>
    </div>
  );
}

export default Timer;
