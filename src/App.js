import React from 'react';
import counterSlice from './features/counter/counterSlice';

import './App.css';
import HomeScreen from './HomeScreen';

function App() {
  return (
    <div className="app">
        <HomeScreen/>
    </div>
  );
}

export default App;
