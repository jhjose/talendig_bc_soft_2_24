import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Register from './views/Register';
import Alerts from './views/Alerts';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/alerts' element={<Alerts />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App;
