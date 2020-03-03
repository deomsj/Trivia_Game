import React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { restart } from '../redux/actions';
import { Button, Celebration, ResultIcon } from '../components';
import { selectUserAnswers, selectQuestions } from '../redux/selectors';
import { QUESTION_COUNT } from '../services';

const Results = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const playAgain = () => {
    dispatch(restart());
    history.push('/');
  };
  const { isCorrectList, totalCorrect } = useSelector(
    selectUserAnswers,
    shallowEqual,
  );
  const questions = useSelector(selectQuestions, shallowEqual);

  const resultsList = questions.map(({ question }, index) => (
    <li className='list-item' key={question}>
      <ResultIcon isCorrect={isCorrectList[index]} />{' '}
      <span dangerouslySetInnerHTML={{ __html: question }} />
    </li>
  ));

  return (
    <div className='container'>
      <h1>You scored</h1>
      <h1>
        {totalCorrect}/{QUESTION_COUNT}
      </h1>
      <Celebration isPartyTime={totalCorrect === QUESTION_COUNT} />
      <ul id='list'>{resultsList}</ul>
      <Button text='PLAY AGAIN?' callback={playAgain} />
    </div>
  );
};

export default Results;
