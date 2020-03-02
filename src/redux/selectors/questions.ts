import { RootState } from '../interfaces';

export const selectQuestions = (store: RootState) => store.questions.list;
export const selectCurrentQuestion = (store: RootState) => {
  const questionsCount = store.questions.list.length;
  const answersCount = store.userAnswers.isCorrectList.length;
  const isLast = answersCount + 1 === questionsCount;
  return {
    ...store.questions.list[answersCount],
    quizProgress: {
      isLast,
      answersCount,
      questionsCount,
    },
  };
};
