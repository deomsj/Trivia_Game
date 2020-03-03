import axios from 'axios';
import { CategoriesList } from '../redux/interfaces';

export const fetchCategories = (): Promise<CategoriesList> =>
  axios
    .get('https://opentdb.com/api_category.php')
    .then(response => [
      { id: 0, name: 'All' },
      ...response.data.trivia_categories,
    ])
    .catch(() => {
      console.log('Please check your internet connection and try again.');
      return [];
    });
