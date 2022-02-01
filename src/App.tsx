import React, { useEffect } from 'react';
import { UseAppStore } from './store';
import { SettingsStore } from './store';
import { People } from './components/People';
import { Input } from './components/Input';
import './App.css';

function App() {
  const people = UseAppStore(state => state.people);
  const toggleDarkMode = SettingsStore(state => state.toggleDarkMode);
  const dark = SettingsStore(state => state.dark);

  useEffect(()=>{
    if(dark){
      document.querySelector('body')?.classList.add('dark')
    }else{
      document.querySelector('body')?.classList.remove('dark');
    }
  })
  return (
    <div className="App">
      <button onClick={toggleDarkMode} className="btn btn-prm">Toggle dark mode</button>
     <p>People</p>
     <Input/>
     <People/>
    </div>
  );
}

export default App;
