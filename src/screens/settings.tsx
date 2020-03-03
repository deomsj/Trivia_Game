import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button, CategoriesList } from '../components';
import { updateSettings } from '../redux/actions';
import { selectQuestionSettings } from '../redux/selectors';
import { DIFFICULTIES } from '../services';

const Settings = ({ history }: RouteComponentProps) => {
  const questionSettings = useSelector(selectQuestionSettings, shallowEqual);
  const [difficulty, setDifficulty] = useState(questionSettings.difficulty);
  const [category, setCategory] = useState(questionSettings.category);

  const dispatch = useDispatch();
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
    <div className='container'>
      <h2>Category</h2>
      <CategoriesList selected={category} setCategory={setCategory} />
      <h2>Difficulty</h2>
      <ul className='settings-list'>
        {DIFFICULTIES.map(d => (
          <li
            key={d}
            onClick={() => setDifficulty(d)}
            className={d === difficulty ? 'selected' : ''}>
            {d}
          </li>
        ))}
      </ul>
      <br />
      <div>
        <Button text='Cancel' callback={goHome} />
        <Button text='Save' callback={save} />
      </div>
    </div>
  );
};

export default Settings;
