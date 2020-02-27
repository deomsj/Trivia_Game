import { SELECT_ANSWER, REQUEST_QUESTIONS } from '../actions/types';
import { UserAnswers, AnswerAction } from '../../interfaces';

const initialState: UserAnswers = [];

const answers = (state = initialState, action: AnswerAction) => {
  switch (action.type) {
    case SELECT_ANSWER:
      return [...state, action.isCorrect];
    case REQUEST_QUESTIONS:
      return [];
    default:
      return state;
  }
};

export default answers;
