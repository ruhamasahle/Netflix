import React from 'react';
import counterSlice from './features/counterSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';

function App() {
  const user = null

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        {!user?(
        <Route path="/" element={<Login/>}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>) : null }
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
