import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  REJECT_QUESTIONS,
} from './types';
import { QuestionAction, QuestionsList, RootState } from '../interfaces';
import { Dispatch } from 'redux';
import { fetchQuestions } from '../../services';
import { selectQuestionSettings } from '../selectors';
import { networkError } from './errors';

export const getQuestions = () => (
  dispatch: Dispatch,
  getState: () => RootState,
): void => {
  dispatch(requestQuestions());
  const questionSettings = selectQuestionSettings(getState());
  fetchQuestions(questionSettings)
    .then((questions: QuestionsList) => dispatch(receiveQuestions(questions)))
    .catch((error: Error) => {
      if (error.message === 'invalid_response') {
        dispatch(rejectQuestions());
      } else {
        dispatch(networkError());
      }
    });
};

const requestQuestions = (): QuestionAction => ({
  type: REQUEST_QUESTIONS,
});

const receiveQuestions = (questions: QuestionsList): QuestionAction => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const rejectQuestions = (): QuestionAction => ({ type: REJECT_QUESTIONS });
