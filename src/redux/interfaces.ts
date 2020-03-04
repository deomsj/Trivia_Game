import { Action } from 'redux';

///////////////////////////////
// Redux Store

export interface RootState {
  userAnswers: UserAnswers;
  questions: Questions;
  settings: Settings;
}

export interface UserAnswers {
  isCorrectList: Array<boolean>;
  totalCorrect: number;
}

export interface Questions {
  isFetching: boolean;
  invalidSettings: boolean;
  list: QuestionsList;
}
export interface QuestionSettings {
  difficulty: string;
  category: number;
}

export interface Settings extends QuestionSettings {
  categoriesList: CategoriesList;
}

///////////////////////////////
// Data Models

export interface QuestionsList extends Array<Question> {}

interface QuizProgress {
  onLastQuestion: boolean;
  answersCount: number;
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
}

export interface CurrentQuestion extends Question {
  invalidSettings: boolean;
  quizProgress: QuizProgress;
}

interface TriviaCategory {
  id: number;
  name: string;
}

export interface CategoriesList extends Array<TriviaCategory> {}

///////////////////////////////
// Redux Actions

export interface QuestionAction extends Action, UpdateSettings {
  questions?: QuestionsList;
}

export interface AnswerAction extends Action {
  isCorrect: boolean;
}

export interface UpdateSettings {
  difficulty?: string;
  category?: number;
}

export interface SettingsAction extends Action, UpdateSettings {
  categoriesList?: CategoriesList;
}
