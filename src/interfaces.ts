import { Action } from 'redux';

///////////////////////////////
// UI Components

export interface Button {
  url: string;
  text: string;
  dispatch?: () => void;
}

///////////////////////////////
// Data Models

export interface Question {
  category: string;
  type: boolean;
  difficulty: string;
  question: string;
  correct_answer: boolean;
  incorrect_answers: Array<boolean>;
}

export interface QuestionsList extends Array<Question> {}

///////////////////////////////
// Redux Store

export interface RootState {
  userAnswers: UserAnswers;
  questions: Questions;
}

export interface UserAnswers extends Array<boolean> {}

export interface Questions {
  isFetching: boolean;
  list: Array<QuestionsList>;
}

///////////////////////////////
// Redux Actions

export interface QuestionAction extends Action {
  questions?: QuestionsList;
}

export interface AnswerAction extends Action {
  isCorrect: boolean;
}
