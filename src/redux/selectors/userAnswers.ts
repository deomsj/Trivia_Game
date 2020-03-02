import { RootState } from '../interfaces';

export const selectUserAnswers = (store: RootState) => store.userAnswers;
