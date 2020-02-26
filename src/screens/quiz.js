import React from 'react';
import { Button } from '../components';

const Quiz = () => (
  <div class='container'>
    <h1>Entertainment: Video Games</h1>
    <div id='box'>
      <h2 id='question'> Unturned originally started as a Roblox game.</h2>
    </div>
    <p>1 of 10</p>
    <Button url='/results' text='True' />
    <Button url='/results' text='False' />
  </div>
);

export default Quiz;
