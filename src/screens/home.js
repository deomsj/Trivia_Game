import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div class='container'>
    <h1>Welcome to the Trivia Challenge!</h1>
    <h2>You will be presented with 10 True or False questions.</h2>
    <h2>Can you score 100%?</h2>
    <Link to='/quiz'>
      <button class='button'>BEGIN</button>
    </Link>
  </div>
);

export default Home;
