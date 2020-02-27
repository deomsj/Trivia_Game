import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../components';
import { fetchQuestions } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const fetch = () => dispatch(fetchQuestions());
  return (
    <div className='container'>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h2>You will be presented with 10 True or False questions.</h2>
      <h2>Can you score 100%?</h2>
      <Button url='/quiz' text='BEGIN' dispatch={fetch} />
    </div>
  );
};

export default Home;
