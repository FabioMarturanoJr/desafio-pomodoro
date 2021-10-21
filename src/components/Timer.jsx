import React, { useContext, useEffect, useState } from "react";
import PomodoroContext from "../context/PomodoroContext";

const lessThanZero = (number) => ((number < 0 || number === undefined) ? 0 : number);
const TEN = 10;
const BellowTen = (number) => (number < TEN ? `0${number}` : number);


function Timer() {
  const { hour, minute, second, activityTime, setSecond, setMinute, setHour, showTimer, setShowTimer, setActivityTime, count, setCount } = useContext(PomodoroContext);

  const checkedMinute = lessThanZero(minute);
  const checkedHour = lessThanZero(hour);

  useEffect(() => {
    const TIMER_SPEED = 1000;
    const interval = setInterval(() => {
      setSecond(second => second - 1);
      setCount(count => count - 1);
    }, TIMER_SPEED);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const MIN_SECOND = -1;
    const MIN_MINUTE = 0;
    const MIN_HOUR = 0;
    const S9 = 59;
    
    if (count === 1) {
      setCount(activityTime ? 5 : 25 );
      setActivityTime(!activityTime);
    }

    switch (true) {
      case checkedHour === MIN_HOUR && checkedMinute === MIN_MINUTE && second === MIN_SECOND:
          alert('Tempo Esgotado');
          setSecond(25);
          setMinute(0);
          setHour(0);
          setCount(25);
          setActivityTime(!activityTime);
          setShowTimer(false);
        break;
      case checkedMinute === MIN_MINUTE && second === MIN_SECOND:
        setSecond(S9);
        setMinute(S9);
        setHour(checkedHour - 1);
        break;
      case second === MIN_SECOND:
        setSecond(S9);
        setMinute(minute => minute - 1)
        break;
    
      default:
        break;
    }
  }, [second]);

  return (
    <div>
      <h2>{`tempo ${activityTime ? 'atividade' : 'intervalo'}: ${count}`}</h2>
      <h2 className="timer">
        { `Tempo Total: ${BellowTen(checkedHour)}:${BellowTen(checkedMinute)}:${BellowTen(second)}` }
      </h2>
    </div>
  );
}

export default Timer;
