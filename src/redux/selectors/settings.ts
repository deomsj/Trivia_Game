import { RootState, QuestionSettings } from '../interfaces';

export const selectCategoriesList = (store: RootState) =>
  store.settings.categoriesList;

export const selectQuestionSettings = (store: RootState): QuestionSettings => {
  const { category, difficulty } = store.settings;
  return { category, difficulty };
};
