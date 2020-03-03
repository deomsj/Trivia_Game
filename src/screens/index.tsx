import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Quiz from './quiz';
import Results from './results';
import Settings from './settings';

const Screens = () => (
  <Router>
    <Switch>
      <Route path='/quiz' component={Quiz} />>
      <Route path='/results' component={Results} />
      <Route path='/settings' component={Settings} />
      <Route path='/' component={Home} />
    </Switch>
  </Router>
);

export default Screens;
