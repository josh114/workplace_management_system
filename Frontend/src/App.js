import * as React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
