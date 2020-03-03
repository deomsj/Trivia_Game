import { RootState, CurrentQuestion } from '../interfaces';
import { QUESTION_COUNT } from '../../services';

export const selectQuestions = (store: RootState) => store.questions.list;
export const selectCurrentQuestion = (store: RootState): CurrentQuestion => {
  const answersCount = store.userAnswers.isCorrectList.length;
  const onLastQuestion = answersCount + 1 === QUESTION_COUNT;
  return {
    ...store.questions.list[answersCount],
    quizProgress: {
      onLastQuestion,
      answersCount,
    },
  };
};
