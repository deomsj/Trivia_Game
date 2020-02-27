import { RootState } from '../../interfaces';

export const getQuestions = (store: RootState) => store.questions.list;
