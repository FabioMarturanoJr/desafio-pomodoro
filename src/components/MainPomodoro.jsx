import React, { useContext }   from 'react';
import PomodoroContext from "../context/PomodoroContext";

import Timer from './Timer';
import TimePicker from './TimePicker';
import OnOffSwitch from './OnOffSwitch';
import ResetButton from './ResetButton';


function MainPomodoro() {
  const { showTimer } = useContext(PomodoroContext);

  return (
    <div>
      { showTimer && <Timer /> }
      { !showTimer && <TimePicker /> }
      <OnOffSwitch />
      { showTimer && <ResetButton /> }
    </div>
  );
}

export default MainPomodoro;
