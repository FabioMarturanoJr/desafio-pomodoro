/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import PomodoroContext from "../context/PomodoroContext";
import ProgressBar from './ProgressBar';
import Howler from "./Howler";
import atividade from '../assets/atividade.gif'
import intervalo from '../assets/intervalo.gif'


const lessThanZero = (number) => ((number < 0 || number === undefined) ? 0 : number);
const TEN = 10;
const BellowTen = (number) => (number < TEN ? `0${number}` : number);


function Timer() {
  const { setShowCompleteTask, hour, minute, second, activityTime, setSecond, setMinute, setHour, 
    setActivityTime, count, setCount, setInitialTime, setInProgressTime, initialTime, inProgressTime, 
    playSound, setPlaySound } = useContext(PomodoroContext);

  const checkedMinute = lessThanZero(minute);
  const checkedHour = lessThanZero(hour);

  const totalTimeInSeconds = (checkedHour * 60 * 60) + (checkedMinute * 60) + second;

  useEffect(() => {
    setInitialTime(totalTimeInSeconds);
    setInProgressTime(totalTimeInSeconds);

    const TIMER_SPEED = 1000;
    const interval = setInterval(() => {
      setSecond(second => second - 1);
      setCount(count => count - 1);
      setInProgressTime(inProgressTime => inProgressTime - 1);
    }, TIMER_SPEED);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const MIN_SECOND = -1;
    const MIN_MINUTE = 0;
    const MIN_HOUR = 0;
    const S9 = 59;
    
    if (count === 1 && (inProgressTime !==1)) {
      setCount(activityTime ? 5 : 25 );
      setActivityTime(!activityTime);
      setPlaySound(true);
    }

    if (count === 2 || count === 24) setPlaySound(false);

    switch (true) {
      case checkedHour === MIN_HOUR && checkedMinute === MIN_MINUTE && second === MIN_SECOND:
        setShowCompleteTask(true);
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
      <div>
      { playSound && <Howler src={ activityTime ? 'uhh' : 'applause' } />}
      <img src={ activityTime ? atividade : intervalo } alt="" style={ { border: `solid 20px ${ activityTime ?'#d12c2c' : '#39aa1d'}` } }/>
      <h2>{`${activityTime ? 'Atividade' : 'Intervalo'}: ${count}`}</h2>
      <h2 className="timer">
        { `Total: ${BellowTen(checkedHour)}:${BellowTen(checkedMinute)}:${BellowTen(second)}` }
      </h2>
      <ProgressBar done={100 * inProgressTime / initialTime} color='#d12c2c'/>
    </div>
    </div>
  );
}

export default Timer;
