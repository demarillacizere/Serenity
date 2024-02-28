import React from 'react';
import './App.css';
import { PageHeader } from './layouts/PageHeader';
import { WelcomeBanner } from './layouts/WelcomeBanner';


function App() {
  return (
    <div className = "max-h-screen flex flex-col">
      <PageHeader/>
      <WelcomeBanner/>
    </div>
    
  );  
}

export default App;
