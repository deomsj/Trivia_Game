import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => (
  <div class='container'>
    <h1>Entertainment: Video Games</h1>
    <div id='box'>
      <h2 id='question'> Unturned originally started as a Roblox game.</h2>
    </div>
    <p>1 of 10</p>
    <Link to='/results'>
      <button class='button'>True</button>
    </Link>
    <Link to='/results'>
      <button class='button'>False</button>
    </Link>
  </div>
);

export default Quiz;
