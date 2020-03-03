import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../components';
import { getQuestions } from '../redux/actions';
import { FaCog } from 'react-icons/fa';
import { QUESTION_COUNT } from '../services';

const Home = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();

  const startQuiz = () => {
    dispatch(getQuestions());
    history.push('/quiz');
  };
  return (
    <div className='container'>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h2>
        You will be presented with {QUESTION_COUNT} True or False questions.
      </h2>
      <h2>Can you score 100%?</h2>
      <Button text='BEGIN' callback={startQuiz} />
      <Link to='/settings' className='settings-icon'>
        <FaCog />
      </Link>
    </div>
  );
};

export default Home;
