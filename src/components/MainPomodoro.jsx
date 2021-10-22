import React, { useContext }   from 'react';
import PomodoroContext from "../context/PomodoroContext";

import Timer from './Timer';
import TimePicker from './TimePicker';
import OnOffSwitch from './OnOffSwitch';
import ResetButton from './ResetButton';


function MainPomodoro() {
  const { showTimer } = useContext(PomodoroContext);

  return (
    <div className="mainPomodoro">
      <h1>Timer Pomodoro</h1>
      { showTimer && <Timer /> }
      { !showTimer && <TimePicker /> }
      <div className="buttons">
      <OnOffSwitch />
      { showTimer && <ResetButton /> }      
      </div>
      {/* <Player url={'../sounds/aah-01.mp3'}/> */}
    </div>
  );
}

export default MainPomodoro;
