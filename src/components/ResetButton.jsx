import React, { useContext }   from 'react';
import PomodoroContext from "../context/PomodoroContext";


function ResetButton() {
  const { showTimer, setShowTimer, setSecond, setMinute, setHour, setCount, setPlaySound, setPause, setActivityTime } = useContext(PomodoroContext);

  const resetAction = () => {
    setShowTimer(!showTimer);
    setSecond(25);
    setMinute(0);
    setHour(0);
    setCount(25);
    setPause(false);
    setPlaySound(true);
    setActivityTime(true);
  };

  return (
    <button
    type="button"
    onClick={ resetAction }
    >
      Resetar Pomodoro
    </button>
  );
}

export default ResetButton;
