import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './components/Navbar';
import {DarkModeProvider} from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Navbar />
      <Outlet />
    </DarkModeProvider>
  );
}

export default App;
