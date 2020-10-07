import React from 'react';
import HomePage from './containers/HomePage';
import './App.css';
import { Route } from 'react-router-dom';
import ProductPage from './containers/ProductPage/index';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/:slug' component={ProductPage} />
    </div>
  );
}

export default App;
