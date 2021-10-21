import React, { useContext } from "react";
import PomodoroContext from "../context/PomodoroContext";

function Timer() {
  const {hour, minute, second, activity} = useContext(PomodoroContext);

  return (
    <div>
      <h2>{activity}</h2>
      <h2 className="timer">
        { `${hour}:${minute}:${second}`}
      </h2>
    </div>
  );
}

export default Timer;
