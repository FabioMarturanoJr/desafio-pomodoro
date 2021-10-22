import React, { useContext }   from 'react';
import PomodoroContext from "../context/PomodoroContext";


function ResetButton() {
  const { resetPomodoro } = useContext(PomodoroContext);

  return (
    <button
    type="button"
    onClick={ resetPomodoro }
    >
      Resetar Pomodoro
    </button>
  );
}

export default ResetButton;
