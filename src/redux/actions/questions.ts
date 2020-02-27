import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  REJECT_QUESTIONS,
} from './types';
import { QuestionAction, QuestionsList } from '../../interfaces';
import { Dispatch } from 'redux';
import { getQuestions } from '../../services/opentdb';

export const fetchQuestions = () => (dispatch: Dispatch): void => {
  dispatch(requestQuestions());

  getQuestions()
    .then((questions: QuestionsList) => dispatch(receiveQuestions(questions)))
    .catch(() => dispatch(rejectQuestions()));
};

const requestQuestions = () => ({ type: REQUEST_QUESTIONS });

const receiveQuestions = (questions: QuestionsList): QuestionAction => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const rejectQuestions = () => ({ type: REJECT_QUESTIONS });
