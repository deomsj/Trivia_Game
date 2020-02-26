import React, { Component } from 'react';
import Screens from './screens';
import { store } from './redux';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}

export default App;
