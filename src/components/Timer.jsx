import React, { useContext, useState } from "react";

function Timer() {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');
  const [activity, setActivity] = useState('zerado');

  return (
    <div>
      <h2>{activity}</h2>
      <h2 className="timer">
        { `${hour}:${minute}:${second}`}
      </h2>
    </div>
  );
}

export default Timer;
