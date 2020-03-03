import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  REJECT_QUESTIONS,
  REPLAY,
} from '../actions/types';
import { QuestionAction, Questions } from '../interfaces';

const initialState: Questions = {
  isFetching: false,
  list: [],
};

const questions = (state = initialState, action: QuestionAction) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return { list: [], isFetching: true };
    case RECEIVE_QUESTIONS:
      return { list: action.questions, isFetching: false };
    case REJECT_QUESTIONS:
      return initialState;
    case REPLAY:
      return initialState;
    default:
      return state;
  }
};

export default questions;
