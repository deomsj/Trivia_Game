import { combineReducers } from 'redux';
import questions from './questions';
import userAnswers from './userAnswers';

const rootReducer = combineReducers({ questions, userAnswers });

export default rootReducer;
