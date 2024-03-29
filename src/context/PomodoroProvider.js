import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PomodoroContext from './PomodoroContext';

function PomodoroProvider({ children }) {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState(25);
  const [activityTime, setActivityTime] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [count, setCount] = useState(25);
  const [initialTime, setInitialTime] = useState(0);
  const [inProgressTime, setInProgressTime] = useState(0);
  const [playSound, setPlaySound] = useState(true);
  const [pause, setPause] = useState(false);
  const [showCompleteTask, setShowCompleteTask] = useState(false);

  const resetPomodoro = () => {
    setSecond(25);
    setMinute();
    setHour();
    setCount(25);
    setActivityTime(true);
    setShowTimer(false);
    setPlaySound(true);
    setPause(false);
    setShowCompleteTask(false);
  };

  return(
    <PomodoroContext.Provider
      value={ {
        hour,
        minute,
        second,
        activityTime,
        setActivityTime,
        setSecond,
        setMinute,
        setHour,
        showTimer,
        setShowTimer,
        count,
        setCount,
        initialTime,
        setInitialTime,
        inProgressTime,
        setInProgressTime,
        playSound,
        setPlaySound,
        pause,
        setPause,
        showCompleteTask,
        setShowCompleteTask,
        resetPomodoro,
      } }
    >
      { children }
    </PomodoroContext.Provider>
  );
}

PomodoroProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PomodoroProvider;