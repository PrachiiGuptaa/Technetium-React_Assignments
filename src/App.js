import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import store from './store';

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
    <Provider store={store}>
      <TodoList />
    </Provider>
    </div>
    </div>
  );
};

export default App;

