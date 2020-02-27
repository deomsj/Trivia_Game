import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../components';
import { selectAnswer } from '../redux/actions';

const Quiz = () => {
  const dispatch = useDispatch();
  const selectTrue = () => dispatch(selectAnswer(true));
  const selectFalse = () => dispatch(selectAnswer(false));
  return (
    <div className='container'>
      <h1>Entertainment: Video Games</h1>
      <div id='box'>
        <h2 id='question'> Unturned originally started as a Roblox game.</h2>
      </div>
      <p>1 of 10</p>
      <Button url='/results' text='True' dispatch={selectTrue} />
      <Button url='/results' text='False' dispatch={selectFalse} />
    </div>
  );
};

export default Quiz;
