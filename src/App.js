import React, { Profiler, useEffect } from 'react';
// import counterSlice from './features/userSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import { auth } from './features/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe =  auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email
        }))
      }else{
        dispatch(logout)
        }
    })
  return unsubscribe;
}, [])

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        {!user ?
        <Route path="/" element={<HomeScreen/>}  /> :
      <Route path="/login" element={<Login/>} />
      }
      <Route path = '' element={<Profiler/>}/>
      </Routes>
    </BrowserRouter>
        
    </div>
     ) }
export default App;
 