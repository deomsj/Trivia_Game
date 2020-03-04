import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  REJECT_QUESTIONS,
  REPLAY,
  NETWORK_ERROR,
} from '../actions/types';
import { QuestionAction, Questions } from '../interfaces';

const initialState: Questions = {
  isFetching: false,
  invalidSettings: false,
  list: [],
};

const questions = (state = initialState, action: QuestionAction) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return { ...initialState, isFetching: true };
    case RECEIVE_QUESTIONS:
      return { ...initialState, list: action.questions };
    case REJECT_QUESTIONS:
      return { ...initialState, invalidSettings: true };
    case NETWORK_ERROR:
      return initialState;
    case REPLAY:
      return initialState;
    default:
      return state;
  }
};

export default questions;
