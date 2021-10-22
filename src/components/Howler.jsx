import React from 'react'
import ReactHowler from 'react-howler'

import ahh from '../sounds/aah-01.mp3'
import applause from '../sounds/Applause.mp3'

const sonds = {
  ahh,
  applause
};

function Howler({ src }) {
  return (
    <ReactHowler
      src={ sonds[src] }
      playing={true}
    />
  );
}

export default Howler;
