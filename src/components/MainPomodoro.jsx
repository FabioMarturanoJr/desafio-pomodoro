import React, { useContext }   from 'react';
import PomodoroContext from "../context/PomodoroContext";

import Timer from './Timer';
import TimePicker from './TimePicker';
import OnOffSwitch from './OnOffSwitch';
import ResetButton from './ResetButton';
import CompleteTask from "./CompleteTask";


function MainPomodoro() {
  const { showTimer, showCompleteTask, resetPomodoro} = useContext(PomodoroContext);

  return (
    <div className="mainPomodoro">
      { !showCompleteTask && 
        <div>
          <h1>Timer Pomodoro</h1>
          { showTimer && <Timer /> }
          { !showTimer && <TimePicker /> }
          <div className="buttons">
            <OnOffSwitch />
            { showTimer && <ResetButton /> }      
          </div>
        </div>
      }
      {showCompleteTask && <CompleteTask closeCompleteTask={ resetPomodoro }/>}
    </div>
  );
}

export default MainPomodoro;
