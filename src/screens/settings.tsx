import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getCategories, updateSettings } from '../redux/actions';
import {
  selectCategoriesList,
  selectQuestionSettings,
} from '../redux/selectors';
import { DIFFICULTIES } from '../services';
import { Button, Loader } from '../components';

const Settings = ({ history }: RouteComponentProps) => {
  const questionSettings = useSelector(selectQuestionSettings, shallowEqual);
  const [difficulty, setDifficulty] = useState(questionSettings.difficulty);
  const [category, setCategory] = useState(questionSettings.category);

  const dispatch = useDispatch();
  const loadCategories = () => dispatch(getCategories());
  useEffect(() => {
    loadCategories();
  });
  const categories = useSelector(selectCategoriesList, shallowEqual);

  const save = () => {
    dispatch(
      updateSettings({
        category,
        difficulty,
      }),
    );
    goHome();
  };
  const goHome = () => history.push('/');

  return (
    <Loader displayLoader={!categories.length} retry={loadCategories}>
      <div className='container'>
        <h2>Category</h2>
        <ul className='settings-list'>
          {categories.map(({ name, id }) => (
            <li
              key={id}
              onClick={() => setCategory(id)}
              className={id === category ? 'selected' : ''}>
              <button>{name}</button>
            </li>
          ))}
        </ul>
        <h2>Difficulty</h2>
        <ul className='settings-list'>
          {DIFFICULTIES.map(d => (
            <li
              key={d}
              onClick={() => setDifficulty(d)}
              className={d === difficulty ? 'selected' : ''}>
              <button>{d}</button>
            </li>
          ))}
        </ul>
        <br />
        <div>
          <Button text='Cancel' callback={goHome} />
          <Button text='Save' callback={save} />
        </div>
      </div>
    </Loader>
  );
};

export default Settings;
