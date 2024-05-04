import React from 'react';
import Header from './component/header';
import Profile from './component/profile';
import Projects from './component/projects';
import Contact from './component/contact';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        
      <Profile />
      <Projects />
      <Contact />

      </div>
    </div>
  );
};

export default App;