import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PomodoroContext from './PomodoroContext';

function PomodoroProvider({ children }) {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');
  const [activity, setActivity] = useState('zerado');

  return(
    <PomodoroContext.Provider
      value={ {
        hour,
        minute,
        second,
        activity
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