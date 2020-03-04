import {
  REPLAY,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  UPDATE_SETTINGS,
} from './types';
import { Action } from 'redux';
import { Dispatch } from 'redux';
import { fetchCategories } from '../../services';
import {
  UpdateSettings,
  SettingsAction,
  CategoriesList,
  RootState,
} from '../interfaces';
import { selectCategoriesList } from '../selectors';
import { networkError } from './errors';

export const restart = (): Action => ({
  type: REPLAY,
});

export const updateSettings = ({
  category,
  difficulty,
}: UpdateSettings): SettingsAction => ({
  type: UPDATE_SETTINGS,
  category,
  difficulty,
});

export const getCategories = () => (
  dispatch: Dispatch,
  getState: () => RootState,
): void => {
  if (selectCategoriesList(getState()).length) {
    return;
  } else {
    dispatch(requestCategories());

    fetchCategories()
      .then((questions: CategoriesList) =>
        dispatch(receiveCategories(questions)),
      )
      .catch(() => dispatch(networkError()));
  }
};

const requestCategories = (): SettingsAction => ({ type: REQUEST_CATEGORIES });

const receiveCategories = (categoriesList: CategoriesList): SettingsAction => ({
  type: RECEIVE_CATEGORIES,
  categoriesList,
});
