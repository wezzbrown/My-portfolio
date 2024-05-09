import React from 'react';
import Header from './component/header';
import Profile from './component/profile';
import Projects from './component/projects';
import Contact from './component/contact';

import './App.css'
import Tools from './component/tools';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        
      <Profile />
       <Tools/>
      <Projects />
      <Contact />

      </div>
    </div>
  );
};

export default App;