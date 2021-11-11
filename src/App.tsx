import React from 'react';
import './App.css';
import RouterConfig from './route/index';
import Test from './features/translation'

function App() {
  return (
    <div>
      <RouterConfig />
      <Test/>
    </div>
  );
}

export default App;
