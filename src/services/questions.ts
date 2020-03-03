import axios from 'axios';
import { sanitize } from 'dompurify';
import { QuestionsList, Question, QuestionSettings } from '../redux/interfaces';

export const DIFFICULTIES = ['easy', 'medium', 'hard'];
export const QUESTION_COUNT = 10;
const BASE_URL = 'https://opentdb.com/api.php';

export const fetchQuestions = ({
  difficulty,
  category,
}: QuestionSettings): Promise<QuestionsList> => {
  let url = `${BASE_URL}?amount=${QUESTION_COUNT}`;
  url += `&type=boolean`;
  url += `&difficulty=${difficulty}`;
  if (category > 0) {
    url += `&category=${category}`;
  }
  return axios
    .get(url)
    .then(response => {
      return response.data.results.map((q: Question) => ({
        ...q,
        question: sanitize(q.question),
      }));
    })
    .catch(() => {
      console.log('Please check your internet connection and try again.');
      return [];
    });
};
