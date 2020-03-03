import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

interface Celebration {
  isPartyTime: boolean;
}

const Celebration = ({ isPartyTime }: Celebration) => {
  const { width, height } = useWindowSize();
  return isPartyTime ? <Confetti width={width} height={height} /> : null;
};

export default Celebration;
