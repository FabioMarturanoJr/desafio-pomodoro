import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PomodoroContext from './PomodoroContext';

function PomodoroProvider({ children }) {
const timeInitial = 1;

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(2);
  const [activity, setActivity] = useState('zerado');

  const [showTimer, setShowTimer] = useState(true);

  return(
    <PomodoroContext.Provider
      value={ {
        hour,
        minute,
        second,
        activity,
        setSecond,
        setMinute,
        setHour,
        showTimer,
        setShowTimer
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