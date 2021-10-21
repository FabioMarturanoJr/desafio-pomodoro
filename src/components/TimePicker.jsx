import React, { useContext, useEffect }   from 'react';
import PomodoroContext from "../context/PomodoroContext";

function TimePicker() {
  const { setSecond, setMinute, setHour, second, minute, hour } = useContext(PomodoroContext);

  return (
    <div className="Selector">
      <input name="hour" type="number" placeholder="hora" value={hour} max="59" onChange={ ({ target: { value } }) => setHour(Number(value)) } />
      <input name="minute" type="number" placeholder="minuto" value={minute} max="59" onChange={ ({  target: { value }  }) => setMinute(Number(value)) } />
      <input name="seconds" type="number" placeholder="segundo" value={second} max="59" onChange={ ({ target: { value } }) => setSecond(Number(value)) } />
    </div>
  );
}

export default TimePicker;