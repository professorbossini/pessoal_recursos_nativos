import React from 'react';
import LugaresNavigator from './navegacao/LugaresNavigator'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import lugaresReducer from './store/lugares-reducer'

//mapeamento o reducer ao identificador "lugares"
const rootReducer = combineReducers({
  lugares: lugaresReducer
});

//criando o estado centralizado
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <LugaresNavigator />
    </Provider>
  );
}
