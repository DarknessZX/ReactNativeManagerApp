import React , { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase';
import reducers from './reducers';
import config from './config'

import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config.firebaseConfig);
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    )
  }
}

export default App;
