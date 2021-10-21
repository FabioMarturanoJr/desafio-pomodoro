import React, { useContext }   from 'react';
import PomodoroContext from "../context/PomodoroContext";


function OnOffSwitch() {
  const { showTimer, setShowTimer } = useContext(PomodoroContext);  
  
  const clickButton = () => {
    setShowTimer(!showTimer)
  };

  return (
    <button
    type="button"
    onClick={ clickButton }
    >
      { showTimer ? 'Pausar Pomodoro' : 'Iniciar Pomodoro' }
    </button>
  );
}

export default OnOffSwitch;
