import React, { useContext, useEffect } from "react";
import PomodoroContext from "../context/PomodoroContext";

const lessThanZero = (number) => ((number < 0 || number === undefined) ? 0 : number);
const TEN = 10;
const BellowTen = (number) => (number < TEN ? `0${number}` : number);


function Timer() {
  const { hour, minute, second, activityTime, setSecond, setMinute, setHour, setShowTimer } = useContext(PomodoroContext);

  const checkedSecond = lessThanZero(second);
  const checkedMinute = lessThanZero(minute);
  const checkedHour = lessThanZero(hour);

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
      case checkedHour === MIN_HOUR && checkedMinute === MIN_MINUTE && checkedSecond === MIN_SECOND:
          alert('Tempo Esgotado');
          setSecond(S9);
          setMinute(S9);
          setHour(S9);
          setShowTimer(false);
        break;
      case checkedMinute === MIN_MINUTE && checkedSecond === MIN_SECOND:
        setSecond(S9);
        setMinute(S9);
        setHour(checkedHour - 1);
        break;
      case checkedSecond === MIN_SECOND:
        setSecond(S9);
        setMinute(minute => minute - 1)
        break;
    
      default:
        break;
    }
  }, [second]);

  return (
    <div>
      <h2>{activityTime ? 'atividade' : 'intervalo'}</h2>
      <h2 className="timer">
        { `${BellowTen(checkedHour)}:${BellowTen(checkedMinute)}:${BellowTen(checkedSecond)}` }
      </h2>
    </div>
  );
}

export default Timer;
