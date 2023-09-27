
import React from 'react'
import './components/css/login.css'
import { Highlights } from './components/Highlights';
import { Content } from './components/Content';
import HomePage from './components/homePage';
import Standings from './components/Standings';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';


const App = () => {
  return (
   
    
    <Router>
    <div className="App">
     
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/homePage' element={<HomePage></HomePage>}></Route>
      <Route path='/Highlights' element={<Highlights></Highlights>}></Route>
      <Route path='/Content' element={<Content></Content>}></Route>
      <Route path='/Standings' element={<Standings></Standings>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App
