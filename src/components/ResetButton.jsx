import React, { useContext, useEffect }   from 'react';
import PomodoroContext from "../context/PomodoroContext";


function ResetButton() {
  const { showTimer, setShowTimer, setSecond, setMinute, setHour, setCount } = useContext(PomodoroContext);

  const resetAction = () => {
    setShowTimer(!showTimer);
    setSecond(25);
    setMinute(0);
    setHour(0);
    setCount(25);
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
