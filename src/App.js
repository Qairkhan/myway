import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>

      <header className='header'>
        <img src='https://i.pinimg.com/originals/3d/6a/ee/3d6aee3f59e6cc47fce1599f22636d6d.png' />

      </header>
      <nav className='nav'>
        <div><a href="#">main</a></div>
        <div><a href="#">feed</a></div>
        <div><a href="#">music</a></div>
        <div><a href="#">sms</a></div>
      
      </nav>
      <div className='content'>
        <div><img src='https://s1.1zoom.ru/big3/708/DOTA_2_Phantom_assassin_453455.jpg'/></div>
        
        <div>ava</div>
        <div>post
          <div>newpost</div>
        </div>
        <div>post1</div>
        <div>post2</div>
        </div>
    </div>
  );
}

export default App;
