import { SELECT_ANSWER, REQUEST_QUESTIONS } from '../actions/types';
import { UserAnswers, AnswerAction } from '../interfaces';

const initialState: UserAnswers = { isCorrectList: [], totalCorrect: 0 };

const answers = (state = initialState, action: AnswerAction) => {
  switch (action.type) {
    case SELECT_ANSWER:
      const { isCorrectList, totalCorrect } = state;
      const { isCorrect } = action;
      return {
        isCorrectList: [...isCorrectList, isCorrect],
        totalCorrect: totalCorrect + (isCorrect ? 1 : 0),
      };
    case REQUEST_QUESTIONS:
      return initialState;
    default:
      return state;
  }
};

export default answers;
