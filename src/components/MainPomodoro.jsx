import React, { useContext, useEffect }   from 'react';
import PomodoroContext from "../context/PomodoroContext";

import Timer from './Timer';


function MainPomodoro() {
  const { showTimer } = useContext(PomodoroContext);

  return (
    <div>
      { showTimer && <Timer /> }
    </div>
  );
}

export default MainPomodoro;
