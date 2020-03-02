import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  REJECT_QUESTIONS,
} from './types';
import { QuestionAction, QuestionsList } from '../interfaces';
import { Dispatch } from 'redux';
import { fetchQuestions } from '../../services/opentdb';

export const getQuestions = () => (dispatch: Dispatch): void => {
  dispatch(requestQuestions());

  fetchQuestions()
    .then((questions: QuestionsList) => dispatch(receiveQuestions(questions)))
    .catch(() => dispatch(rejectQuestions()));
};

const requestQuestions = (): QuestionAction => ({ type: REQUEST_QUESTIONS });

const receiveQuestions = (questions: QuestionsList): QuestionAction => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const rejectQuestions = (): QuestionAction => ({ type: REJECT_QUESTIONS });
