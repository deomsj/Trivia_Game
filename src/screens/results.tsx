import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { Button, ResultIcon } from '../components';
import { selectUserAnswers, selectQuestions } from '../redux/selectors';

const Results = ({ history }: RouteComponentProps) => {
  const playAgain = () => history.push('/');
  const { isCorrectList, totalCorrect } = useSelector(
    selectUserAnswers,
    shallowEqual,
  );
  const questions = useSelector(selectQuestions, shallowEqual);

  const resultsList = questions.map(({ question }, index) => (
    <li className='listItem' key={question}>
      <ResultIcon isCorrect={isCorrectList[index]} />{' '}
      <span dangerouslySetInnerHTML={{ __html: question }} />
    </li>
  ));

  return (
    <div className='container'>
      <h1>You scored</h1>
      <h1>{totalCorrect}/10</h1>
      <ul id='list'>{resultsList}</ul>
      <Button text='PLAY AGAIN?' callback={playAgain} />
    </div>
  );
};

export default Results;
