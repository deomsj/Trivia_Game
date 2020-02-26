import React from 'react';
import { Button } from '../components';

const Home = () => (
  <div className='container'>
    <h1>Welcome to the Trivia Challenge!</h1>
    <h2>You will be presented with 10 True or False questions.</h2>
    <h2>Can you score 100%?</h2>
    <Button url='/quiz' text='BEGIN' />
  </div>
);

export default Home;
