import axios from 'axios';
import { sanitize } from 'dompurify';
import { QuestionsList, Question } from '../redux/interfaces';

export const fetchQuestions = (): Promise<QuestionsList> =>
  axios
    .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
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
