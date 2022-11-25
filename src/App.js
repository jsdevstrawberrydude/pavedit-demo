import { useState, useContext } from 'react';
import data from './assets/data.json';
import AdminPanel from './components/AdminPanel';
import Content from './components/Content';
import NavBar from './components/NavBar';
import RecruiterContent from './components/RecruiterContent';
import { AppContext } from './context/AppContext';

export function App() {
  const [state, setState] = useState(data);
  return (
    <AppContext.Provider value={{ state, setState }}>
      <div className="App">
        <NavBar />
        <AdminPanel />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;