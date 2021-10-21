import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PomodoroContext from './PomodoroContext';

function PomodoroProvider({ children }) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(25);
  const [activityTime, setActivityTime] = useState(true);

  const [showTimer, setShowTimer] = useState(false);

  const [count, setCount] = useState(25);

  return(
    <PomodoroContext.Provider
      value={ {
        hour,
        minute,
        second,
        activityTime,
        setActivityTime,
        setSecond,
        setMinute,
        setHour,
        showTimer,
        setShowTimer,
        count,
        setCount,
      } }
    >
      { children }
    </PomodoroContext.Provider>
  );
}

PomodoroProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PomodoroProvider;