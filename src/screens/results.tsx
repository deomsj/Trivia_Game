import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Button } from '../components';
import { getUserAnswers, getQuestions } from '../redux/selectors';

const Results = () => {
  const userAnswers = useSelector(getUserAnswers, shallowEqual);
  const questions = useSelector(getQuestions, shallowEqual);

  console.log(userAnswers);
  console.log(questions);

  return (
    <div className='container'>
      <h1>You scored</h1>
      <h1>3/10</h1>
      <ul id='list'>
        <li className='listItem'>
          <FaPlus /> Unturned originally started as a Roblox game.
        </li>
        <li className='listItem'>
          <FaMinus /> Japan was part of the Allied Powers during World War I.
        </li>
        <li className='listItem'>
          <FaMinus />
          This is the correct spelling of
          &quot;Supercalifragilisticexpialidocious&quot;.
        </li>
        <li className='listItem'>
          <FaPlus />
          Pluto is a planet.
        </li>
        <li className='listItem'>
          <FaMinus />
          &quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube
          Zero&quot; were directed by the same person.
        </li>
        <li className='listItem'>
          <FaMinus />
          All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six
          Siege&quot; on its initial release: House, Clubhouse, Border,
          Consulate.
        </li>
        <li className='listItem'>
          <FaMinus /> The USS Missouri (BB-63) last served in the Korean War.
        </li>
        <li className='listItem'>
          <FaPlus />
          The Klingon home planet is Qo&#039;noS.
        </li>
        <li className='listItem'>
          <FaMinus />
          In Topology, the complement of an open set is a closed set.
        </li>
        <li className='listItem'>
          <FaMinus />
          Stagecoach owned &quot;South West Trains&quot; before losing the
          rights to FirstGroup and MTR in March of 2017.
        </li>
      </ul>
      <Button url='/' text='PLAY AGAIN?' />
    </div>
  );
};

export default Results;
