import React from 'react'
import ReactHowler from 'react-howler'

import ahh from '../sounds/aah.mp3'
import uhh from '../sounds/uhh.mp3'
import applause from '../sounds/Applause.mp3'

const sonds = {
  ahh,
  applause,
  uhh,
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
