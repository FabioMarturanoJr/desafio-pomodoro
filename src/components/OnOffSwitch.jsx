import React, { useContext, useEffect }   from 'react';
import PomodoroContext from "../context/PomodoroContext";


function OnOffSwitch() {
  const { showTimer, setShowTimer } = useContext(PomodoroContext);

  return (
    <button
    type="button"
    onClick={ () => setShowTimer(!showTimer) }
    >
      { showTimer ? 'Pausar Pomodoro' : 'Iniciar Pomodoro' }
    </button>
  );
}

export default OnOffSwitch;
