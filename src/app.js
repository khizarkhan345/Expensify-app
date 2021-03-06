
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import './firebase/firebase';
//import './playground/promise';
const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
//   });

  const jsx = (
      <Provider store={store}>
        <AppRouter />
      </Provider>
  );
  ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
  
  store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
  }).catch((e) => {
    console.log('Failed', e);
  });

