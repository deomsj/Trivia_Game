import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Quiz from './quiz';
import Results from './results';

const Screens = () => (
  <Router>
    <Switch>
      <Route path='/quiz'>
        <Quiz />
      </Route>
      <Route path='/results'>
        <Results />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Screens;
