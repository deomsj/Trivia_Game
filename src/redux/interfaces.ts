import { Action } from 'redux';

///////////////////////////////
// Redux Store

export interface RootState {
  userAnswers: UserAnswers;
  questions: Questions;
}

export interface UserAnswers {
  isCorrectList: Array<boolean>;
  totalCorrect: number;
}

export interface Questions {
  isFetching: boolean;
  list: QuestionsList;
}

///////////////////////////////
// Data Models

export interface QuestionsList extends Array<Question> {}

interface QuizProgress {
  isLast: boolean;
  answersCount: number;
  questionsCount: number;
}

enum TrueOrFalseString {
  true = 'True',
  false = 'False',
}

export interface Question {
  category: string;
  type: boolean;
  difficulty: string;
  question: string;
  correct_answer: TrueOrFalseString;
  incorrect_answers: Array<TrueOrFalseString>;
  quizProgress?: QuizProgress;
}

///////////////////////////////
// Redux Actions

export interface QuestionAction extends Action {
  questions?: QuestionsList;
}

export interface AnswerAction extends Action {
  isCorrect: boolean;
}
