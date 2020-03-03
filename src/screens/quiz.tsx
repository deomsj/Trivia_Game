import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../components';
import { selectAnswer } from '../redux/actions';
import { shallowEqual, useSelector } from 'react-redux';
import { selectCurrentQuestion } from '../redux/selectors';
import { QUESTION_COUNT } from '../services';

const Quiz = ({ history }: RouteComponentProps) => {
  const { category, question, quizProgress, correct_answer } = useSelector(
    selectCurrentQuestion,
    shallowEqual,
  );

  const dispatch = useDispatch();
  const handleClick = (answer: string) => () => {
    dispatch(selectAnswer(answer === correct_answer));
    if (quizProgress.onLastQuestion) history.push('/results');
  };
  return (
    <div className='container'>
      <h1>{category}</h1>
      <div id='box'>
        <h2 id='question' dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <p>
        {quizProgress.answersCount + 1} of {QUESTION_COUNT}
      </p>
      <div>
        <Button text='True' callback={handleClick('True')} />
        <Button text='False' callback={handleClick('False')} />
      </div>
    </div>
  );
};

export default Quiz;
