import React from 'react';
import LugaresNavigator from './navegacao/LugaresNavigator'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ReduxThunk } from 'redux-thunk';

import lugaresReducer from './store/lugares-reducer'

const rootReducer = combineReducers({
  lugares: lugaresReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <LugaresNavigator />;
    </Provider>
  );
}
