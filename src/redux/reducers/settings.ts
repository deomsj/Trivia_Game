import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REJECT_CATEGORIES,
  UPDATE_SETTINGS,
} from '../actions/types';
import { Settings, SettingsAction } from '../interfaces';

const initialState: Settings = {
  categoriesList: [],
  category: 0,
  difficulty: 'hard',
};

const settings = (state = initialState, action: SettingsAction) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        fetching: true,
      };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        fetching: false,
        categoriesList: action.categoriesList,
      };
    case REJECT_CATEGORIES:
      return initialState;
    case UPDATE_SETTINGS:
      return {
        ...state,
        category: action.category,
        difficulty: action.difficulty,
      };
    default:
      return state;
  }
};

export default settings;
