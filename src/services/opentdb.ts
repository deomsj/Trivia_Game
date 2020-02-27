import axios from 'axios';
import { QuestionsList } from '../interfaces';

export const getQuestions = (): Promise<QuestionsList> =>
  axios
    .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then(response => {
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(() => {
      console.log('Please check your internet connection and try again.');
      return [];
    });
