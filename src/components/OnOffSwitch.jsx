import React, { useContext, useState }   from 'react';
import PomodoroContext from "../context/PomodoroContext";


function OnOffSwitch() {
  const { showTimer, setShowTimer, setPlaySound,pause, setPause } = useContext(PomodoroContext);
  
  const clickButton = () => {
    setShowTimer(!showTimer);
    pause && setPlaySound(false);
    setPause(true);
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
