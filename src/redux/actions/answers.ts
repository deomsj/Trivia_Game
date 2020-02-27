import { SELECT_ANSWER } from './types';
import { AnswerAction } from '../../interfaces';

export const selectAnswer = (isCorrect: boolean): AnswerAction => ({
  type: SELECT_ANSWER,
  isCorrect,
});
