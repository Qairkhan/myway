import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/navbar';
import Profile from './components/profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
