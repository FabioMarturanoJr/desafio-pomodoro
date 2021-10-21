import React, { useContext, useEffect } from "react";
import PomodoroContext from "../context/PomodoroContext";

function Timer() {
  const { hour, minute, second, activity, setSecond, setMinute, setHour, setShowTimer } = useContext(PomodoroContext);

  useEffect(() => {
    const TIMER_SPEED = 1000;
    const interval = setInterval(() => {
      setSecond(second => second - 1)
    }, TIMER_SPEED);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const MIN_SECOND = -1;
    const MIN_MINUTE = 0;
    const MIN_HOUR = 0;
    const S9 = 59;

  switch (true) {
    case hour === MIN_HOUR && minute === MIN_MINUTE && second === MIN_SECOND:
        alert('Tempo Esgotado');
        setSecond(S9);
        setMinute(S9);
        setHour(S9);
        setShowTimer(false);
      break;
    case minute === MIN_MINUTE && second === MIN_SECOND:
      setSecond(S9);
      setMinute(S9);
      setHour(hour - 1);
      break;
    case second === MIN_SECOND:
      setSecond(S9);
      setMinute(minute => minute - 1)
      break;
  
    default:
      break;
  }

  }, [second]);

  const TEN = 10;
  const BellowTen = (number) => (number < TEN ? `0${number}` : number);

  return (
    <div>
      <h2>{activity}</h2>
      <h2 className="timer">
        { `${BellowTen(hour)}:${BellowTen(minute)}:${BellowTen(second)}` }
      </h2>
    </div>
  );
}

export default Timer;
