
import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Switch from './components/logo/Switch';
import ThemeContext from './ThemeContext';

function App() {
  const[theme,setTheme]=useState("dark")
 
  return (
    <div className="App">
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Switch/>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
