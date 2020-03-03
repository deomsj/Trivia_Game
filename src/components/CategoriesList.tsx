import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { selectCategoriesList } from '../redux/selectors';
import { getCategories } from '../redux/actions';

interface Setting {
  name: string;
  id: number;
}

interface CategoriesList {
  selected: number;
  setCategory: (clickedCategoryId: number) => void;
}

const CategoriesList = ({ selected, setCategory }: CategoriesList) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  });
  const categories = useSelector(selectCategoriesList, shallowEqual);

  return (
    <ul className='settings-list'>
      {categories.map(({ name, id }: Setting) => (
        <li
          key={id}
          onClick={() => setCategory(id)}
          className={id === selected ? 'selected' : ''}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
