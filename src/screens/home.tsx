import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../components';
import { getQuestions } from '../redux/actions';

const Home = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  });

  const startQuiz = () => history.push('/quiz');
  return (
    <div className='container'>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h2>You will be presented with 10 True or False questions.</h2>
      <h2>Can you score 100%?</h2>
      <Button text='BEGIN' callback={startQuiz} />
    </div>
  );
};

export default Home;
