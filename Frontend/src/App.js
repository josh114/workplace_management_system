import * as React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import CreateWorkSpace from './components/Dashboard/CreateWorkSpace';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='createworkspace' element={<CreateWorkSpace />} />
      </Routes>
    </div>
  );
}

export default App;
