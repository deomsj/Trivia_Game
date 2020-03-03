import { combineReducers } from 'redux';
import questions from './questions';
import userAnswers from './userAnswers';
import settings from './settings';

const rootReducer = combineReducers({ questions, userAnswers, settings });

export default rootReducer;
